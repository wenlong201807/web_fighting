/**
 * @param {string} s
 * @return {boolean}
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

//大致思路就是把对应的括号用正则匹配，然后去除
var isValid = function(s) {
  const reg = /(\(\)|\{\}|\[\])/;
  let temp = str;
  while(reg.test(temp)) {
      temp = temp.replace(reg, '');
  } 

  return !temp;

// 作者：pf135145
// 链接：https://leetcode-cn.com/problems/valid-parentheses/solution/you-xiao-de-gua-hao-zheng-ze-pi-pei-pao-zhuan-yin-/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
};