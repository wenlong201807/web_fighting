// map 的实现大体和 forEach 类似，只是返回了一个新数组。

// 参数和forEach一样
// callback 需要有一个返回值
Array.prototype.mymap = function (fn, context = null) {
  let arr = this;
  let len = arr.length;
  let index = 0;
  let newArr = [];
  if (typeof fn !== 'function') {
    throw new TypeError(fn + ' is not a function');
  }
  while (index < len) {
    if (index in arr) {
      let result = fn.call(context, arr[index], index, arr);
      newArr[index] = result; // 返回值作为一个新数组
    }
    index++;
  }
  return newArr;
};