use std::collections::HashMap;
use std::hash::Hash;

mod private {
    use std::cmp::{max, min};
    use std::hash::Hash;
    use std::fmt::Debug;
    use std::collections::HashMap;

    #[derive(Clone)]
    #[must_use = "iterator adaptors are lazy and do nothing unless consumed"]
    pub struct DuplicatesBy<I, V, K>
    where
        I: Iterator,
    {
        pub(crate) iter: I,
        pub(crate) used: HashMap<V, bool>,
        pub(crate) pending: usize,
        pub(crate) k: K,
    }

    impl<I, V, F> Debug for DuplicatesBy<I, V, F>
    where
        I: Iterator + Debug,
        V: Debug,
    {
        debug_fmt_fields!(DuplicatesBy, iter, used);
    }

    impl<I, V, K> Iterator for DuplicatesBy<I, V, K>
    where
        I: Iterator,
        V: Eq + Hash,
        K: for<'i> Key<'i, I::Item, V>
    {
        type Item = I::Item;

        fn next(&mut self) -> Option<Self::Item> {
            while let Some(v) = self.iter.next() {
                let key = self.k.key(&v);
                match self.used.get_mut(&key) {
                    None => {
                        self.used.insert(key, false);
                        self.pending += 1;
                    },
                    Some(true) => {},
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

    impl<I, V, K> DoubleEndedIterator for DuplicatesBy<I, V, K>
    where
        I: DoubleEndedIterator,
        V: Eq + Hash,
        K: for<'i> Key<'i, I::Item, V>
    {
        fn next_back(&mut self) -> Option<Self::Item> {
            while let Some(v) = self.iter.next_back() {
                let key = self.k.key(&v);
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

    /// A keying function for use with `DuplicatesBy`
    pub trait Key<'i, Input, Output>
    {
        fn key(&mut self, item: &'i Input) -> Output;
    }

    /// Apply a user-supplied function to elements before checking them for equality.
    #[derive(Clone)]
    pub struct ByFn<F>(pub(crate) F);

    impl<'i, I, O, F> Key<'i, I, O> for ByFn<F>
    where
        I: 'i,
        F: FnMut(&'i I) -> O
    {
        #[inline(always)]
        fn key(&mut self, item: &'i I) -> O {
            (self.0)(item)
        }
    }

    /// Apply the identity function to elements before checking them for equality.
    #[derive(Clone)]
    pub struct ById;

    impl<'i, Item> Key<'i, Item, &'i Item> for ById
    {
        #[inline(always)]
        fn key(&mut self, item: &'i Item) -> &'i Item {
            item
        }
    }
}

/// An iterator adapter to filter for duplicate elements.
///
/// See [`.duplicates()`](../trait.Itertools.html#method.duplicates) for more information.
#[must_use = "iterator adaptors are lazy and do nothing unless consumed"]
pub type DuplicatesBy<I, V, F> = private::DuplicatesBy<I, V, private::ByFn<F>>;

/// Create a new `DuplicatesBy` iterator.
pub fn duplicates_by<I, V, F>(iter: I, f: F) -> DuplicatesBy<I, V, F>
where
    V: Eq + Hash,
    F: FnMut(&I::Item) -> V,
    I: Iterator,
{
    DuplicatesBy {
        iter,
        used: HashMap::new(),
        pending: 0,
        k: private::ByFn(f),
    }
}

/// An iterator adapter to filter for duplicate elements.
///
/// See [`.duplicates()`](../trait.Itertools.html#method.duplicates) for more information.
#[must_use = "iterator adaptors are lazy and do nothing unless consumed"]
pub type Duplicates<I> = private::DuplicatesBy<I, <I as Iterator>::Item, private::ById>;

pub fn duplicates<I>(iter: I) -> Duplicates<I>
where
    I: Iterator,
    I::Item: Eq + Hash,
{
    Duplicates {
        iter,
        used: HashMap::new(),
        pending: 0,
        k: private::ById,
    }
}
