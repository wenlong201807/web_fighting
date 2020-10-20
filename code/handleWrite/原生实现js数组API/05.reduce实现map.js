// 经常会有面试问到这道题，顺便写一下。

Array.prototype.mapByreduce = function (fn, context = null) {
  let arr = this;
  if (typeof fn !== 'function') {
    throw new TypeError(fn + ' is not a function');
  }
  return arr.reduce((pre, cur, index, array) => {
    let res = fn.call(context, cur, index, array);
    return [...pre, res]; // 返回一个新数组
  }, []);
};