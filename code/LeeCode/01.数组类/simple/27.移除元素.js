/*
题目：
给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。


第一种思路
标签：拷贝覆盖
主要思路是遍历数组nums，每次取出的数字变量为num，同时设置一个下标ans
在遍历过程中如果出现数字与需要移除的值不相同时，则进行拷贝覆盖nums[ans] = num，ans自增1
如果相同的时候，则跳过该数字不进行拷贝覆盖，最后ans即为新的数组长度
这种思路在移除元素较多时更适合使用，最极端的情况是全部元素都需要移除，遍历一遍结束即可
时间复杂度：O(n)，空间复杂度：O(1)

作者：guanpengchn
链接：https://leetcode-cn.com/problems/remove-element/solution/hua-jie-suan-fa-27-yi-chu-yuan-su-by-guanpengchn/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let ans = 0;
  for (const num of nums) {
    if (num != val) {
      nums[ans] = num;
      ans++;
    }
  }
  return ans;
};
