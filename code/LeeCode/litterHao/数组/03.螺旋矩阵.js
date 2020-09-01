// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484189&idx=1&sn=beb88903f7ddd225dfe311ecea49b886&chksm=ea911b4ddde6925b58d4dc2d91f0404a229bc891a33ad98df280cffba28749c1dcfd6e19512c&scene=21#wechat_redirect
// 通关：https://leetcode-cn.com/problems/spiral-matrix/solution/54luo-xuan-ju-zhen-by-zhu-wen-long-2/

/**
 * 第54题：定一个包含 m x n 个元素的矩阵（m 行, n 列），
 * 请按照顺时针螺旋顺序，返回矩阵中的所有元素。
*/

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
// 输出: [1,2,3,6,9,8,7,4,5]

const matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]
// 输出: [1,2,3,4,8,12,11,10,9,5,6,7]

const matrix3 = [
  [2, 3],
  // [4,5]
]

const spiralOrder = (matrix) => {
  let resultArr = []

  if (matrix.length === 0) return matrix
  if (matrix.length === 1 && matrix[0].length === 0) return []
  if (matrix.length === 1 && matrix[0].length !== 0) return matrix[0]

  let left = 0
  let right = matrix[0].length - 1
  let up = 0
  let down = matrix.length - 1

  let x = 0
  let y = 0
  while (left <= right && up <= down) {
    for (y = left; y <= right && noRepeat(left, right, up, down); y++) {
      resultArr.push(matrix[x][y])
    }
    y-- // for循环多加了1 ，要减掉，保证在最后一列的位置
    up++ // 上一行结束，往下走，每次增加一行

    for (x = up; x <= down && noRepeat(left, right, up, down); x++) { // 最右侧一列，每一次往下一行
      resultArr.push(matrix[x][y])
    }
    x--
    right--

    for (y = right; y >= left && noRepeat(left, right, up, down); y--) {// 最底下一行往左侧移动，每次减少1
      resultArr.push(matrix[x][y])
    }
    y++
    down--

    for (x = down; x >= up && noRepeat(left, right, up, down); x--) {
      resultArr.push(matrix[x][y])
    }
    x++
    left++
  }

  console.log(resultArr)
  return resultArr
}

const noRepeat = (left, right, up, down) => {
  return up <= down && left <= right
}
console.log(spiralOrder(matrix3))