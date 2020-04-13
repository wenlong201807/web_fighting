/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let len = nums.length
  let maxCount = 0
  let currentCount = 0
  let i = 0
  while (i < len) {
    if (nums[i] === 1) {
      currentCount = currentCount + 1
      console.log(maxCount , currentCount)
      if (maxCount < currentCount) {
        maxCount = currentCount
      }
    } else {
      currentCount = 0
    }
    i = i + 1
  }
  return maxCount
};

let nums = [1, 0, 1, 1, 0, 1]
console.log(findMaxConsecutiveOnes(nums))