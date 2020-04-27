/**
 * @param {number[]} nums
 * @return {number[]}
 * 448. 找到所有数组中消失的数字
 * https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/
 */
function findDisappearedNumbers (nums) {
  let len = nums.length
  let targetArr = []
  let i = 0
  let obj = new Map()
  while (i < len) {
    if (obj.has(nums[i])) {
      // console.log(77)
    } else {
      obj.set(nums[i], nums[i])
    }
    i = i + 1
  }
  console.log(obj)
  for (let j = 1; j <= len; j++) {
    console.log(obj.has(j), j)
    if (obj.has(j)) {
      // console.log('存在的：',j)
    } else {
      targetArr.push(j)
    }
  }
  return targetArr
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDisappearedNumbers(nums))
console.log(666)