// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247483963&idx=1&sn=6c9bbad3bbbda6a752e3fdcc559348c6&chksm=ea911a6bdde6937d546632d9dde687ba3f37a96272c42bffd0587ab1e0372f78d46ddb02def5&scene=21#wechat_redirect
// 通关 https://leetcode-cn.com/problems/two-sum/solution/1liang-shu-zhi-he-by-zhu-wen-long-2/

/**
 * 第1题：给定一个整数数组 nums 和一个目标值 target，
 * 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/

const nums = [3, 2, 4], target = 6
// const nums = [2, 7, 11, 15], target = 9
const twoSum = (nums, target) => {
  nums = nums.sort((a, b) => a - b)
  console.log(nums)
  let len = nums.length
  let i = 0
  let j = len - 1
  while (i < j) {
    if (nums[j] > target - nums[i]) {
      j--
    } else if (nums[j] < target - nums[i]) {
      i++
    } else {
      return [i, j]
    }
  }
  return []
}

// console.log(twoSum(nums, target))

const twoSum2 = (nums, target) => {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    // map.set(nums[i], i)
    if (Array.from(new Set(map.keys())).includes(target -nums[i]) ) {
      // let aa = target - map.get(nums[i])
      console.log(66, map.get(target - nums[i]), i)
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
  // console.log(map,map.keys(),new Set(map.keys()))
  // console.log(Array.from(new Set(map.keys())).includes(3))
}

twoSum2(nums, target)