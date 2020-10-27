// 参考资料 https://blog.csdn.net/xuedan1992/article/details/80171647

function Permutation (str) {
  if (str.length == 0) {
    return [];
  }
  var result = [];
  if (str.length == 1) {
    return [str];
  } else {//把str分为两部分，第一部分为第一个字母str[0]，第二部分为剩余的字符串str.slice(1)，把Permutation(str.slice(1))作为一个已知量。
    var rest = Permutation(str.slice(1));//递归，Permutation(str.slice(1))表示剩余部分字符串的全排列。
    for (var j = 0; j < rest.length; j++) {//插空
      for (var k = 0; k < rest[j].length + 1; k++) {
        var temp = rest[j].slice(0, k) + str[0] + rest[j].slice(k);
        result.push(temp);
      }
    }
    //去掉result中重复的元素
    var res = [];
    for (var k = 0; k < result.length; k++) {
      if (res.indexOf(result[k]) === -1) {
        res.push(result[k]);
      }
    }
    return res.sort();
  }
}

let str = 'abc'
// [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
console.log(Permutation(str))
// console.table(Permutation(str))