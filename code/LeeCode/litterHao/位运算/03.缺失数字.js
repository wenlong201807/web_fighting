// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484351&idx=1&sn=f14c008b7c621b9e156806f3840b5550&chksm=ea911befdde692f982a3fdc0b2296cd61a5d50ecca50562ea42b329876e9923ba92ce6c2ab79&scene=21#wechat_redirect
// 通关：

/**
 * 第268题：给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
*/

let nums = [0,1,2,4]

const missingNumber1 = nums => {
  let len = nums.length
  let result = (len+1)*len/2

  for (let i = 0; i < len; i++){
    result -= nums[i]
  }
  console.log(result)
  return result
}

// missingNumber1(nums)
// 通关：https://leetcode-cn.com/problems/missing-number/solution/268que-shi-shu-zi-by-zhu-wen-long-2-2/


const missingNumber2 = nums => { 
  let result = 0
  for (let i = 0; i < nums.length; i++){
    result ^= nums[i] ^ i
  }
  console.log(result ^ nums.length)
  return result ^ nums.length
}

missingNumber2(nums)