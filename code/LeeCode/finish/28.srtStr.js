/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 28. 实现 strStr()
 * https://leetcode-cn.com/problems/implement-strstr/
 * 实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，
在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
如果不存在，则返回  -1。
 */
function strStr(haystack, needle) {
  var orignLen = haystack.length
  var targetLen = needle.length
  var len = orignLen - targetLen
  var i = 0
  while (i <= len) {
    console.log(haystack.slice(i, i+targetLen), needle,i+targetLen)
    if (haystack.slice(i, i+targetLen) == needle) {
      return i
    } else {
      
    }
    i = i + 1
  }
  return -1
};
let a = "hello"
let b = "ll"
console.log(strStr(a, b))




