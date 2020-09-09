// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247483991&idx=1&sn=aabb65ebb7db79585a1a254ac662855f&chksm=ea911a07dde6931166f523ab8670796dfa131a1cb96c5a178932317db47317fac796a6687e29&scene=21#wechat_redirect

/**
 * 第300题：给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * 
 * 示例:
输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
 * */
// 通关：https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/300zui-chang-shang-sheng-zi-xu-lie-by-zhu-wen-long/

let nums = [1, 9, 5, 9, 3]
 

const lengthOfLIS = nums => {
  if (nums.length < 1) {
    return 0
  }

  let dp =[]

  let result = -1 << 31

  for (let i = 0; i < nums.length; i++){
    dp[i] = 1
    for (let j = 0; j < i; j++){
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j]+1,dp[i])
      }
    }
    result = Math.max(result,dp[i])
  }

  console.log(result)
  return result
}

lengthOfLIS(nums)