// find 和 filter 很类似，找到一个就返回当前元素，找不到返回 undefined。

// findIndex 找到返回下标，找不到返回 -1。和 indexOf 类似，区别是支持回调。

Array.prototype.myfind = function (fn, context = null) {
  let arr = this;
  let len = arr.length;
  let index = 0;
  if (typeof fn !== 'function') {
    throw new TypeError(fn + ' is not a function');
  }
  while (index < len) {
    if (index in arr) {
      let result = fn.call(context, arr[index], index, arr);
      if (result) return arr[index]; // 满足条件就返回
    }
    index++;
  }
  return undefined;
};