// 参考资料 https://blog.csdn.net/meimeilive/article/details/82431466

//大数乘法
function multi (a, b) {
  var str1, str2, len1, len2, maxlen, result = [];
  str1 = a.split("").reverse();
  str2 = b.split("").reverse();
  len1 = str1.length;
  len2 = str2.length;
  //因为要在下一步做累加，如果不初始化为0，result[]中的值会变为NaN
  //因为未初始化的数组中的值为undefined
  for (var i = 0; i < len1; i++)
    for (var j = 0; j < len2; j++)
      result[i + j] = 0;
  for (var i = 0; i < len1; i++)
    for (var j = 0; j < len2; j++)
      //根据乘法的手动计算方式，在上下相同位上会有相加
      result[i + j] += parseInt(str1[i]) * parseInt(str2[j]);
  var n = result.length;
  for (var k = 0; k < n - 1; k++) {
    var temp = result[k];
    if (temp >= 10) {
      result[k] = temp % 10;
      //JS中的"/"不是除法取整，会取得小数，所以要用Math.floor()
      result[k + 1] += parseInt(temp / 10);
    }
  }
  return result.reverse().join("");
}


let a = '123456789654'
let b = '123456789654'
console.log(multi(a, b))