/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement (nums) {
  if (nums.length == 1) {
    return nums[0]
  }
  let len = nums.length
  let major = Math.floor(len / 2)
  let i = 0
  let mapObj = new Map()
  while (i < len) {
    console.log('进入的：', nums[i])
    if (mapObj.has(nums[i])) {
      console.log('比较大小：', major, mapObj.get(nums[i]))
      mapObj.set(nums[i], mapObj.get(nums[i]) + 1)
      if (major < mapObj.get(nums[i])) {
        return nums[i]
      } else {
        // major = mapObj.get(nums[i])
      }
      console.log('结果：', major, '----', mapObj)
    } else {
      mapObj.set(nums[i], 1)
    }
    i = i + 1
  }
};
let nums = [3, 2, 3]
// let nums = [2, 2, 1, 1, 1, 2, 2]
console.log(majorityElement(nums))