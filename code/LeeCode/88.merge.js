/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  let i = 0
  let len = n + m
  while (i <= len) {
    if (nums1[i] >= nums2[0]) {
      nums1[i] = nums2.shift()
      nums1[i+1] = nums1[i]
    }
    i= i+1
  }
  return nums1
};

let nums1 = [1,2,3,0,0,0], m = 3
let nums2 = [2, 5, 6], n = 3
