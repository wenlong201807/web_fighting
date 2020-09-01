/**
 * https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484114&idx=1&sn=5258857c2e15c5907e8f1ec747cbb734&chksm=ea911a82dde69394b4f6e00c70a103add199399fa60c6a80946135ca07f146749be4f02a50d4&scene=21#wechat_redirect
 * 双指针法
 * 字符串方法 https://www.jb51.net/article/77675.htm
 * 参考方法：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/zi-jie-leetcode3wu-zhong-fu-zi-fu-de-zui-chang-zi-/
*/

let s = "aab"
// let s = "pwwkew"
// let s = "bbbbb"
// let s = "abcabcbb"
// 双指针
const lengthOfLongestSubstring = (s) => {

  let max = 0
  let i = 0
  console.log(s)
  for (let j = 0; j < s.length; j++) {
    console.log(j, i, s.substring(i, j), s.substring(i, j).indexOf(s[j]))
    let index = s.substring(i, j).indexOf(s[j])
    if (index !== -1) {
      i = i + index + 1
    }
    // console.log('---',j,i)
    max = Math.max(max, j - i + 1)
  }
  console.log(max)
  return max

}

// lengthOfLongestSubstring(s)
// s = s.substring(1)
// console.log(s,s.charAt(0))


// 滑动窗口【动态数组】
const lengthOfLongestSubstring2 = (s) => {
  let targetArr = []
  let max = 0
  for (let i = 0; i < s.length; i++) {
    let index = targetArr.indexOf(s[i])
    console.log(targetArr, index)
    if (index !== -1) {
      targetArr.splice(0, index + 1);
    }
    targetArr.push(s.charAt(i))
    max = Math.max(targetArr.length, max)
  }
  console.log(max)
  return max

}
// lengthOfLongestSubstring2(s)


// map方法
const lengthOfLongestSubstring3 = (s) => {
  console.log('s:',s)
  let map = new Map()
  let max = 0
  let i = 0
  let j = 0
  for (j; j < s.length; j++) {
    console.log(j,s[j],map,i,j,max)
    if (map.has(s[j])) {
      i = Math.max(map.get(s[j]) + 1, i)
    }
    max = Math.max(max, j - i + 1)
    map.set(s[j], j)
  }
  console.log(max)
  return max
}
lengthOfLongestSubstring3(s)

