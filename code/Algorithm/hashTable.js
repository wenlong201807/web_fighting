// 封装哈希表类
function HashTable () {
  // 属性
  this.storage = []
  this.count = 0
  this.limit = 7

  // 方法
  // 设计哈希函数
  // 1.将字符串转成比较大的数字：hashCode
  // 2. 将大的数字hashCode压缩到数组范围（大小）之内
  HashTable.prototype.hashFunc = function (str, size) {
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

  // 插入与修改操作
  HashTable.prototype.put = function (key, value) {
    // 1. 根据key获取对应的index
    var index = this.hashFunc(key, this.limit)

    // 2.根据index取出对应的bucket
    var bucket = this.storage[index]

    // 3.判断改bucket是否为null
    if (bucket == null) {
      bucket = []
      this.storage[index] = bucket
    }

    // 4.判断是否修改数据
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i]
      if (tuple[0] == key) {
        tuple[1] = value
        return
      }
    }

    // 5.进行添加操作

    // 哈希表总数量+1
    bucket.push([key, value])
    this.count += 1

  }




}