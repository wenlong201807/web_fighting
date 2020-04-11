// 插入排序
function insertSort (arr) {
  // 1. 获取数组的长度
  let len = arr.length

  // 2. 外层循环：从第一个位置开始获取数据，像前面局部有序进行插入
  for (var i = 0; i < len; i++){
    // 3. 内层循环，获取i位置的元素，和前面的数据一次进行比较
    var temp = arr[i]
    var j = i 
    while (arr[j - 1] > temp && j > 0) {
      arr[j] = arr[j-1]
      j--
    }

    // 4. 将j位置的数据，重置为temp就可以啦
    arr[j] = temp
  }

  // 将数组返回
  return arr
}

// 测试
let arr = [5, 9, 6, 7, 3, 8, 5]
console.log(insertSort(arr))