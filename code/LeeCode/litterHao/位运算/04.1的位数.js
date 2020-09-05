// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484335&idx=1&sn=f648a709370896f0bba74e88cd0383e3&chksm=ea911bffdde692e92e5f635b0fa31ced2ffd4a532bc464b6189e4a7907cb0635e76ff14293d1&scene=21#wechat_redirect
// 通关：

/**
 * 第191题：编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数（也被称为汉明重量）。
 * 
 * 科普：掩码是指使用一串二进制代码对目标字段进行位与运算，屏蔽当前的输入位。
*/

// 通关：https://leetcode-cn.com/problems/number-of-1-bits/solution/1911de-wei-shu-by-zhu-wen-long-2/
let n = 5
const hammingWeight = n => {
  let result = 0
  let mask = 1
  
  for (let i = 0; i < 32; i++){
    if ((n & mask) !== 0) {
      result ++
    }
    mask = mask<<1
  }
  console.log(result)
  return result
}

hammingWeight(n)