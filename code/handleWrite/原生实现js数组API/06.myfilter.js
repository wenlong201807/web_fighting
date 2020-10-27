// filter 一般用来筛选。

Array.prototype.myfilter = function (fn, context = null) {
  let arr = this;
  let len = arr.length;
  let index = 0, k = 0;
  let newArr = [];
  if (typeof fn !== 'function') {
    throw new TypeError(fn + ' is not a function');
  }
  while (index < len) {
    if (index in arr) {
      let result = fn.call(context, arr[index], index, arr);
      if (result) newArr[k++] = arr[index]; // 如果返回值为真，就添加进新数组
    }
    index++;
  }
  return newArr;
};