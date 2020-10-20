// forEach 支持传入两个参数，callback、thisArg
// callback 返回3个参数，当前元素、当前元素索引、原数组
// thisArg 传入后，改变 callback 的 this 指针
Array.prototype.myforeach = function (fn, context = null) {
  let index = 0;
  let arr = this;
  if (typeof fn !== 'function') {
      throw new TypeError(fn + ' is not a function');
  }
  while (index < arr.length) {
      if (index in arr) { // 数组的下标并不一定是连续的
          fn.call(context, arr[index], index, arr);
      }
      index ++;
  }
};

let arr1 = [1,3,5,7,9,11]
arr1.myforeach((item, index, arr) => {
  console.log(item, index, arr)
})