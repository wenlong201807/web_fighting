/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  let i = 0
  let len = nums.length
  if(len == 0) return false
  while (i <= len) {
    console.log(nums[i],nums.indexOf(nums[i]) , nums.lastIndexOf(nums[i]))
    if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) {
      i = i + 1
    } else {
      return true
    }  
  }
  return false
};

// let arr = [2, 14, 18, 22, 22]
let arr = [1,2,3,1]
console.log(containsDuplicate(arr))