// includes 和 indexOf
// 这两个都可以用来查找数组中是否有某个元素，只是返回值有区别。
// indexOf 不支持查找 NaN 

Array.prototype.myincludes = function (val, fromIndex = 0) {
  let arr = this;
  let len = arr.length;
  let k = Math.max(fromIndex >= 0 ? fromIndex : len - Math.abs(fromIndex), 0);
  // 允许传入负数，意为从倒数第几位开始查找
  // 负数依然是按升序查找
  // 避免传入负数绝对值大于len而使k出现负数，k设置最小值 0 
  function check (x, y) {
    return x === y ||
      (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
    // 判断 NaN
  }
  while (k < len) {
    if (k in arr) {
      if (check(val, arr[k])) return true; // 找到一个符合条件的，返回 true
    }
    k++;
  }
  return false; // 没找到 返回false
};