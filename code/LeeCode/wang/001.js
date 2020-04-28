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
*/

function test (matrix, target) {
  let out = matrix.length
  let inner = 0
  if (matrix[0] instanceof Array) {
    inner = matrix[0].length
  } else {
    for (let i = 0; i < out; i++) {
      if (target == matrix[i]) {
        return true
      } else {
        return false
      }
    }
  }

  for (let i = 0; i < out; i++) {
    console.log('外层循环----：', target, matrix[i][0], matrix[i][inner - 1])
    if (target >= matrix[i][0] && target <= matrix[i][inner - 1]) {
      for (let j = 0; j < inner; j++) {
        console.log('内层循环：', target, matrix[i][j])
        if (target == matrix[i][j]) {
          return true
        }
      }
    }
  }
  return false
}




let matrix = [
  [-5]
]
let target = -5
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// let target = 5

console.log('最后结果：', test(matrix, target))

/**
1.按照题目要求，可能是一维数组，需要先做判断（是否有内层数组），考虑题目周全
2.依据题目中递增规律，需要逐行都有比较，每个小数组的第一个和最后一个有小大之分，不同小数组之间却没有大小之分
3.然后通过for循环遍历比对，返回对应的值
*/