// some 和 find，除了返回值有区别，其他的可以说都一样。

Array.prototype.mysome = function (fn, context = null) {
  let arr = this;
  let len = arr.length;
  let index = 0;
  if (typeof fn !== 'function') {
    throw new TypeError(fn + ' is not a function');
  }
  while (index < len) {
    if (index in arr) {
      let result = fn.call(context, arr[index], index, arr);
      if (result) return true; // 找到一个满足的，立即返回true
    }
    index++;
  }
  return false; // 找不到返回 false
};