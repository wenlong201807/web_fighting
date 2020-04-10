/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


let nums = [2, 7, 11, 15]
let target = 9
const twoSum = (nums, target) => {
  let len = nums.length
  let tempNum
  let first
  let second
  for (let i = 0; i < len; i++) {
    first = i
    tempNum = target - nums[i]
    for (let j = 0; j < nums.length; j++) {
      if (tempNum == nums[j]  && i != j) {  // 相加的两个数字不能是原数组的同一个元素
        second = j
        return [first, second]
      }
    }
  }
};
twoSum(nums, target)