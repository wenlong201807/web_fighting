/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b)
  console.log(nums)
  let len = nums.length 
  let i = 0
  let result = 0
  while (i < len) {
    console.log(result , nums[i])
    result = result + nums[i]
    i = i + 2
  }
  return result
};
let nums = [1, 4, 3, 2]
console.log(arrayPairSum(nums))