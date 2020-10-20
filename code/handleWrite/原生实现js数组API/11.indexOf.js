// indexOf 不支持查找 NaN

Array.prototype.myindexOf = function (val, fromIndex = 0) {
  let arr = this;
  let len = arr.length;
  let k = Math.max(fromIndex >= 0 ? fromIndex : len - Math.abs(fromIndex), 0);
  // 处理负数
  while (k < len) {
    if (k in arr) {
      if (val === arr[k]) return k; // 找到返回下标
    }
    k++;
  }
  return -1; // 找不到返回 -1
};