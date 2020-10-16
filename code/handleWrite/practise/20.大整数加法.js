// 参考资料 https://blog.csdn.net/meimeilive/article/details/82431466

//大整数加法
function big_add (a, b) {
  var min_str = a.length < b.length ? a.split("").reverse() : b.split("").reverse();
  var max_str = a.length >= b.length ? a.split("").reverse() : b.split("").reverse();
  var quotient = 0, remainder = 0;
  var resutl = [];
  var temp = 0;
  for (var i = 0; i < min_str.length; i++) {
    temp = parseInt(min_str[i]) + parseInt(max_str[i]) + quotient;
    quotient = parseInt(temp / 10);//进位
    remainder = temp % 10;//余数
    resutl.push(remainder);
  }
  for (i; i < max_str.length; i++) {
    temp = parseInt(max_str[i]) + quotient;
    quotient = temp / 10;//进位
    remainder = temp % 10;//余数
    resutl.push(remainder);
    if (temp < 10 && i < max_str.length - 1) {
      return max_str.slice(i + 1).reverse().join("") + resutl.slice().reverse().join("");
    }
  }
  return resutl.reverse().join("");
}

let a = '123456789654'
let b = '123456789654'
console.log(big_add(a, b))
