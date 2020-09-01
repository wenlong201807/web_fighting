/**
 * 滑动窗口思想
 * https://leetcode-cn.com/problems/minimum-window-substring/solution/76-zui-xiao-fu-gai-zi-chuan-by-alexer-660/
 * 
 * 76. 最小覆盖子串
 * 给你一个字符串 S、一个字符串 T 。
 * 请你设计一种算法，可以在 O(n) 的时间复杂度内，
 * 从字符串 S 里面找出：包含 T 所有字符的最小子串。
*/


// 解法一：双指针
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

const s = "ADOBECODEBANC"
const t = "ABC"
const minWindow = (s, t) => {
  let hash = {};
  let n = t.length;
  let m = s.length;
  for (let i = 0; i < n; i++) {
    if (hash[t[i]]) {
      hash[t[i]]++
    } else {
      hash[t[i]] = 1
    }
  }
  console.log('hash:', hash)

  let left = 0;
  let right = 0;
  let minLeft = 0;
  let minRight = -1;
  let minLen = Number.MAX_SAFE_INTEGER;
  let hasAllT = (hash) => {
    for (let key in hash) {
      if (hash[key] > 0) {
        return false;
      }
    }
    return true;
  }
  console.log('hasAllT(hash):', hasAllT(hash))
  while (right < m) {
    let tmpRight = s[right];
    if (hash[tmpRight] != undefined) {
      hash[tmpRight]--;
      while (hasAllT(hash)) {
        let tmpLen = right - left + 1;
        if (tmpLen < minLen) {
          minLeft = left;
          minRight = right;
          minLen = tmpLen;
        }
        let tmpLeft = s[left];
        if (hash[tmpLeft] != undefined) {
          hash[tmpLeft]++;
        }
        left++;
      }
    }
    right++;
  }
  console.log('result:',s.substring(minLeft, minRight + 1))
  return s.substring(minLeft, minRight + 1);
};

minWindow(s, t)



// 解法二：滑动窗口

// 作者：Alexer-660
// 链接：https://leetcode-cn.com/problems/minimum-window-substring/solution/76-zui-xiao-fu-gai-zi-chuan-by-alexer-660/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。