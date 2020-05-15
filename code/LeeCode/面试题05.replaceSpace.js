/**
 * @param {string} s
 * @return {string}
 * https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 * 参考资料
 * js中ASCII码和字符互相转换的方法
 * https://www.cnblogs.com/weiqinl/p/10575727.html
 */
var replaceSpace = function (s) {
  
  let arr = s.split('')
  let len = arr.length
  let i = 0
  while (i < len) {
    if (arr[i].charCodeAt() ==32) {
      arr[i] = '%20'
    }
    i = i + 1
  }
  return arr.join('')
};

let s = "We are happy."

console.log(replaceSpace(s))

