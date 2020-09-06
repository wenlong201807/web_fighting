// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484300&idx=1&sn=07d475c1e29a12b45044ae69b551c486&chksm=ea911bdcdde692ca15e3fe76ad35fcb4978eab8f31f4039b1e25e9417897672616cec7159e28&scene=21#wechat_redirect

/**
 * 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 * 
*/

let n = 5

const sumNums = n => {
  // n += sumNums(n - 1)
 // Uncaught RangeError: Maximum call stack size exceeded
  // (n > 0) && (n += sumNums(n - 1))
  // (n > 0) && ((n += sumNums(n - 1)) > 0)
  // let b = ((n >0) && ((n += sumNums(n-1)) > 0))
  console.log(n)
  return (n > 0) && (n += sumNums(n - 1))
  // return n
}

// sumNums(n)
console.log(sumNums(n))
