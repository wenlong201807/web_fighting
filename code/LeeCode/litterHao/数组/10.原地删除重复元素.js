// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247483932&idx=3&sn=d354851327ec7f08c8d727f3cf572e4e&chksm=ea911a4cdde6935a77e5df8d9fd832f556ed3ad9fe6af21dba077778c8524877c0055d1fdab6&scene=21#wechat_redirect
// 通关：https://leetcode-cn.com/problems/remove-element/solution/27yuan-di-shan-chu-shu-zu-zhi-ding-yuan-su-by-zhu-/

// 数组删除指定元素 https://www.jb51.net/article/134312.htm

/**
 * 题目27：给定一个数组 nums 和一个值 val，
 * 你需要原地移除所有数值等于 val 的元素，
 * 返回移除后数组的新长度。
 * 
 * 示例 1:
给定 nums = [3,2,2,3], val = 3,
函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
你不需要考虑数组中超出新长度后面的元素。
*/

const nums = [3, 2, 2, 3], val = 3

const removeElement = (nums, val) => {
  let k = 0
  let i = 0
  for (i; i < nums.length - k; i++) {
    if (nums[i] === val) {
      nums.push(...nums.splice(i, 1))
      i--
      k++
    }
  }

  console.log(nums.length - k, nums)
  return nums.length - k
}

removeElement(nums, val)