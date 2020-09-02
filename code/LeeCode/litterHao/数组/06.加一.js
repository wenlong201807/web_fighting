// 题目 https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247483937&idx=1&sn=4428a903051eb5c8deaa5724891c0d34&chksm=ea911a71dde69367273d2e040f5a3213c1d8ce9ee601c54a8960e8a884e2f9936b3982d50042&scene=21#wechat_redirect
// 通关 https://leetcode-cn.com/problems/plus-one/solution/66jia-yi-by-zhu-wen-long-2/


/**
 * 第66题：给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 示例 1:
输入: [1,2,3]
输出: [1,2,4]
解释:输入数组表示数字 123。

示例 2:
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
 * 
*/

const digits = [9,9]
// const digits = [1,2,3]
// const digits = [9,9,9,9]
const plusOne = (digits) => {
  let len = digits.length - 1
  for (let i = len; i >=0 ; i--){
    if (digits[i] < 9) {
      digits[i]++
      return digits
    } else {
      digits[i]=0
    }
  }
  console.log(new Array(len+1).fill(0))
  return [1,...new Array(len+1).fill(0)]
}

console.log(plusOne(digits))