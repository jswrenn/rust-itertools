use std::fmt;
use std::ops::Index;

/// An iterator to iterate through all the `n`-length combinations in an iterator.
/// Note: it iterates over combinations in lexicographic order and
/// thus may not work as expected with infinite iterators.
///
/// See [`.combinations()`](../trait.Itertools.html#method.combinations) for more information.
#[must_use = "iterator adaptors are lazy and do nothing unless consumed"]
pub struct Combinations<I: Iterator> {
    n: usize,
    indices: Vec<usize>,
    pool: LazyBuffer<I>,
    pos: usize,
}

impl<I> fmt::Debug for Combinations<I>
where
    I: Iterator + fmt::Debug,
    I::Item: fmt::Debug,
{
    debug_fmt_fields!(Combinations, n, indices, pool, pos);
}

/// Create a new `Combinations` from a clonable iterator.
pub fn combinations<I>(iter: I, n: usize) -> Combinations<I>
where
    I: Iterator,
{
    let mut indices: Vec<usize> = Vec::with_capacity(n);
    for i in 0..n {
        indices.push(i);
    }
    let mut pool: LazyBuffer<I> = LazyBuffer::new(iter);

    for _ in 0..n {
        if !pool.get_next() {
            break;
        }
    }

    Combinations {
        n: n,
        indices: indices,
        pool: pool,
        pos: 0,
    }
}

impl<I> Iterator for Combinations<I>
where
    I: Iterator,
    I::Item: Clone,
{
    type Item = Vec<I::Item>;
    fn next(&mut self) -> Option<Self::Item> {
        let mut pool_len = self.pool.len();
        if self.pool.is_done() && (pool_len == 0 || self.n > pool_len) {
            return None;
        }

        if self.pos != 0 {
            if self.n == 0 {
                return None;
            }

            // Scan from the end, looking for an index to increment
            let mut i: usize = self.n - 1;

            // Check if we need to consume more from the iterator
            if self.indices[i] == pool_len - 1 && self.pool.get_next() {
                pool_len += 1;
            }

            if self.indices[0] == pool_len - self.n {
                return None;
            }

            while self.indices[i] == i + pool_len - self.n {
                i -= 1;
            }

            // Increment index, and reset the ones to its right
            self.indices[i] += 1;
            for j in i + 1..self.n {
                self.indices[j] = self.indices[j - 1] + 1;
            }
        }

        self.pos += 1;

        // Create result vector based on the indices
        let mut result = Vec::with_capacity(self.n);
        for i in self.indices.iter() {
            result.push(self.pool[*i].clone());
        }
        Some(result)
    }

    fn nth(&mut self, n: usize) -> Option<Self::Item> {
        if n == 0 {
            return self.next();
        } else if self.n == 0 {
            return None;
        }

        // calculate 'absolute' position starting with 1
        // to simplify calculations
        let abs = n + self.pos + 1;
        let mut pool_len = self.pool.len();
        while pool_len - self.n + 1 < abs && self.pool.get_next() {
            pool_len += 1;
        }

        let cnk = c_n_k(pool_len, self.n);
        if self.pool.is_done() && cnk < abs {
            self.pos = cnk;
            return None;
        }

        // Here we are trying to calculate abs-th combination,
        // counting from 1. We do so by calculating number of
        // all possible combinations which have self.indices[ind] = pos.
        let mut count = 0; // current count of already iterated combinations
        let mut ind = 0; // current index (lies in 0..self.n)
        let mut pos = 0; // current position in pool (lies in 0..pool_len)
        while count <= abs && ind < self.n {
            let cnk = c_n_k(pool_len - 1 - pos, self.n - ind - 1);
            if count + cnk < abs {
                // if less than abs combinations are possible,
                // we should just try next position for current index
                count += cnk;
            } else {
                // in this case, current position is 'saturated' and
                // we need to start processing next index
                self.indices[ind] = pos;
                ind += 1;
            }
            pos += 1;
        }

        self.pos = abs;

        // Create result vector based on the indices
        let mut result = Vec::with_capacity(self.n);
        for i in self.indices.iter() {
            result.push(self.pool[*i].clone());
        }
        Some(result)
    }
}

// C(n,k) is binomial coefficient.
fn c_n_k(n: usize, k: usize) -> usize {
    let a: usize = (n - k + 1..n+1).product();
    let b: usize = (1..k+1).product();
    a / b
}

#[derive(Debug)]
struct LazyBuffer<I: Iterator> {
    it: I,
    done: bool,
    buffer: Vec<I::Item>,
}

impl<I> LazyBuffer<I>
where
    I: Iterator,
{
    pub fn new(it: I) -> LazyBuffer<I> {
        let mut it = it;
        let mut buffer = Vec::new();
        let done;
        if let Some(first) = it.next() {
            buffer.push(first);
            done = false;
        } else {
            done = true;
        }
        LazyBuffer {
            it: it,
            done: done,
            buffer: buffer,
        }
    }

    pub fn len(&self) -> usize {
        self.buffer.len()
    }

    pub fn is_done(&self) -> bool {
        self.done
    }

    pub fn get_next(&mut self) -> bool {
        if self.done {
            return false;
        }
        let next_item = self.it.next();
        match next_item {
            Some(x) => {
                self.buffer.push(x);
                true
            }
            None => {
                self.done = true;
                false
            }
        }
    }
}

impl<I> Index<usize> for LazyBuffer<I>
where
    I: Iterator,
    I::Item: Sized,
{
    type Output = I::Item;

    fn index<'b>(&'b self, _index: usize) -> &'b I::Item {
        self.buffer.index(_index)
    }
}
