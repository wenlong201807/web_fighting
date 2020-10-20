// 跟 some 相比，每个成员都满足条件才返回 true，有一个不满足就返回 false。

Array.prototype.myevery = function (fn, context = null) {
  let arr = this;
  let len = arr.length;
  let index = 0;
  if (typeof fn !== 'function') {
    throw new TypeError(fn + ' is not a function');
  }
  while (index < len) {
    if (index in arr) {
      let result = fn.call(context, arr[index], index, arr);
      if (!result) return false; // 有一个不满足，就返回false
    }
    index++;
  }
  return true;
};

// 刚刚接连几个 filter、find、some、every 在实现和功能上都很相似，
// 只是返回值上有一些差别，所以更要在合适的场景使用合适的方法。