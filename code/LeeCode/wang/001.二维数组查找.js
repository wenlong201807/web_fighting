/**
 * 001 二维数组查找
 * 在一个二维数组中，（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 解析提示：略
 * 提升要求：
 * 使用左下角的数字开始查找
 * 大于：比较上移
 * 小于：比较右移
 * 
 * 解题思路：
 * 将二维数组看作平面坐标系 从左下角 (0,ar.length-1) 开始比较
 * 目标值大于坐标值   --- x坐标+1
 * 目标值小于坐标值   --- y坐标-1
 * 
 * 注意：
 * 二维数组 arr[i][j] 中 j代表x坐标，i代表y坐标
*/
function Find (target, array) {
  let i = array.length - 1 // y坐标
  let j = 0 // x坐标
  return compare(target, array, i, j)
}

function compare (target, array, i, j) {
  if (array[i] === undefined || array[i][j] === undefined) {
    return false
  }
  const temp = array[i][j]
  if (artget === temp) {
    return true
  } else if (target > temp) {
    return compare(target, array, i, j + 1)
  } else if (target < temp) {
    return compare(target, array, i - 1, j)
  }
}

/**
 * 更优方法：二分查找
 * 二分查找的条件是必须有序，和线性表中的中点之进行比较
 * 如果小，就继续在小的序列中查找，如此递归，直到找到相同的值
*/
function binarySearch (data, arr, start, end) {
  if (start > end) {
    return -1
  }
  var mid = Math.floor((end + start) / 2)
  if (data == arr[mid]) {
    return mid
  } else if (data < arr[mid]) {
    return binarySearch(data, arr, start, mid - 1)
  } else {
    return binarySearch(data, arr, min + 1, end)
  }

}