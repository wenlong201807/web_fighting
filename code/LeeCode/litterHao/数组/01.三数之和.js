// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484539&idx=1&sn=9b7853e819933c0e1d821282fdaa31ff&chksm=ea911c2bdde6953d90083be9ea1974d12b951b3687b5ef3bf3059e0a6852c2ab8bb8007b7ad9&scene=21#wechat_redirect
//  通关：https://leetcode-cn.com/problems/3sum/solution/15san-shu-zhi-he-by-zhu-wen-long-2/

// 第15题：给你一个包含 n 个整数的数组 nums，
//判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
//请你找出所有满足条件且不重复的三元组。
//注意：答案中不可以包含重复的三元组。
const nums = [0,0,0]
// const nums = [0,0,0,0] // 相同元素，最后只算一个答案，需要排除重复情况
// const nums = [-1, 0, 1, 2, -1, -4]

const threeSum = nums => {
  nums = nums.sort((a,b) => a-b)

  let result =[]
  for (let i = 0; i < nums.length; i++){
    if(nums[i]>0) break
    let target = 0 - nums[i]
    let l = i + 1
    let r = nums.length-1
    
    if (i === 0 || nums[i] != nums[i - 1]) {
      while (l < r) {
        if (nums[l] + nums[r] === target) {
          result.push([nums[i], nums[l], nums[r]])
          while (l < r && nums[l] == nums[l + 1]) l++
          while (l < r && nums[r] == nums[r - 1]) r--
          l++
          r--
        } else if (nums[l] + nums[r] < target) {
          l++
        } else {
          r--
        }
      }
    }
    
  }
  console.log('result:',result)
  return result
}
threeSum(nums)

