/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  if (k != 0) {
    nums = Array.from(new Set(nums))
  }
  console.log(nums)
  nums.sort((a, b) => a - b)
  console.log(nums)
  let len = nums.length
  let count = 0
  let i = 0
  while (i < len) {
    console.log(nums.indexOf(nums[i] + k), i)
    if (nums.lastIndexOf(nums[i] + k) > i) {
      count = count + 1
    }
    i = i + 1
  }

  return count
};

// let nums = [3, 1, 4, 1, 5]
// let k =2
let nums = [1,1,1,1,1]
let k = 0
// let nums = [1, 3, 1, 5, 4]
// let k = 0
console.log(findPairs(nums, k))