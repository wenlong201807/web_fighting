

function bubble (arr) {     // 1:套一个函数的壳子，将参数传入
  if (!(arr instanceof Array && arr.length > 1))  return '传入数组!'
  //外层循环，控制趟数，每一次找到一个最大值
  for (var i = 0; i < arr.length - 1; i++) {
    // 内层循环,控制比较的次数，并且判断两个数的大小
    for (var j = 0; j < arr.length - 1 - i; j++) {
      // 白话解释：如果前面的数大，放到后面(当然是从小到大的冒泡排序)
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

  }
  return arr  //2: 将执行完的结果返回就可以
}
var arr = [29, 45, 51, 68, 72, 97];
console.log(bubble(arr));//[2, 4, 5, 12, 31, 32, 45, 52, 78, 89]