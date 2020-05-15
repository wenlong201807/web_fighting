/**
 * 20200513 查找缺失的数字
 * 
 * 一个长度为 n-1 的递增排序数组中的所有数字都是唯一的，并且每一个数字都在范围0~  n-1之内，
 * 在范围 0 ~ n-1 内的n个数字中有且只有一个数字不再该数组中，，请找出来这个数字。
 * 
 * 参考答案：
 * 利用二分查找，整体流程是：
 * 
 * left 指向0，right指向最后一个元素
 * 计算中间坐标 mid
 * 如果mid = nums[mid] , 说明 [0,mid] 范围内不缺失数字，left要更新为mid+1
 * 如果mid<nums[mid],说明[mid,right]范围内不缺失数字，right更新为mid-1
 * 检查 left 事发后小于等于 mid ，若成立，返回第二步，否则，向下执行
 * 返回left即可
 * 
 * 注意：根据题意，可以知道 mid > nums[mid] 这种情况不存在。
*/

// 代码实现
var missingNumber = function (nums) {
  let left = 0,
    right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (mid === nums[mid]) {
      left = mid + 1
    } else if (mid < nums[mid]) {
      right = mid - 1
    }
  }
  return left
}

const nums = [0,1, 2, 3, 4, 5, 7]
console.log(missingNumber(nums))