// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247483975&idx=1&sn=3476f72b9ae14eded1bbd75f1fccc3f5&chksm=ea911a17dde69301c7219effc31b76731abeb35aba5114eac5cfcad26afd77d547c2f1fadd3a&scene=21#wechat_redirect

// 通关：https://leetcode-cn.com/problems/climbing-stairs/solution/70pa-lou-ti-by-zhu-wen-long-2/

let n = 4
const climbStairs = n => {

  if (n === 1) {
    return 1
  }

  let dp = []
  dp[1] = 1
  dp[2] = 2

  for (let i = 3; i <= n; i++){
    dp[i] = dp[i-1] + dp[i-2]
  }

  console.log(dp)
  return dp[n]
}

climbStairs(n)