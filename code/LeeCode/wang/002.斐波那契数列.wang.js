/**
 * 002 斐波那契数列
 * f(n) = f(n-1) + f(n-2)
 * 
 * 解题提示：
 * 1.基本解法是递归，注意避免递归的缺陷
 * 2.可以事实上动态规划解法
 * 
 * 基本思路：
 * 递归的本质是把一个问题分解成两个或者多个小问题。
 * 如果多个小问题存爱相互重叠的情况，那么就存在重复计算。
 * 
 * f(n) = f(n-1) + f(n-2) 这种拆分使用递归是典型的存在重复计算的情况，
 * 所以会造成非常多的重复计算。
 * 
 * 另外，每一次函数调用时，内存中都需要分配空间，每一个进程的栈的容量是有限的，敌对层次过多，就会造成栈溢出。
 * 
 * 递归是从最大数开始，不断拆解成小的数计算，
 * 如果不去考虑递归，我们只需要从小数开始算起，从底层不断往上累加就可以了，实现起来也不难
 * 
*/

//1. 递归解法
function Fibonacci (n) {
  if (n < 2) {
    return n
  }
  return Fibonacci(n - 1) + Fibonacci(n - 2)
}

//2. 递归加记忆化
// 使用又给数组缓存计算过的值
function Fibonacci2 (n, memory = []) {
  if (n < 2) {
    return n
  }
  if (!memory[n]) {
    memory[n] = Fibonacci2(n - 1, memory) + Fibonacci2(n - 2, memory)
  }
  return memory[n]
}

//3. 动态规划解法
function Fibonacci3 (n) {
  if (n <= 1) {
    return n
  }
  let i = 1
  let pre = 0
  let current = 1
  let result = 0
  while (i++ < n) {
    result = pre + current
    pre = current
    current = result
  }
  return result
}