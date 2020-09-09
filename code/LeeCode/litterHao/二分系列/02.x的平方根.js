// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484377&idx=1&sn=1f5e7ac261ffd5c3be2f742d741c28a7&chksm=ea911b89dde6929f135df8ef9724e95410cca07b77c9da0b8b97bc53b6605d6cdd02de6b3d6d&scene=21#wechat_redirect

/**
 * 第69题：实现 int sqrt(int x) 函数
 * 计算并返回 x 的平方根，其中 x 是非负整数。由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
*/

// const x = 25
// const x = 9
// const x = 8
// const x = 4

// 通关：https://leetcode-cn.com/problems/sqrtx/solution/69xde-ping-fang-gen-by-zhu-wen-long-2/

const mySqrt = x => {
  if (x == 0) return 0
  
  let left = 1
  let right = Math.floor(x / 2)
  
  while (left < right) {
    let mid = Math.ceil((left + right) / 2) 
    // let mid = (left + right) / 2 + 1
    if (mid > x / mid) {
      right = mid-1
    } else {
      left = mid
    }
  }

  console.log(left)
  return Math.floor(left)
}

console.log(mySqrt(x))