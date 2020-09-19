// 封装单向链表
function LinkedList () {
  // 内部的类：节点类
  function Node (data) {
    this.data = data
    this.next = null
  }

  // 属性
  this.head = null
  this.length = 0

  // 1.追加节点
  // 链表尾部追加元素的方法
  LinkedList.prototype.append = function (element) {
    // 1.根据新元素创建节点
    var newNode = new Node(element)

    // 2.判断原来的链表是否为空
    if (this.length == 0) { // 链表为空 // 是不是第一个节点
      // if (this.head === null) { // 链表为空
      this.head = newNode
    } else { // 链表不为空

      //2.1 定义变量，保存当前找到的节点
      var current = this.head
      while (current.next) {
        current = current.next
      }

      //2.2 找到最后一项，将其next赋值为node
      current.next = newNode
    }

    // 3.链表的长度增加1
    this.length += 1
  }

  // 2. toString方法
  LinkedList.prototype.toString = function () {
    // 1.定义变量
    var current = this.head
    var listString = ''

    //2. 循环获取一个个的节点
    while (current) {
      listString += current.data + " "
      current = current.next
    }

    //3.返回左右拼接的字符串
    return listString
  }

  // 3. insert任意位置插入数据
  LinkedList.prototype.insert = function (position, data) {
    // 1. 对position进行越界判断
    if (position < 0 || position > this.length) {
      return false
    }

    // 2.根据data创建newNode
    var newNode = new Node(data)

    //3.判断插入的位置是否是第一个
    if (position == 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      var index = 0
      var current = this.head
      var previous = null

      while (index++ < position) { // 难点
        // while (++index < position) { // 做区别？？？
        previous = current
        current = current.next
      }

      newNode.next = current
      previous.next = newNode
    }

    // 4.长度加1
    this.length += 1

    // 返回
    return true
  }

  //4.get方法
  LinkedList.prototype.get = function (position) {
    // 1. 越界判断
    if (position < 0 || position > this.length) {
      return false
    }

    //2.获取对应的data
    var current = this.head
    var index = 0
    while (index++ < position) {
      current = current.next
    }
    return current.data
  }

  //5.indexOf方法
  LinkedList.prototype.indexOf = function (data) {
    //1.定义变量
    var current = this.head
    var index = 0

    //2.开始查找
    while (current) {
      if (current.data == data) {
        return index
      }
      current = current.next
      index += 1
    }

    //3.找到最后没有找到，返回-1
    return -1
  }

  //6.update方法
  LinkedList.prototype.update = function (position, newData) {
    //1.越界判断
    if (position < 0 || position >= this.length) {
      return false
    }

    //2.查找正确的节点
    var current = this.head
    var index = 0
    while (index++ < position) {
      current = current.next
    }

    //3.将position位置的node的data修改成newData
    current.data = newData

    //4.修改成功返回true
    return true
  }

  // 7. removeAt方法
  LinkedList.prototype.removeAt = function (position) {
    //1.越界判断
    if (position < 0 || position >= this.length) {
      // return false
      return null  // 没有找到对应节点，返回null
    }

    // 2. 判断是否删除的是第一个节点
    var current = this.head // 假设当前节点是头部
    if (position == 0) {
      this.head = this.head.next
    } else {
      var index = 0
      var previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }

      // 前一个节点的next指向，current的next节点
      previous.next = current.next
    }

    //3.长度减一
    this.length -= 1

    //4.返回提示，删除成功
    // return true
    return current.data // 返回删除节点的数据内容
  }

  //8.remove方法
  LinkedList.prototype.remove = function (data) {
    //1.获取data在列表中的位置 
    var position = this.indexOf(data)
    //2.根据位置信息，删除节点
    return this.removeAt(position)
  }

  //9.isEpmty
  LinkedList.prototype.isEpmty = function () {
    return this.length == 0
  }

  //10.size
  LinkedList.prototype.size = function () {
    return this.length
  }

}


// 测试代码
// 1.创建linkedList
var list = new LinkedList()

// 2. 测试append添加方法
list.append('abc')
list.append('cba')
list.append('nba')
// alert(list)
// console.log(list)
// console.log(list.toString())

//3.insert方法
list.insert(0, 'aaa')
list.insert(3, 'bbb')
list.insert(5, 'ccc')
// alert(list)
// console.log(list)
// console.log(list.toString())

//4.get方法
// alert(list.get(0))
// alert(list.get(3))
// alert(list.get(5))
// console.log(list)
// console.log(list.toString())

//5.indexOf
// alert(list.indexOf('abc'))
// alert(list.indexOf('bbb'))
// alert(list.indexOf('ccc'))

//6.update
list.update(0, 'mmm')
list.update(3, 'nnn')
alert('updata: ' + list)

//7.removeAt
list.removeAt(0)
// alert('removeAt--0: ' + list)
list.removeAt(3)
// alert('removeAt--3: ' + list)

//8.remove
alert('删除节点前: ' + list)
list.remove('nnn')
alert('remove--0: ' + list)
list.remove('abc')
alert('remove--3: ' + list)

// 9.isEmpty/size
alert(list.isEpmty())
alert(list.size())