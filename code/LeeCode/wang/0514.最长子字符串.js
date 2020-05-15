/**
 * 20200514 最长子字符串
 * 
 * 请从字符串中找出一个最长的不好含重复字符的子字符串，
 * 
 * 参考答案：
 * 在不考录时间的情况下，直接暴力法对所有的子串进行检查，复杂度是O(n^3)
 * 
 * 解法1 ：滑动窗口
 * 
 * 整体流程如下：
 * 1.准备给哈希Map,key是char ,value是boolean,代表字符 char是否出出现在滑动窗口内
 * 2.i 和 j 初始化为0，结果 ans ，初始化为 0
 * 3.检查s[i]是否出现过，
 *     没有出现过，扩大窗口，记录s[j],指针 j 向右滑动一格，更新 ans
 *     出现过，缩小窗口，指针i 向右移动一格，map[s[i]] 更新为false
 * 4.如果 i 和 j 没有越界，回到step3 ，否则返回 ans
*/

// 代码实现
var lengthOfLongestSubstring = function (s) {
  const length = s.length
  const map = {}  // char -> boolean 代表着 char 是否在当前的窗口中
  let i = 0
  let j = 0
  let ans = 0

  while (i < length && j < length) {
    if (!map[s[j]]) {
      ans = Math.max(j-i+1,ans)
      map[s[j]] = true
      ++j
    } else {
      // 如果char重复，那么缩小滑动窗口，并更新对应的map
      map[s[i]] = false
      ++i
    }
  }
  return ans
}

// 由于整个过程就是 ‘推着’滑动窗口从左到右，时间复杂度是O(n),空间复杂度是O(n)

// 解法2：优化后的滑动窗口
/**
 * 在解法1中，流程中的第三步，如果s[j]出现在滑动窗口内，采用的做法是左边逐步缩小滑动窗口，
 * 事实上，不需要逐步缩小，
 * 假设滑动窗口内和s[j]相同字符下标是 j ，那么直接跳过 [i,j]范围即可
 * 
 * 为了做到 "跳动优化"，需要改造一下，对哈希表 map 的用法， key 还是 char，value变为int 。记录char对应的下标
 * 
*/
// 代码实现
var lengthOfLongestSubstring2 = function (s) {
  const length = s.length
  const map = new Map()
  let i = 0
  let j = 0
  let ans = 0
  while (i < length && i < length) {
    // 容易理解，检查s[j] 是否出现过，并且s[j] 重复的字符是在当前的滑动窗口中
    if (map.has(s[j]) && map.get(s[j]) >= i) {
      i = map.get(s[j]) + 1
    }
    ans = Math.max(j-i+1,ans)
    map.set(s[j],j)
    j++
  }
  return ans
}