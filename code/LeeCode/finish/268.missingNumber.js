/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let len = nums.length
  let addAll = 0
  let i = 0
  while (len > i) {
    addAll = addAll + nums[i]
    i = i + 1
  }
  return (len + 1) * len / 2 - addAll
};
let nums = [3, 0, 1]
console.log(missingNumber(nums))