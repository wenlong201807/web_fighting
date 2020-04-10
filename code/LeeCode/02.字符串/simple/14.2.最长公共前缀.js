/**
 * @param {string[]} strs
 * @return {string}
作者：rhinoc
链接：https://leetcode-cn.com/problems/longest-common-prefix/solution/javascript-zui-chang-gong-gong-qian-zhui-by-rhinoc/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
// 解一：
// 逐位比较，比较全部通过时re增加当前字符，不通过时直接返回re。
var longestCommonPrefix1 = function (strs) {
  var re = '';
  if (!strs.length) return re;
  for (var j = 0; j < strs[0].length; j++) {//第j位
    for (var i = 1; i < strs.length; i++) {//第i个
      if (strs[i][j] != strs[0][j]) return re
    }
    re += strs[0][j];
  }
  return re;
};


// 解二：
// 解一的递归版本，需要增加一些判断语句。
var longestCommonPrefix2 = function (strs, re = '') {
  if (!strs.length) return re;
  if (strs.length == 1) return strs[0];
  for (var i = 1; i < strs.length; i++) {
    if (!strs[i][0]) return re
    if (strs[i][0] != strs[0][0]) return re
    strs[i] = strs[i].slice(1, strs[i].length);
  }
  re += strs[0][0];
  strs[0] = strs[0].slice(1, strs[0].length);
  return longestCommonPrefix(strs, re);
};
// 作者：rhinoc
// 链接：https://leetcode-cn.com/problems/longest-common-prefix/solution/javascript-zui-chang-gong-gong-qian-zhui-by-rhinoc/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


// 解三：
// 和解一恰好相反，re初始化为数组中第一个元素，逐个比较，当比较通过时返回re，
// 否则削去末位直至比较通过。这里的比较使用了正则表达式。
var longestCommonPrefix3 = function (strs) {
  var re = strs[0] ? strs[0] : '';
  for (var i = 1; i < strs.length; i++) {
    var regex = new RegExp('^' + re);
    while (!regex.test(strs[i]) && re.length) {
      re = re.slice(0, re.length - 1);
      regex = new RegExp('^' + re);
    }
  }
  return re;
};

// 作者：rhinoc
// 链接：https://leetcode-cn.com/problems/longest-common-prefix/solution/javascript-zui-chang-gong-gong-qian-zhui-by-rhinoc/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
