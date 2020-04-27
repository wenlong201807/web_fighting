/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/**
### 解题思路
1.理解题目里层含义很重要
2.解析题图中两个参数关系，为了提高性能，需要分两种情况，
3.使用while遍历，然后使用当前值与当前值后面的k个值进行比较，看是否存在相等的
4.易错点：最末尾几个可能存在undefined的情况，需要特别注意
*/
function containsNearbyDuplicate (nums, k) {
  let len = nums.length
  let i = 0
  if (len < 0) {
    for (i; i < nums.length; i++) {     
      if (nums.lastIndexOf(nums[i])>i) {
        return true
      }
    }
    return false
  }
  
  while (i <= len) {
    // let j = i+1
    // console.log('for之前i:',i,'j:',j)
    for (let j = i + 1; j <= k+i; j++) {
      console.log('for内部：',i,j)
      console.log(nums[i], nums[j])
      console.log('*************')
      if (nums[i] != undefined && nums[i] == nums[j]) {
        return true
      }
    }
    i = i + 1
    console.log(666)
  }
  return false
};
// let nums = [1, 2, 3, 1]
// let k = 3
// let nums = [1,2,3,1,2,3]
// let k = 2
// let nums = [1,2,3,1,2,3]
// let k = 2
// let nums = [99,99]
// let k = 2
// let nums = [99,99]
// let k = 3
// let nums = [1,2,3,4,5,6,7,8,9,9]
// let k = 3
let nums = [1,2,3,1,2,3]
let k = 2
console.log(containsNearbyDuplicate (nums, k))