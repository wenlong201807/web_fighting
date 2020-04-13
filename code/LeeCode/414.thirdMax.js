/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let arr = Array.from(new Set(nums))
  if (arr.length == 1) {
    return nums[0]
  }
  if (arr.length == 2) {
    return Math.max(arr[0], arr[1])
  }
  return arr.sort((a,b)=>b-a)[2]
};
let nums = [1, 2, 2, 5, 3, 5]
console.log(thirdMax(nums))