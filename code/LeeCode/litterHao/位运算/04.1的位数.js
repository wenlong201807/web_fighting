// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484335&idx=1&sn=f648a709370896f0bba74e88cd0383e3&chksm=ea911bffdde692e92e5f635b0fa31ced2ffd4a532bc464b6189e4a7907cb0635e76ff14293d1&scene=21#wechat_redirect
// 通关：

/**
 * 第191题：编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数（也被称为汉明重量）。
 * 
 * 科普：掩码是指使用一串二进制代码对目标字段进行位与运算，屏蔽当前的输入位。
*/

// 通关：https://leetcode-cn.com/problems/number-of-1-bits/solution/1911de-wei-shu-by-zhu-wen-long-2/
let n = 11111111111111111111111111111101
// let n = 5
const hammingWeight1 = n => {
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

// hammingWeight1(n)


// 二进制中表示正负数
// https://blog.csdn.net/TNT_Squad/article/details/60781748
// 二进制补码计算原理详解
// https://blog.csdn.net/zhuozuozhi/article/details/80896838?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param



// let m = 5
let m = 11111111111111111111111111111101
let k =15
// console.log(m.toString(2)) // 输出二进制数
console.log(k.toString(10)) // 输出十进制数
console.log(typeof k.toString(2)) // 输出十进制数
console.log(k.toString(8)) // 输出十进制数
// 位运算小技巧: 对于任意一个数，将 n 和 n-1 进行 & 运算，我们都可以把 n 中最低位的 1 变成 0
const hammingWeight2 = n => {
  console.log(typeof n,n)
  let count = 0
  let i=0
  n = n.toString(10)
  console.log(n)
  while (n > 0) {
    n = n & (n-1)
    ++count
    i++
    console.log(i,'---',n,count)
  }
  console.log(count)
  return count
}

hammingWeight2(m)