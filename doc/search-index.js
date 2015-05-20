var searchIndex = {};
searchIndex['itertools'] = {"items":[[0,"","itertools","Itertools — extra iterator adaptors, functions and macros.",null,null],[3,"Interleave","","An iterator adaptor that alternates elements from two iterators until both\nrun out.",null,null],[3,"Product","","An iterator adaptor that iterates over the cartesian product of\nthe element sets of two iterators **I** and **J**.",null,null],[3,"PutBack","","An iterator adaptor that allows putting back a single\nitem to the front of the iterator.",null,null],[3,"PutBackN","","An iterator adaptor that allows putting multiple\nitems in front of the iterator.",null,null],[3,"FnMap","","**Deprecated:** Use *.map_fn()* instead.",null,null],[3,"Batching","","A “meta iterator adaptor”. Its closure recives a reference to the iterator\nand may pick off as many elements as it likes, to produce the next iterator element.",null,null],[3,"GroupBy","","An iterator adaptor that groups iterator elements. Consecutive elements\nthat map to the same key (“runs”), are returned as the iterator elements.",null,null],[3,"Step","","An iterator adaptor that steps a number elements in the base iterator\nfor each iteration.",null,null],[3,"Merge","","An iterator adaptor that merges the two base iterators in ascending order.\nIf both base iterators are sorted (ascending), the result is sorted.",null,null],[3,"MultiPeek","","An iterator adaptor that allows the user to peek at multiple *.next()*\nvalues without advancing itself.",null,null],[3,"TakeWhileRef","","An iterator adaptor that borrows from a **Clone**-able iterator\nto only pick off elements while the predicate returns **true**.",null,null],[3,"Coalesce","","An iterator adaptor that may join together adjacent elements.",null,null],[3,"Combinations","","An iterator to iterate through all the combinations of pairs in a **Clone**-able iterator.",null,null],[3,"Intersperse","","An iterator adaptor to insert a particular value\nbetween each element of the adapted iterator.",null,null],[3,"ISlice","","An iterator adaptor that yields a subset (a slice) of the base iterator.",null,null],[3,"RepeatN","","An iterator that repeats an element exactly *n* times.",null,null],[3,"RcIter","","A wrapper for **Rc\\<RefCell\\<I\\>\\>**, that implements the **Iterator** trait.",null,null],[12,"rciter","","The boxed iterator.",0,null],[3,"Stride","","An iterator similar to the slice iterator, but with a certain number of steps\n(the stride) skipped per iteration.",null,null],[3,"StrideMut","","The mutable equivalent of Stride.",null,null],[3,"Tee","","One half of an iterator pair where both return the same elements.",null,null],[3,"Times","","A simple iterator to repeat a given number of times",null,null],[3,"Linspace","","An iterator of a sequence of evenly spaced floats.",null,null],[3,"RepeatCall","","An iterator source that produces elements indefinitely by calling\na given closure.",null,null],[3,"ZipLongest","","An iterator which iterates two other iterators simultaneously",null,null],[3,"Zip","","An iterator that generalizes *.zip()* and allows running multiple iterators in lockstep.",null,null],[4,"EitherOrBoth","","A value yielded by `ZipLongest`.\nContains one or two values, depending on which of the input iterators are exhausted.",null,null],[13,"Both","","Neither input iterator is exhausted yet, yielding two values.",1,null],[13,"Left","","The parameter iterator of `.zip_longest()` is exhausted,\nonly yielding a value from the `self` iterator.",1,null],[13,"Right","","The `self` iterator of `.zip_longest()` is exhausted,\nonly yielding a value from the parameter iterator.",1,null],[5,"times","","Return an iterator with `n` elements, for simple repetition\na particular number of times. The iterator yields a counter.",null,{"inputs":[{"name":"usize"}],"output":{"name":"times"}}],[5,"linspace","","Return an iterator with `n` elements, where the first\nelement is `a` and the last element is `b`.",null,{"inputs":[{"name":"f"},{"name":"f"},{"name":"usize"}],"output":{"name":"linspace"}}],[5,"equal","","Return **true** if both iterators produce equal sequences\n(elements pairwise equal and sequences of the same length),\n**false** otherwise.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"bool"}}],[5,"partition","","Partition a sequence using predicate **pred** so that elements\nthat map to **true** are placed before elements which map to **false**.",null,{"inputs":[{"name":"i"},{"name":"f"}],"output":{"name":"usize"}}],[11,"clone","","",2,{"inputs":[{"name":"interleave"}],"output":{"name":"interleave"}}],[11,"new","","Creat a new **Interleave** iterator.",2,{"inputs":[{"name":"interleave"},{"name":"i"},{"name":"j"}],"output":{"name":"interleave"}}],[11,"next","","",2,{"inputs":[{"name":"interleave"}],"output":{"name":"option"}}],[11,"new","","**Deprecated:** Use *.map_fn()* instead.",3,null],[11,"next","","",3,{"inputs":[{"name":"fnmap"}],"output":{"name":"option"}}],[11,"size_hint","","",3,null],[11,"next_back","","",3,{"inputs":[{"name":"fnmap"}],"output":{"name":"option"}}],[11,"clone","","",3,{"inputs":[{"name":"fnmap"}],"output":{"name":"self"}}],[11,"clone","","",4,{"inputs":[{"name":"putback"}],"output":{"name":"putback"}}],[11,"new","","Iterator element type is `A`",4,{"inputs":[{"name":"putback"},{"name":"i"}],"output":{"name":"self"}}],[11,"put_back","","Put back a single value to the front of the iterator.",4,{"inputs":[{"name":"putback"},{"name":"i"}],"output":null}],[11,"next","","",4,{"inputs":[{"name":"putback"}],"output":{"name":"option"}}],[11,"size_hint","","",4,null],[11,"new","","Iterator element type is `A`",5,{"inputs":[{"name":"putbackn"},{"name":"i"}],"output":{"name":"self"}}],[11,"put_back","","Puts x in front of the iterator.\nThe values are yielded in order.",5,{"inputs":[{"name":"putbackn"},{"name":"i"}],"output":null}],[11,"next","","",5,{"inputs":[{"name":"putbackn"}],"output":{"name":"option"}}],[11,"size_hint","","",5,null],[11,"clone","","",5,{"inputs":[{"name":"putbackn"}],"output":{"name":"self"}}],[11,"clone","","",6,{"inputs":[{"name":"product"}],"output":{"name":"product"}}],[11,"new","","Create a new cartesian product iterator",6,{"inputs":[{"name":"product"},{"name":"i"},{"name":"j"}],"output":{"name":"self"}}],[11,"next","","",6,{"inputs":[{"name":"product"}],"output":{"name":"option"}}],[11,"size_hint","","",6,null],[11,"clone","","",7,{"inputs":[{"name":"batching"}],"output":{"name":"batching"}}],[11,"new","","Create a new Batching iterator.",7,{"inputs":[{"name":"batching"},{"name":"i"},{"name":"f"}],"output":{"name":"batching"}}],[11,"next","","",7,{"inputs":[{"name":"batching"}],"output":{"name":"option"}}],[11,"size_hint","","",7,null],[11,"clone","","",8,{"inputs":[{"name":"groupby"}],"output":{"name":"groupby"}}],[11,"new","","Create a new **GroupBy** iterator.",8,{"inputs":[{"name":"groupby"},{"name":"i"},{"name":"f"}],"output":{"name":"self"}}],[11,"next","","",8,{"inputs":[{"name":"groupby"}],"output":{"name":"option"}}],[11,"size_hint","","",8,null],[11,"clone","","",9,{"inputs":[{"name":"step"}],"output":{"name":"step"}}],[11,"new","","Create a **Step** iterator.",9,{"inputs":[{"name":"step"},{"name":"i"},{"name":"usize"}],"output":{"name":"self"}}],[11,"next","","",9,{"inputs":[{"name":"step"}],"output":{"name":"option"}}],[11,"size_hint","","",9,null],[11,"new","","Create a **Merge** iterator.",10,{"inputs":[{"name":"merge"},{"name":"i"},{"name":"j"},{"name":"f"}],"output":{"name":"self"}}],[11,"clone","","",10,{"inputs":[{"name":"merge"}],"output":{"name":"self"}}],[11,"next","","",10,{"inputs":[{"name":"merge"}],"output":{"name":"option"}}],[11,"size_hint","","",10,null],[11,"clone","","",11,{"inputs":[{"name":"multipeek"}],"output":{"name":"multipeek"}}],[11,"new","","Create a **MultiPeek** iterator.",11,{"inputs":[{"name":"multipeek"},{"name":"i"}],"output":{"name":"multipeek"}}],[11,"peek","","Works exactly like *.next()* with the only difference that it doesn't\nadvance itself. *.peek()* can be called multiple times, to peek\nfurther ahead.",11,{"inputs":[{"name":"multipeek"}],"output":{"name":"option"}}],[11,"next","","",11,{"inputs":[{"name":"multipeek"}],"output":{"name":"option"}}],[11,"size_hint","","",11,null],[11,"clone","","",12,{"inputs":[{"name":"coalesce"}],"output":{"name":"coalesce"}}],[11,"new","","Create a new **Coalesce**.",12,{"inputs":[{"name":"coalesce"},{"name":"i"},{"name":"f"}],"output":{"name":"self"}}],[11,"next","","",12,{"inputs":[{"name":"coalesce"}],"output":{"name":"option"}}],[11,"size_hint","","",12,null],[11,"new","","Create a new **TakeWhileRef** from a reference to clonable iterator.",13,{"inputs":[{"name":"takewhileref"},{"name":"i"},{"name":"f"}],"output":{"name":"self"}}],[11,"next","","",13,{"inputs":[{"name":"takewhileref"}],"output":{"name":"option"}}],[11,"size_hint","","",13,null],[11,"clone","","",14,{"inputs":[{"name":"combinations"}],"output":{"name":"combinations"}}],[11,"new","","Create a new **Combinations** from a clonable iterator.",14,{"inputs":[{"name":"combinations"},{"name":"i"}],"output":{"name":"combinations"}}],[11,"next","","",14,{"inputs":[{"name":"combinations"}],"output":{"name":"option"}}],[11,"size_hint","","",14,null],[11,"clone","","",15,{"inputs":[{"name":"intersperse"}],"output":{"name":"intersperse"}}],[11,"new","","Create a new Intersperse iterator",15,{"inputs":[{"name":"intersperse"},{"name":"i"},{"name":"i"}],"output":{"name":"self"}}],[11,"next","","",15,{"inputs":[{"name":"intersperse"}],"output":{"name":"option"}}],[11,"size_hint","","",15,null],[11,"clone","","",16,{"inputs":[{"name":"islice"}],"output":{"name":"islice"}}],[11,"new","","Create a new **ISlice**.",16,{"inputs":[{"name":"islice"},{"name":"i"},{"name":"r"}],"output":{"name":"self"}}],[11,"next","","",16,{"inputs":[{"name":"islice"}],"output":{"name":"option"}}],[11,"size_hint","","",16,null],[11,"next","","",17,{"inputs":[{"name":"linspace"}],"output":{"name":"option"}}],[11,"size_hint","","",17,null],[0,"misc","","A module of helper traits and iterators that are not intended to be used\ndirectly.",null,null],[3,"FlatTuples","itertools::misc","A helper iterator that maps an iterator of tuples like\n`((A, B), C)` to an iterator of `(A, B, C)`.",null,null],[8,"IntoIteratorTuple","","Apply **IntoIterator** on each element of a tuple.",null,null],[16,"Output","","Tuple of values that implement **Iterator**.",18,null],[10,"into_iterator_tuple","","Return a tuple of iterators.",18,{"inputs":[{"name":"intoiteratortuple"}],"output":{"name":"output"}}],[8,"AppendTuple","","A helper trait for (x, y, z) ++ w => (x, y, z, w),\nused for implementing `iproduct!`.",null,null],[16,"Result","","Resulting tuple type",19,null],[10,"append","","“Append” value **x** to a tuple.",19,{"inputs":[{"name":"appendtuple"},{"name":"x"}],"output":{"name":"result"}}],[8,"GenericRange","","**GenericRange** is implemented by Rust's built-in range types, produced\nby range syntax like `a..`, `..b` or `c..d`.",null,null],[8,"ToFloat","","Helper trait to convert usize to floating point type.",null,null],[8,"MendSlice","","A trait for items that can *maybe* be joined together.",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[11,"clone","","",20,{"inputs":[{"name":"flattuples"}],"output":{"name":"flattuples"}}],[6,"Item","","",null,null],[11,"next","","",20,{"inputs":[{"name":"flattuples"}],"output":{"name":"option"}}],[11,"size_hint","","",20,null],[11,"next_back","","",20,{"inputs":[{"name":"flattuples"}],"output":{"name":"option"}}],[11,"start","core::ops","",21,{"inputs":[{"name":"rangefrom"}],"output":{"name":"option"}}],[11,"end","","",22,{"inputs":[{"name":"rangeto"}],"output":{"name":"option"}}],[11,"start","","",23,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"end","","",23,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"new","itertools","Create a new RcIter.",0,{"inputs":[{"name":"rciter"},{"name":"i"}],"output":{"name":"rciter"}}],[11,"clone","","",0,{"inputs":[{"name":"rciter"}],"output":{"name":"rciter"}}],[11,"next","","",0,{"inputs":[{"name":"rciter"}],"output":{"name":"option"}}],[11,"size_hint","","",0,null],[11,"next_back","","",0,{"inputs":[{"name":"rciter"}],"output":{"name":"option"}}],[11,"new","","Create a new **RepeatN** with **n** repetitions.",24,{"inputs":[{"name":"repeatn"},{"name":"a"},{"name":"usize"}],"output":{"name":"self"}}],[11,"next","","",24,{"inputs":[{"name":"repeatn"}],"output":{"name":"option"}}],[11,"size_hint","","",24,null],[11,"next_back","","",24,{"inputs":[{"name":"repeatn"}],"output":{"name":"option"}}],[11,"new","","Create a new **RepeatCall** from a closure.",25,{"inputs":[{"name":"repeatcall"},{"name":"f"}],"output":{"name":"self"}}],[11,"next","","",25,{"inputs":[{"name":"repeatcall"}],"output":{"name":"option"}}],[11,"size_hint","","",25,null],[11,"next_back","","",25,{"inputs":[{"name":"repeatcall"}],"output":{"name":"option"}}],[0,"size_hint","","Arithmetic on **Iterator** *.size_hint()* values.",null,null],[5,"add","itertools::size_hint","Add **SizeHint** correctly.",null,{"inputs":[{"name":"sizehint"},{"name":"sizehint"}],"output":{"name":"sizehint"}}],[5,"add_scalar","","Add **x** correctly to a **SizeHint**.",null,{"inputs":[{"name":"sizehint"},{"name":"usize"}],"output":{"name":"sizehint"}}],[5,"sub_scalar","","Sbb **x** correctly to a **SizeHint**.",null,{"inputs":[{"name":"sizehint"},{"name":"usize"}],"output":{"name":"sizehint"}}],[5,"mul_scalar","","Multiply **x** correctly with a **SizeHint**.",null,{"inputs":[{"name":"sizehint"},{"name":"usize"}],"output":{"name":"sizehint"}}],[5,"mul","","Multiply **SizeHint** correctly",null,{"inputs":[{"name":"sizehint"},{"name":"sizehint"}],"output":{"name":"sizehint"}}],[5,"max","","Return the maximum",null,{"inputs":[{"name":"sizehint"},{"name":"sizehint"}],"output":{"name":"sizehint"}}],[5,"min","","Return the minimum",null,{"inputs":[{"name":"sizehint"},{"name":"sizehint"}],"output":{"name":"sizehint"}}],[6,"SizeHint","","**SizeHint** is the return type of **Iterator::size_hint()**.",null,null],[11,"from_ptr_len","itertools","Create a Stride iterator from a raw pointer.",26,null],[11,"from_ptr_len","","Create a StrideMut iterator from a raw pointer.",27,null],[11,"from_slice","","Create Stride iterator from a slice and the element step count.",26,null],[11,"from_stride","","Create Stride iterator from an existing Stride iterator",26,{"inputs":[{"name":"stride"},{"name":"stride"},{"name":"isize"}],"output":{"name":"stride"}}],[11,"swap_ends","","Swap the begin and end and reverse the stride,\nin effect reversing the iterator.",26,{"inputs":[{"name":"stride"}],"output":null}],[11,"len","","Return the number of elements in the iterator.",26,{"inputs":[{"name":"stride"}],"output":{"name":"usize"}}],[11,"next","","",26,{"inputs":[{"name":"stride"}],"output":{"name":"option"}}],[11,"size_hint","","",26,null],[11,"next_back","","",26,{"inputs":[{"name":"stride"}],"output":{"name":"option"}}],[11,"index","","Return a reference to the element at a given index.",26,{"inputs":[{"name":"stride"},{"name":"usize"}],"output":{"name":"a"}}],[11,"fmt","","",26,{"inputs":[{"name":"stride"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_slice","","Create Stride iterator from a slice and the element step count.",27,null],[11,"from_stride","","Create Stride iterator from an existing Stride iterator",27,{"inputs":[{"name":"stridemut"},{"name":"stridemut"},{"name":"isize"}],"output":{"name":"stridemut"}}],[11,"swap_ends","","Swap the begin and end and reverse the stride,\nin effect reversing the iterator.",27,{"inputs":[{"name":"stridemut"}],"output":null}],[11,"len","","Return the number of elements in the iterator.",27,{"inputs":[{"name":"stridemut"}],"output":{"name":"usize"}}],[11,"next","","",27,{"inputs":[{"name":"stridemut"}],"output":{"name":"option"}}],[11,"size_hint","","",27,null],[11,"next_back","","",27,{"inputs":[{"name":"stridemut"}],"output":{"name":"option"}}],[11,"index","","Return a reference to the element at a given index.",27,{"inputs":[{"name":"stridemut"},{"name":"usize"}],"output":{"name":"a"}}],[11,"fmt","","",27,{"inputs":[{"name":"stridemut"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",26,{"inputs":[{"name":"stride"}],"output":{"name":"stride"}}],[11,"index_mut","","Return a mutable reference to the element at a given index.",27,{"inputs":[{"name":"stridemut"},{"name":"usize"}],"output":{"name":"a"}}],[11,"next","","",28,{"inputs":[{"name":"tee"}],"output":{"name":"option"}}],[11,"size_hint","","",28,null],[11,"clone","","",29,{"inputs":[{"name":"times"}],"output":{"name":"times"}}],[11,"next","","",29,{"inputs":[{"name":"times"}],"output":{"name":"option"}}],[11,"size_hint","","",29,null],[11,"next_back","","",29,{"inputs":[{"name":"times"}],"output":{"name":"option"}}],[11,"clone","","",30,{"inputs":[{"name":"ziplongest"}],"output":{"name":"ziplongest"}}],[11,"new","","Create a new **ZipLongest** iterator.",30,{"inputs":[{"name":"ziplongest"},{"name":"t"},{"name":"u"}],"output":{"name":"ziplongest"}}],[11,"next","","",30,{"inputs":[{"name":"ziplongest"}],"output":{"name":"option"}}],[11,"size_hint","","",30,null],[11,"next_back","","",30,{"inputs":[{"name":"ziplongest"}],"output":{"name":"option"}}],[11,"fmt","","",1,{"inputs":[{"name":"eitherorboth"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"eitherorboth"},{"name":"eitherorboth"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"eitherorboth"},{"name":"eitherorboth"}],"output":{"name":"bool"}}],[11,"clone","","",1,{"inputs":[{"name":"eitherorboth"}],"output":{"name":"eitherorboth"}}],[11,"clone","","",31,{"inputs":[{"name":"zip"}],"output":{"name":"zip"}}],[11,"new","","Create a new **Zip** from a tuple of iterators.",31,{"inputs":[{"name":"zip"},{"name":"t"}],"output":{"name":"zip"}}],[11,"next","","",31,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",31,null],[11,"next","","",31,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",31,null],[11,"next","","",31,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",31,null],[11,"next","","",31,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",31,null],[11,"next","","",31,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",31,null],[11,"next","","",31,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",31,null],[11,"next","","",31,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",31,null],[11,"next","","",31,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",31,null],[11,"next","","",31,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",31,null],[6,"CoalesceFn","","An iterator adaptor that may join together adjacent elements.",null,null],[6,"MapFn","","The function pointer map iterator created with *.map_fn()*.",null,null],[6,"MergeAscend","","An ascending order merge iterator created with *.merge()*.",null,null],[8,"Itertools","","The trait **Itertools**: extra iterator adaptors and methods for iterators.",null,null],[11,"interleave","","Alternate elements from two iterators until both\nrun out.",32,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"interleave"}}],[11,"intersperse","","An iterator adaptor to insert a particular value\nbetween each element of the adapted iterator.",32,{"inputs":[{"name":"itertools"},{"name":"item"}],"output":{"name":"intersperse"}}],[11,"zip_longest","","Create an iterator which iterates over both this and the specified\niterator simultaneously, yielding pairs of two optional elements.",32,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"ziplongest"}}],[11,"batching","","A “meta iterator adaptor”. Its closure recives a reference to the iterator\nand may pick off as many elements as it likes, to produce the next iterator element.",32,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"batching"}}],[11,"group_by","","Group iterator elements. Consecutive elements that map to the same key (“runs”),\nare returned as the iterator elements of **GroupBy**.",32,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"groupby"}}],[11,"tee","","Split into an iterator pair that both yield all elements from\nthe original iterator.",32,null],[11,"slice","","Return a sliced iterator.",32,{"inputs":[{"name":"itertools"},{"name":"r"}],"output":{"name":"islice"}}],[11,"into_rc","","Return an iterator inside a **Rc\\<RefCell\\<_\\>\\>** wrapper.",32,{"inputs":[{"name":"itertools"}],"output":{"name":"rciter"}}],[11,"step","","Return an iterator adaptor that steps **n** elements in the base iterator\nfor each iteration.",32,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"step"}}],[11,"merge","","Return an iterator adaptor that merges the two base iterators in ascending order.\nIf both base iterators are sorted (ascending), the result is sorted.",32,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"mergeascend"}}],[11,"merge_by","","Return an iterator adaptor that merges the two base iterators in order.\nThis is much like *.merge()* but allows for a custom ordering.",32,{"inputs":[{"name":"itertools"},{"name":"j"},{"name":"f"}],"output":{"name":"merge"}}],[11,"cartesian_product","","Return an iterator adaptor that iterates over the cartesian product of\nthe element sets of two iterators **self** and **J**.",32,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"product"}}],[11,"multipeek","","Return an iterator adapter that allows peeking multiple values.",32,{"inputs":[{"name":"itertools"}],"output":{"name":"multipeek"}}],[11,"coalesce","","Return an iterator adaptor that uses the passed-in closure to\noptionally merge together consecutive elements. For each pair the closure\nis passed the latest two elements, `x`, `y` and may return either `Ok(z)`\nto merge the two values or `Err((x, y))` to indicate they can't be merged.",32,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"coalesce"}}],[11,"dedup","","Remove duplicates from sections of consecutive identical elements.\nIf the iterator is sorted, all elements will be unique.",32,{"inputs":[{"name":"itertools"}],"output":{"name":"coalescefn"}}],[11,"mend_slices","","Return an iterator adaptor that joins together adjacent slices if possible.",32,{"inputs":[{"name":"itertools"}],"output":{"name":"coalescefn"}}],[11,"take_while_ref","","Return an iterator adaptor that borrows from a **Clone**-able iterator\nto only pick off elements while the predicate **f** returns **true**.",32,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"takewhileref"}}],[11,"combinations","","Return an iterator adaptor that iterates over the combinations of\nthe elements from an iterator.",32,{"inputs":[{"name":"itertools"}],"output":{"name":"combinations"}}],[11,"map_fn","","Like regular *.map()*, specialized to using a simple function pointer instead,\nso that the resulting **Map** iterator value can be cloned.",32,null],[11,"fn_map","","**Deprecated:** Use *.map_fn()* instead.",32,null],[11,"find_position","","Find the position and value of the first element satisfying a predicate.",32,{"inputs":[{"name":"itertools"},{"name":"p"}],"output":{"name":"option"}}],[11,"dropn","","Consume the first **n** elements of the iterator eagerly.",32,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"usize"}}],[11,"dropping","","Consume the first **n** elements from the iterator eagerly,\nand return the same iterator again.",32,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"self"}}],[11,"dropping_back","","Consume the last **n** elements from the iterator eagerly,\nand return the same iterator again.",32,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"self"}}],[11,"foreach","","Run the closure **f** eagerly on each element of the iterator.",32,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":null}],[11,"collect_vec","","**.collect_vec()** is simply a type specialization of **.collect()**,\nfor convenience.",32,{"inputs":[{"name":"itertools"}],"output":{"name":"vec"}}],[11,"set_from","","Assign to each reference in **self** from the **from** iterator,\nstopping at the shortest of the two iterators.",32,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"usize"}}],[11,"join","","Combine all iterator elements into one String, seperated by **sep**.",32,{"inputs":[{"name":"itertools"},{"name":"str"}],"output":{"name":"string"}}],[11,"fold_results","","Fold **Result** values from an iterator.",32,{"inputs":[{"name":"itertools"},{"name":"b"},{"name":"f"}],"output":{"name":"result"}}],[11,"fold1","","Accumulator of the elements in the iterator.",32,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"option"}}],[11,"is_empty_hint","","Tell if the iterator is empty or not according to its size hint.\nReturn **None** if the size hint does not tell, or return a **Some**\nvalue with the emptiness if it's possible to tell.",32,{"inputs":[{"name":"itertools"}],"output":{"name":"option"}}],[14,"iproduct!","","Create an iterator over the “cartesian product” of iterators.",null,null],[14,"izip!","","Create an iterator running multiple iterators in lockstep.",null,null],[14,"icompr!","","**Deprecated:** Will hopefully be replaced by a dedicated\nsyntax extension that can offer real convenient python-like syntax.",null,null]],"paths":[[3,"RcIter"],[4,"EitherOrBoth"],[3,"Interleave"],[3,"FnMap"],[3,"PutBack"],[3,"PutBackN"],[3,"Product"],[3,"Batching"],[3,"GroupBy"],[3,"Step"],[3,"Merge"],[3,"MultiPeek"],[3,"Coalesce"],[3,"TakeWhileRef"],[3,"Combinations"],[3,"Intersperse"],[3,"ISlice"],[3,"Linspace"],[8,"IntoIteratorTuple"],[8,"AppendTuple"],[3,"FlatTuples"],[3,"RangeFrom"],[3,"RangeTo"],[3,"Range"],[3,"RepeatN"],[3,"RepeatCall"],[3,"Stride"],[3,"StrideMut"],[3,"Tee"],[3,"Times"],[3,"ZipLongest"],[3,"Zip"],[8,"Itertools"]]};
initSearch(searchIndex);
