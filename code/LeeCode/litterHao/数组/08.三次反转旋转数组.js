// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247483932&idx=4&sn=993eaee7ef28cc877f640a9617debb89&chksm=ea911a4cdde6935a3d77cd25489429ca6da0815fa641f3e7fc94a36b53762576f1c120f44835&scene=21#wechat_redirect
// 通关：https://leetcode-cn.com/problems/rotate-array/solution/189shu-zu-xuan-zhuan-by-zhu-wen-long-2/

/**
 * 第189题：给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 
*/


const nums = [1,2,3,4,5]
const k = 2

const rotate = (nums, k) => {
  while (k-- > 0) nums.unshift(nums.pop())

  console.log(nums)
  return nums
}

rotate(nums, k)