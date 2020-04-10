// 方法一： 遍历，比较当前位置为起始位置的字串是否与输入字符串相等，
// 先判断首字母相等可以跳过明显不符合的，不用再获取字串比较

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  var len = needle.length
  for (var i = 0, l = haystack.length; i < l; i++) {
    if (haystack[i] !== needle[0]) {
      continue;
    }
    if (haystack.substr(i, len) === needle) {
      return i;
    }
  }
  return -1;
};
// 方法二： 利用js API

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
// 方法三： 正则表达式

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.search(needle);
};

// 作者：anjina
// 链接：https://leetcode-cn.com/problems/implement-strstr/solution/js-san-chong-fang-fa-by-anjina/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。