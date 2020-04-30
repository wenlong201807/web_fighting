/**
 * 004 二进制处理
 * 
 * 题目：
 * 输入一个整数，输出改数二进制表示中1的个数，其中负数用补码表示
 * 
 * 提示：先复习二进制的位运算
 * 二进制与位运算实用操作汇总（基础篇）
 * https://zhuanlan.zhihu.com/p/37549805
 * 
 * 分析：
 * 这是一道考察二进制的题目
 * 二进制或运算符(or): 符号： | ，表示若两个二进制位都是0，则结果为0，否则为1
 * 二进制与运算符(and): 符号：& ，表示若两个二进制位都是1，则结果为1，否则为0
 * 二进制与运算符(not): 符号：~ ，表示对一个二进制取反
 * 异或运算符(xor): 符号为 ^ , 表示若两个二进制位不相同，则结果为1，否则为0
 * 
 * 左移运算符  m << n , 表示把m左移n位，左移n位的时候，最左边的n位将被丢弃，同时在最右边补上n个0，
 * 比如：0000 1010 << 2 = 0010 1000  (m 乘以 2的n次方)
 * 
 * 右移运算符  m >> n , 表示把m右移n位，右移n位的时候，最右边的n位将被丢弃，同时在最左边补上n个0，
 * 比如：0000 1010 >> 2 = 0000 0010  (m 除以 2的n次方)
 * 
 * 我们可以让目标数字和一个数字做 与运算
 * 这个比较的数字必须只有一位是1 其他位是0，这样就可以知道目标数字的这意味是否为0。
 * 所以用域比较的这个数字初始值为1，比较完后让1左移1位，这样就可以一次比较所有位是否为1。
*/

// 示例代码：
function NumberOf1 (n) {
  let flag = 1
  let count = 0
  while (flag) {
    if (flag & n) {
      count++
      console.log('count:',count)
    }
    flag = flag << 1 // 什么时候左溢出，什么时候结束循环
    console.log('flag:', flag)
  }
  return count
}
// NumberOf1(5)

function NumberOf2 (n) {
  let count = 0
  while (n !== 0) {
    console.log('前n：',n)
    n = n & (n - 1)
    console.log('后n：',n)
    count++
    console.log('count:',count)
  }
  return count
}
// console.log('返回结果：',NumberOf2(4))

let x = 4
let binary = parseInt(x).toString(2)
let binarx = parseInt(x-1).toString(2)
// console.log('二进制：',binary) 
// console.log('二进制：',binarx) 
// console.log('二进制：位数',binary.length) 
// console.log('二进制：位数',binarx.length) 

// JS十进制转换二进制
// https://www.jianshu.com/p/5b2f7bb5ac71

/**
 * 十进制转换成二进制：toString()方法
 * 二进制转换成十进制：parseInt()方法
*/
var num = 8;            //  定义一个十进制的整数
var str = num.toString(2);     //  转换成二进制的字符串，2表示二进制  "1000"
var num1 = parseInt(str, 2);  //  将二进制转换成十进制的整数，2也表示二进制    8
var num8 = parseInt(str, 8);  //  将二进制转换成十进制的整数，2也表示二进制    8
console.log(typeof str,num1,num8)