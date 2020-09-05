// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484345&idx=1&sn=3d07208571b1a9535f0d77fbbf7daaf0&chksm=ea911be9dde692ff70af587e7286820afab2ed2df6ca1511976364a4399785cc7263c7bfe2f1&scene=21#wechat_redirect
// 通关：https://leetcode-cn.com/problems/single-number-ii/solution/137zhi-chu-xian-yi-ci-sheng-ji-ban-by-zhu-wen-long/

/**
 * 第137题：给定一个非空整数数组，除了某个元素只出现一次以外，
 * 其余每个元素均出现了三次。找出那个只出现了一次的元素。
 * 说明：你的算法应该具有线性时间复杂度。你可以不使用额外空间来实现吗？
*/

const nums = [2, 2, 2, 3]

const singleNumber = nums => {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    } else {
      map.set(nums[i], 1)
    }
  }

  console.log(map)

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && map.get(nums[i]) === 1) {
      console.log(nums[i])
      return nums[i]
    }
  }

}

// singleNumber(nums)

const singleNumber2 = nums => {
  let result1 = 0
  let result2 = 0

  let uniqueNums = Array.from(new Set(nums))
  console.log(uniqueNums, nums)
  for (let i = 0; i < uniqueNums.length; i++) {
    result1 += uniqueNums[i]
  }
  for (let i = 0; i < nums.length; i++) {
    result2 += nums[i]
  }
  console.log((result1 * 3 - result2) / 2)
  return (result1 * 3 - result2) / 2


}

// singleNumber2(nums)
// 位运算方式 https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484345&idx=1&sn=3d07208571b1a9535f0d77fbbf7daaf0&chksm=ea911be9dde692ff70af587e7286820afab2ed2df6ca1511976364a4399785cc7263c7bfe2f1&scene=21#wechat_redirect

const singleNumber3 = nums => {

}