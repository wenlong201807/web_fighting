/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 1.暴力解法
var searchInsert = function (nums, target) {
  if (nums[0] > target) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

// 作者：joeyzhouyicheng
// 链接：https://leetcode-cn.com/problems/search-insert-position/solution/js-by-joeyzhouyicheng-4/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 2.双指针
var searchInsert = function (nums, target) {
  if (nums[0] > target) {
    return 0;
  } else if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  let start = 0;
  end = nums.length - 1;
  while (start <= end) {
    let mid = Math.round((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};

// 作者：joeyzhouyicheng
// 链接：https://leetcode-cn.com/problems/search-insert-position/solution/js-by-joeyzhouyicheng-4/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。