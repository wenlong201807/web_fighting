/**
难度：简单
涉及知识：字符串
题目地址：https://leetcode-cn.com/problems/longest-common-prefix/
题目内容：
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串

题源：https://mp.weixin.qq.com/s/FNQ_Cp3KlmwzII-2jYWUmQ
*/

// 3.1 解法 - 暴力破解
// 3.2 解法 - 水平扫描
// 3.3 解法 - 正则表达式
// 3.4 解法 - 水平扫描reduce 最快
const longestCommonPrefix = (strs) => {
  if (strs.length < 2) {
    return !strs.length ? '' : strs[0]
  }

  return strs.reduce((prev, next) => {
    let i = 0
    while (prev[i] && next[i] && prev[i] === next[i]) {
      i++
    }
    console.log('end:',prev.slice(0,i))
    return prev.slice(0, i)
  })
}
// let strs = ['flower','flow','flight']
let strs = ['dog','racecar','car']
console.log('output:',longestCommonPrefix(strs))


/**
 * 图解 Map、Reduce 和 Filter 数组方法
 * https://juejin.im/post/5caf030d6fb9a068736d2d7c
*/


