// 使用连接符，将数组转成字符串

Array.prototype.myjoin = function (connector = ',') {
  let arr = this;
  let len = arr.length;
  let str = '';
  let k = 0;
  while (k < len) {
    if (k in arr) {
      if (k === len - 1) { // 最后一位不用连接
        str += arr[k];
      } else {
        str += arr[k] + connector.toString();
      }
    }
    k++;
  }
  return str;
};