// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247483996&idx=1&sn=d6e6c2d3b4e86d6f214c30650877ea62&chksm=ea911a0cdde6931a5cdba671be884eeb294386731507f1d04bd74802172bb74276acd9a1ffdc&scene=21#wechat_redirect

/**
 * 第120题：三角形最小路径和
每一步只能移动到下一行中相邻的结点上。
例如，给定三角形：
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
*/

let triangle = [
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
]
const minimumTotal = triangle => {
  if (triangle.length < 1) return 0

  if (triangle.length === 1) return triangle[0][0]

  // let dp = []

  // for (let i = 0; i < triangle.length; i++) {
  //   dp[i] = []
  //   for (let j = 0; j < triangle[i].length; j++) {
  //     console.log(i, j, triangle[i][j])
  //     dp[i][j] = 0
  //   }

  // }

  // console.log('initDP:', dp)

  let result = 1 << 31 - 1
  triangle[0][0] = triangle[0][0]
  triangle[1][0] = triangle[1][0] + triangle[0][0]
  triangle[1][1] = triangle[1][1] + triangle[0][0]
  console.log('defaultDP:', triangle)

  for (let i = 2; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) { // 最左侧
        triangle[i][j] = triangle[i - 1][j] + triangle[i][j]
      } else if (j === (triangle[i].length - 1)) { // 最右侧
        console.log('最右侧:',triangle[i].length - 1)
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i][j]
      } else {
        triangle[i][j] = Math.min(triangle[i - 1][j - 1]+ triangle[i][j], (triangle[i - 1][j] + triangle[i][j]))
      }
    }
  }

  console.log('重新赋值DP:', triangle)

  for (let k = 0; k < triangle[triangle.length-1].length; k++) {
    result = Math.min(result, triangle[triangle.length-1][k])
  }

  console.log(result)
  return result

}

const min = (a, b) => {
  if (a > b) {
    return b
  }
  return a
}

minimumTotal(triangle)