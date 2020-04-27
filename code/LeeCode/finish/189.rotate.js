/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  while (k>0) {
    nums.unshift(nums.pop())
    k = k-1
  }
  return nums
};
let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3
console.log(rotate(nums, k))
