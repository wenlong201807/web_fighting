// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484331&idx=1&sn=912c95c352370cda39279f87caecd566&chksm=ea911bfbdde692ed0157ce1951f32100349c2ec969adf6f1fa5af3f10c6d513d300ae724494d&scene=21#wechat_redirect
// 通关：

/**
 * 第231题：给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
 * 
 * 思路：对于N为2的幂的数，都有 N&(N-1)=0 ，
*/

let n = 8
const isPowerOfTwo = n => {
  return (n > 0) && ((n & (n - 1)) === 0)
}

console.log(isPowerOfTwo(n))