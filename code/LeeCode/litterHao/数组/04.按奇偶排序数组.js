// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484131&idx=1&sn=be7d3b594b2ca232bb900728ee43ca05&chksm=ea911ab3dde693a5de58fbdabdeb8fcefa0c77e632d43a5e02a57dab68f0c39b8f96962fe13c&scene=21#wechat_redirect
// 通关：https://leetcode-cn.com/problems/sort-array-by-parity/solution/905an-qi-ou-pai-xu-shu-zu-by-zhu-wen-long-2/

/**
 * 第905题：给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。
 * 你可以返回满足此条件的任何数组作为答案。
 * 
 * 输入：[3,1,2,4]
输出：[2,4,3,1]
输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
*/

const arr = [3,1,2,4]

const sortArrayByParity = (A) => {
  let len = A.length
  let j = 0
  let i = 0
  
  for (i; i < len; i++){
    if (A[i] % 2 === 0) {
      let temp = A[j]
      A[j] = A[i]
      A[i] = temp
      j++
    }
  }
  console.log(A)
  return A
}

sortArrayByParity(arr)