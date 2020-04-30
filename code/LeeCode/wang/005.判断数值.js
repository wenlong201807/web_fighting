/**
 * 005 判断数值
 * 题目：
 * 请实现一个函数，用来判断字符是否表示数值(包括整数和小数)。
 * 例如：字符串 "+100" , "5e2" , "-123" , "3.1416" , "-1E-16" 都表示数值
 * 但是 "12e" , "1a3.14" , "1.2.3" , "+-5" , "12e+4.3" 都不是
 * 
 * 提示：注意要考虑全面
 * js 判断字符串是否全是数字，求解
 * https://segmentfault.com/q/1010000007500899
 * 
 * 考虑所有情况
 * 1.只能出现数字，符号位，小数点，指数位
 * 2.小数点，指数符号只能出现一次，且不能出现在开头和结尾
 * 3.指数位出现后，小数点不允许再出现
 * 4.符号位只能出现在开头和指数位后面
*/
// 示例代码：
function isNumber (s) {
  if (s == undefined) {
    return false
  }

  let hasPoint = false
  let hasExp = false

  for (let i = 0; i < s.length; i++){
    const target = s[i]
    if (target>=0 && target <=9) {
      continue
    } else if (target >= 'e' || target === 'E') {
      if (hasExp || i === 0 || i === s.length - 1) {
        return false
      } else {
        hasExp = true
        continue
      }
    } else if (target === '.') {
      if (hasPoint || hasExp || i === 0 || i === s.length - 1) {
        return false
      } else {
        hasPoint = true
        continue
      }
    } else if (target === '-' || target === '+') {
      if (i === 0 || s[i - 1] === 'e' || s[i - 1] === 'E') {
        continue
      } else {
        return false
      }
    } else {
      return false
    }
  }
  return true
}
// let s = '1.23e+20' // true
// let s = '.123' // false
// let s = '+123.' // false
// let s = '-1.23e+20' // true
// let s = '123.4.5' // false
// let s = '123abc456' // false
// let s = 'undefined'    // false      
// let s = '123.'  // false
console.log(s,isNumber (s))

var numbers = [
  123, +123, -123,
  '123', '+123', '-123',
  123.4, +123.4, -123.4,
  '123.4', '+123.4', '-123.4',
  123., +123., -123.,
  '123.', '+123.', '-123.',
  .123,, +.123, -.123,
  '.123', '+.123', '-.123',
  1.23e+20, +1.23e+20, -1.23e+20,
  '1.23e+20', '+1.23e+20', '-1.23e+20',
  '123.4.5',
  '123abc456',
  undefined
];

// numbers.forEach((v,index) => {
//   console.log(index,typeof(v), "\t", v, "\t", !isNaN(v));
// });