// 希尔排序
/**
 * 外层while 不断将增量缩小
 * for循环 对原数组进行不同增量状态下的多个小分组
 * 内层while循环时对小分组里面的数据进行插入排序
 * 时间复杂度不好证明，通过统计排序操作，必然高于简单排序的
 * 某些状态下，高于快速排序
*/
function shellSort (arr) {
  // 1. 获取数组长度
  var len = arr.length

  // 2. 初始化的增量(gap - 间隔/间隙)
  var gap = Math.floor(len / 2)

  // 3. while循环(gap不断的减小)
  while (gap >= 1) {  // gap =1 时，为插入排序***不可少
    // 4. 以gap作为间隔，进行分组，对分组进行插入排序
    for (var i = gap; i < len; i++){
      var temp = arr[i]
      var j = i
      while (arr[j - gap] > temp && j > gap - 1) {
        arr[j] = arr[j-gap]
        j = j - gap
      }

      // 5. 将j位置的元素赋值temp
      arr[j] = temp
    }

    // 6. 增量变化，每次减小一半
    gap = Math.floor(gap/2)   
  }

  return arr
}

// 测试
// let arr = [5, 9, 6, 7, 3, 8, 5]
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(shellSort(arr))



