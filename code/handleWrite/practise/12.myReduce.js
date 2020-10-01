// 参考资料 https://blog.csdn.net/Beijiyang999/article/details/80186242
// JavaScript 实现 reduce() 方法函数

// 目标 ：自定义实现 arr.reduce(function(prev, cur, index, arr){}, initialValue)

// 第一版
Array.prototype.fakeReduce = function fakeReduce(fn, base) {
  // let arr = base ? this.unshift(base) : this;// 首进,返回新数组的长度，影响原数组 故不能这么写
  let initialArr = this;
  let arr = initialArr.concat(); //得到副本

  if (base) arr.unshift(base); // 当存在归并基础值的参数时，将其从数组首部推入
  let index;

  while (arr.length > 2) {
    index = initialArr.length - arr.length + 1;
    let newValue = fn.call(null, arr[0], arr[1], index, initialArr);
    arr.splice(0, 2); // 删除前两项，影响原数组
    arr.unshift(newValue);// 把 fn(arr[0],arr[1]) 的结果从数组首部推入
  }
  index += 1;
  let result = fn.call(null, arr[0], arr[1], index, initialArr);
  return result;
};