/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  let len = nums.length
  let current = Array(len).fill(0)
  let i = 1
  let result = nums[0]
  current[0] = nums[0]
  while (i < len) {
    current[i] = Math.max(current[i - 1] + nums[i], nums[i])
    result = Math.max(current[i], result)
    i = i + 1
  }
  return result
};
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let current = [-2,1,-2,4]
console.log(maxSubArray(nums))