// 思路：用的递归思想，观察发现每一个结果和前一个结果有关，出口是第一个报数，主要是那个正则的想法

var countAndSay = function (n) {
  if (n == 1) {
    return n.toString()
  }
  // 该正则进行相同分组，调用match方法得出接下来用的数组
  var tempArr = countAndSay(n - 1).match(/(\d)\1*/g)
  var result = ""
  // 循环上面得到的数组，然后取每个的长度（题里说的几个），还有第一个数字（题里说的哪个数）
  tempArr.forEach((item) => {
    var lth = item.length.toString()
    var num = item.substring(0, 1)
    result = result + lth + num
  })
  return result   //最后返回结果

};

// 作者：wo-shi-gao-xiao-de
// 链接：https://leetcode-cn.com/problems/count-and-say/solution/jsdi-gui-jie-jue-by-wo-shi-gao-xiao-de/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。