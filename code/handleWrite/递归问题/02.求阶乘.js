
// 参考资料 https://www.jb51.net/article/170560.htm
// 问题：求数字n的阶乘
/**
 * n = 0  factorial (n) = 1
 * n > 0  factorial (n) = n * functional(n-1)
*/

/**
 * 我们也因该知道，递归算法相对常用的算法如普通循环等，
 * 运行效率较低。因此，应该尽量避免使用递归，除非没有更好的算法或者某种特定情况，递归更为适合的时候。在递归调用的过程当中系统为每一层的返回点、局部量等开辟了栈来存储，
 * 递归次数过多容易造成栈溢出等。
*/
function factorial (n) {
  if (n === 0) {
    return 1
  } else {
    return n*factorial(n-1)
  }
}

// 最多需要保存n个调用栈，复杂度 O(n)，如果我们使用尾递归：

function factorial2(n, total) {
  if (n === 1) return total;
  return factorial2(n - 1, n * total);
 }
  
 factorial2(5) // 120