// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247483987&idx=1&sn=33066d711a3ef2716425bc91417124ec&chksm=ea911a03dde693151df7bf77233b03b157c9fb2b7e5713b02513794c05eac891126a85dc29d4&scene=21#wechat_redirect

// 通关：https://leetcode-cn.com/problems/maximum-subarray/solution/53zui-da-zi-xu-he-by-zhu-wen-long-2/

let nums = [-2,1,-3,4,-1,2,1,-5,4]

const maxSubArray = nums => {
  if (nums.length < 1) {
    return 0
  }

  let dp = []

  //设置初始化值 
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    //处理 dp[i-1] < 0 的情况
    if (dp[i - 1] < 0) {
      dp[i] = nums[i]
    } else {
      dp[i] = dp[i - 1] + nums[i]
    }
  }

  let result = -1 << 31
  console.log('min:result:',result)

  for (let j = 0; j < dp.length; j++){
    result = Math.max(result,dp[j])
  }
  console.log('last:result:',result)
  return result
}

maxSubArray(nums)