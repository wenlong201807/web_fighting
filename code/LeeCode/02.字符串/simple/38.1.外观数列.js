// 外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 被读作  "one 1"  ("一个一") , 即 11。
// 11 被读作 "two 1s" ("两个一"）, 即 21。
// 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
// 给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。
// 注意：整数序列中的每一项将表示为一个字符串。

/*
https://baike.baidu.com/item/%E5%A4%96%E8%A7%82%E6%95%B0%E5%88%97/2215938?fr=aladdin
外观常数（Look-and-say sequence），是指以下特点的整数序列：
1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ……
它以数字1开始，序列的第n+1项是对第n项的描述。比如第2项是2个1，
所以下一项（第三项）就是21。又比如第5项是111221，描述就是3个1，2个2，1个1， 所以下一项就是312211。
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let prev = '1'
  for(let i = 1; i < n; i++){
      prev = prev.replace(/(\d)\1*/g, item =>`${item.length}${item[0]}`)
  }
  return prev
};
console.log(countAndSay(6))

// 作者：wangquanfugui12138
// 链接：https://leetcode-cn.com/problems/count-and-say/solution/tong-guo-zheng-ze-he-bing-xiang-tong-yuan-su-wan-c/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。