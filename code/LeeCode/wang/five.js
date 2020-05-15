
// 判断是否为顺子
function shun (nums) {
  nums = nums.sort((a, b) => a - b)
  console.log(nums)
  let i = 1
  let result = 0
  let mid = []
  while (i < nums.length) {
    if (nums[i - 1] == 0) {
      nums.splice(i - 1, 1)
      i=i-1
    }
    mid[i-1] = nums[i ] - nums[i-1]
    result += mid[i-1]
    i = i + 1
  }
  console.log('mid', mid)
  console.log('result', result)
  if (result === nums.length - 1) {
    return true
  }
  return false
}
let nums = [0,0,1,2,5]
// let nums = [3, 10, 8, 9, 10]
// let nums = [1, 2, 3, 0, 0]
// let nums = [1, 2, 3, 4, 5]
console.log(shun(nums))