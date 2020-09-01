/**
 * 
 * LeetCode.26 删除排序数组中的重复项
 * https://mp.weixin.qq.com/s?__biz=MzA4NDE4MzY2MA==&mid=2647520365&idx=1&sn=b1a1b1795c872c0febefae20e197c461&chksm=87d24b6eb0a5c2787d066e2945578b4a041df07f2b5fa1b1978cced24f18dd4db6745a50e300&scene=21#wechat_redirect
*/

let initArr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 0, 1, 2, 3, 4]
// let initArr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

const removeDuplicates = (nums) => {
  nums = nums.sort((a, b) => a - b)
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  console.log(nums) // [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]
  return i + 1;
}
console.log(removeDuplicates(initArr))