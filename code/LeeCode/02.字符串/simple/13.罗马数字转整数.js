/**
 * @param {string} s
 * @return {number}
 */

/**
 * IV 4
 * IX 9
 * XL 40
 * XC 90
 * CD 400
 * CM 900
 * 
 * 解题思路
仔细分析罗马数字的规律，会发现，罗马字母(XII)正常是从左到右按从大到小排列，
当代表小数字(I)的字母在代表大数字的字母(V)左边时，
这意味着两个字母代表一个数，而且是大数字减小数字的最终结果（V-I）。
所以，在做计算时，只需遍历判断下标为i的字母是否大于下标为i+1的字母，如果大于，则相加，如果小于，则需要减去当前这个数。

作者：whatever-14
链接：https://leetcode-cn.com/problems/roman-to-integer/solution/zuo-jian-you-jia-by-whatever-14/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
var romanToInt = function (s) {
  let obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let num = 0;

  for (let i = 0, len = s.length; i < len; i++) {
    let left = s[i],
      right = s[i + 1],
      newNum = obj[left] < obj[right] ? 0 - obj[left] : obj[left];
    num += newNum
  }

  return num;

};

let str = "III"
romanToInt(str)