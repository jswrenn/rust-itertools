use std::cmp::{max, min};
use std::collections::HashMap;
use std::hash::Hash;
use std::fmt;

/// An iterator adapter to filter out duplicate elements.
///
/// See [`.duplicates_by()`](../trait.Itertools.html#method.duplicates) for more information.
#[derive(Clone)]
#[must_use = "iterator adaptors are lazy and do nothing unless consumed"]
pub struct DuplicatesBy<I: Iterator, V, F> {
    iter: I,
    used: HashMap<V, bool>,
    pending: usize,
    f: F,
}

impl<I, V, F> fmt::Debug for DuplicatesBy<I, V, F>
    where I: Iterator + fmt::Debug,
          V: fmt::Debug + Hash + Eq,
{
    debug_fmt_fields!(DuplicatesBy, iter, used);
}

/// Create a new `DuplicatesBy` iterator.
pub fn duplicates_by<I, V, F>(iter: I, f: F) -> DuplicatesBy<I, V, F>
    where V: Eq + Hash,
          F: FnMut(&I::Item) -> V,
          I: Iterator,
{
    DuplicatesBy {
        iter,
        used: HashMap::new(),
        pending: 0,
        f,
    }
}

impl<I, V, F> Iterator for DuplicatesBy<I, V, F>
    where I: Iterator,
          V: Eq + Hash,
          F: FnMut(&I::Item) -> V
{
    type Item = I::Item;

    fn next(&mut self) -> Option<Self::Item> {
        while let Some(v) = self.iter.next() {
            let key = (self.f)(&v);
            match self.used.get_mut(&key) {
                None => {
                    self.used.insert(key, false);
                    self.pending += 1;
                },
                Some(true) => (),
                Some(produced) => {
                    *produced = true;
                    self.pending -= 1;
                    return Some(v);
                },
            }
        }
        None
    }

    #[inline]
    fn size_hint(&self) -> (usize, Option<usize>) {
        let (_, hi) = self.iter.size_hint();
        // There are `hi` number of items left in the base iterator. In the best case scenario,
        // these items are exactly the same as the ones pending (i.e items seen exactly once so
        // far), plus (hi - pending) / 2 pairs of never seen before items.
        let hi = hi.map(|hi| {
            let max_pending = min(self.pending, hi);
            let max_new = max(hi - self.pending, 0) / 2;
            max_pending + max_new
        });
        // The lower bound is always 0 since we might only get unique items from now on
        (0, hi)
    }
}

impl<I, V, F> DoubleEndedIterator for DuplicatesBy<I, V, F>
    where I: DoubleEndedIterator,
          V: Eq + Hash,
          F: FnMut(&I::Item) -> V
{
    fn next_back(&mut self) -> Option<Self::Item> {
        while let Some(v) = self.iter.next_back() {
            let key = (self.f)(&v);
            match self.used.get_mut(&key) {
                None => {
                    self.used.insert(key, false);
                    self.pending += 1;
                },
                Some(true) => (),
                Some(produced) => {
                    *produced = true;
                    self.pending -= 1;
                    return Some(v);
                },
            }
        }
        None
    }
}

impl<I> Iterator for Duplicates<I>
    where I: Iterator,
          I::Item: Eq + Hash
{
    type Item = I::Item;

    fn next(&mut self) -> Option<Self::Item> {
        while let Some(v) = self.iter.iter.next() {
            match self.iter.used.get_mut(&v) {
                None => {
                    self.iter.used.insert(v, false);
                    self.iter.pending += 1;
                },
                Some(true) => (),
                Some(produced) => {
                    *produced = true;
                    self.iter.pending -= 1;
                    return Some(v);
                },
            }
        }
        None
    }

    #[inline]
    fn size_hint(&self) -> (usize, Option<usize>) {
        let (_, hi) = self.iter.iter.size_hint();
        // There are `hi` number of items left in the base iterator. In the best case scenario,
        // these items are exactly the same as the ones pending (i.e items seen exactly once so
        // far), plus (hi - pending) / 2 pairs of never seen before items.
        let hi = hi.map(|hi| {
            let max_pending = min(self.iter.pending, hi);
            let max_new = max(hi - self.iter.pending, 0) / 2;
            max_pending + max_new
        });
        // The lower bound is always 0 since we might only get unique items from now on
        (0, hi)
    }
}

impl<I> DoubleEndedIterator for Duplicates<I>
    where I: DoubleEndedIterator,
          I::Item: Eq + Hash
{
    fn next_back(&mut self) -> Option<Self::Item> {
        while let Some(v) = self.iter.iter.next_back() {
            match self.iter.used.get_mut(&v) {
                None => {
                    self.iter.used.insert(v, false);
                    self.iter.pending += 1;
                },
                Some(true) => (),
                Some(produced) => {
                    *produced = true;
                    self.iter.pending -= 1;
                    return Some(v);
                },
            }
        }
        None
    }
}

/// An iterator adapter to filter out duplicate elements.
///
/// See [`.duplicates()`](../trait.Itertools.html#method.duplicates) for more information.
#[derive(Clone)]
#[must_use = "iterator adaptors are lazy and do nothing unless consumed"]
pub struct Duplicates<I: Iterator> {
    iter: DuplicatesBy<I, I::Item, ()>,
}

impl<I> fmt::Debug for Duplicates<I>
    where I: Iterator + fmt::Debug,
          I::Item: Hash + Eq + fmt::Debug,
{
    debug_fmt_fields!(Duplicates, iter);
}

pub fn duplicates<I>(iter: I) -> Duplicates<I>
    where I: Iterator,
          I::Item: Eq + Hash,
{
    Duplicates {
        iter: DuplicatesBy {
            iter,
            used: HashMap::new(),
            pending: 0,
            f: (),
        }
    }
}
