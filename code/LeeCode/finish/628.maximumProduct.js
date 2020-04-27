/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums = nums.sort((a, b) => b - a)
  console.log(nums)
};

let nums = [1, 2, 3, 4, -8, -6]
// let nums =[1,2,3,4]
maximumProduct(nums)