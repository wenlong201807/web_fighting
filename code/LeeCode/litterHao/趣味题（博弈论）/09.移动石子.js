//题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484319&idx=1&sn=eaca6d13b46bef8b7936b409d62a1539&chksm=ea911bcfdde692d9db17f9dd7cab6c63ba53538ce441176f036d434c62aca231acd47d82e4db&scene=21#wechat_redirect

/**
 * 1033题：三枚石子放置在数轴上，位置分别为 a，b，c。
 * 每一回合，我们假设这三枚石子当前分别位于位置 x, y, z 且 x < y < z。
 * 从位置 x 或者是位置 z 拿起一枚石子，并将该石子移动到某一整数位置 k 处，其中 x < k < z 且 k != y。
 * 当你无法进行任何移动时，即，这些石子的位置连续时，游戏结束。
 * 要使游戏结束，你可以执行的最小和最大移动次数分别是多少？
 * 以长度为 2 的数组形式返回答案：answer = [minimum_moves, maximum_moves]
 * 
 * 输入：a = 1, b = 2, c = 5
输出：[1, 2]
解释：将石子从 5 移动到 4 再移动到 3，或者我们可以直接将石子移动到 3。
*/


// 通关：https://leetcode-cn.com/problems/moving-stones-until-consecutive/solution/1033yi-dong-shi-zi-by-zhu-wen-long-2/
const a = 1, b = 2, c = 5

const numMovesStones = (a, b, c) => {
  let arr = [a,b,c].sort((n,m) => n-m)

  let left = arr[1] - arr[0] -1
  let right = arr[2] - arr[1] -1

  let max = left + right
  let min = 0

  if (left !== 0 || right !== 0) {
    if (left > 1 && right > 1) {
      min = 2
    } else {
      min = 1
    }
  }

  console.log(min,max)
  return [min,max]
}

numMovesStones(a, b, c)