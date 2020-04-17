
// 设计哈希函数
// 1.将字符串转成比较大的数字：hashCode
// 2. 将大的数字hashCode压缩到数组范围（大小）之内
function hashFunc (str, size) {
  // 1.定义hashCode变量
  var hashCode = 0

  // 2.霍纳法则，来计算hashCode的值
  // cats -> Unicode编码
  for (var i = 0; i < str.length; i++) {
    hashCode = 37 * hashCode + str.charCodeAt(i)
  }

  // 3.取余操作
  var index = hashCode % size
  return index
}

// 测试哈希函数
alert(hashFunc('abc', 7)) // 4
alert(hashFunc('cba', 7)) // 3
alert(hashFunc('nba', 7)) // 5
alert(hashFunc('mba', 7)) // 1
// 结论  获取到的实际下标相对均匀