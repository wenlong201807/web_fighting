// reduce 稍微麻烦一些，需要根据第二个参数是否存在，使用不同的处理方式。

Array.prototype.myreduce = function (...arg) {
  let arr = this;
  let len = arr.length;
  let index = 0;
  let fn = arg[0], result;
  if (arg.length >= 2) { // 判断是否有第二个参数，有的话作为回调函数运行的初始值
    result = arg[1];
  } else {
    // reduce 在没有第二个参数的时候，会把数组的第一项作为回调的初始值
    // 第一项并不一定是 a[0]
    while (index < len && !(index in arr)) {
      // 下标小于数组长度且下标不属于该数组就一直循环，用来找到数组的第一项
      index++;
    }
    if (index >= len) { // 如果第一项大于等于数组长度，则说明是空数组
      throw new TypeError('空数组且没有初始值');
    }
    result = arr[index++]; // 赋值之后下标+1
  }
  if (typeof fn !== 'function') {
    throw new TypeError(fn + ' is not a function');
  }
  while (index < len) {
    if (index in arr) {
      result = fn(result, arr[index], index, arr); // 每次回调的返回值，都会传入下次回调
    }
    index++;
  }
  return result;
};