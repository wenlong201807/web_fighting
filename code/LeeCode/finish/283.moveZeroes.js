/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let len = nums.length
  let i = 0
  let zeroNums = 0
  while (i < len-zeroNums) {
    if (nums[i] == 0) {
      nums.push(nums.splice(i, 1))
      i = i - 1
      zeroNums = zeroNums+1
    }
    i=i+1
  }
  return nums
};