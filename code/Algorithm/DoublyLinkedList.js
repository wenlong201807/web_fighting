// 封装双向链表
function DoublyLinkedList () {
  // 内部类：节点类
  function Node (data) {
    this.data = data
    this.prev = null
    this.next = null
  }

  // 属性
  this.head = null
  this.tail = null
  this.length = 0

  // 常见的操作：方法
  // 1.append追加一个
  DoublyLinkedList.prototype.append = function (data) {
    //1.根据data创建节点
    var newNode = new Node(data)

    //2.判断添加的是否是第一个节点
    if (this.length == 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }

    //3.长度加+
    this.length += 1
  }

  //2.将链表转成字符串
  //2.1 toString方法
  DoublyLinkedList.prototype.toString = function () {
    return this.backwardString()
  }
  //2.2 forwardString方法
  DoublyLinkedList.prototype.forwardString = function () {
    //1.定义变量
    var current = this.tail
    var resultString = ""

    //2.依次向后遍历，获取每一个节点
    while (current) {
      resultString += current.data + " "
      current = current.prev
    }

    //3.返回
    return resultString
  }
  //2.3 backwardString方法
  DoublyLinkedList.prototype.backwardString = function () {
    //1.定义变量
    var current = this.head
    var resultString = ""

    //2.依次向后遍历，获取每一个节点
    while (current) {
      resultString += current.data + " "
      current = current.next
    }

    //3.返回
    return resultString
  }

  //3.insert方法***最复杂的
  DoublyLinkedList.prototype.insert = function (position, data) {
    // 1.越界判断
    if (position < 0 || position > this.length) return false

    //2. 创建一个新节点
    var newNode = new Node(data)

    //3.判断原来的列表是否为空
    if (this.length == 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (position == 0) {//3.1判断position是否为0
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
      } else if (position == this.length) { // 插入最后一个位置
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      } else { // 插入中间任意位置
        var current = this.head
        var index = 0

        while (index++ < position) {
          current = current.next
        }

        // 修改指针**注意顺序
        newNode.next = current
        newNode.prev = current.prev
        current.prev.next = newNode
        current.prev = newNode
      }
    }

    //4. 长度加+
    this.length += 1
    return true
  }

  // 4.get方法
  DoublyLinkedList.prototype.get = function (position) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return null

    // 优化思路
    // 因为是双向链表，可以从前到后遍历，也可以从后到前遍历，
    // 因此，判断总长度与需要寻找的位置，如果大于总长度一半，则从后往前遍历
    //      判断总长度与需要寻找的位置，如果小于总长度的一半，则从前往后遍历
    // 2.获取元素
    var current = this.head
    var index = 0

    while (index++ < position) {
      current = current.next
    }

    return current.data
  }

  //5.indexOf方法
  DoublyLinkedList.prototype.indexOf = function (data) {
    // 1.定义变量
    var current = this.head
    var index = 0

    // 2. 查找和data相同的节点
    while (current) {
      if (current.data == data) {
        return index
      }
      current = current.next
      index += 1
    }
    return -1
  }

  //6.update
  DoublyLinkedList.prototype.update = function (position, newData) {
    // 1. 越界判断
    if (position < 0 || position >= this.length) return false

    // 2.寻找正确的节点
    var current = this.head
    var index = 0
    while (index++ < position) {
      current = current.next
    }

    //3.修改找到节点的data信息
    current.data = newData
  }

  //7.removeAt方法
  DoublyLinkedList.prototype.removeAt = function (position) {
    // 1.越界判断
    if (position < 0 || position >= this.length) return null

    // 2. 判断是否只有一个节点
    var current = this.head // 假设返回第一个节点
    if (this.length == 0) {
      this.head = null
      this.tail = null
    } else {
      if (position == 0) { // 判断是否删除的是第一个节点
        this.head.next.prev = null
        this.head = this.head.next
      } else if (position == this.length - 1) { // 最后一个节点
        current = this.tail
        this.tail.prev.next = null
        this.tail = this.tail.prev
      } else { // 中间任意一个节点
        var index = 0

        while (index++ < position) {
          current = current.next
        }

        current.prev.next = current.next // 当前节点的前一个节点的next  指向 当前节点的下一个节点
        current.next.prev = current.prev // 当前节点的下一个节点的perv  指向 当前节点的上一个节点
      }
    }
    this.length -= 1
    return current.data
  }

  //8.remove 
  DoublyLinkedList.prototype.remove = function (data) {
    // 1. 根据data获取下标值
    var index = this.indexOf(data)

    // 2.根据index删除对应位置的节点
    return this.removeAt(index)
  }

  //9.isEmpty
  DoublyLinkedList.prototype.isEmpty = function () {
    return this.length == 0
  }

  // 10.size
  DoublyLinkedList.prototype.size = function () {
    return this.length
  }

  // 11.获取链表的第一个元素
  DoublyLinkedList.prototype.getHead = function () {
    return this.head.data
  }

  // 12.获取链表的最后一个元素
  DoublyLinkedList.prototype.getTail = function () {
    return this.tail.data
  }


}

// 测试代码
var list = new DoublyLinkedList()

// 1.测试append方法
list.append('abc')
list.append('cba')
list.append('nba')
// console.log('查看list：', list)

//2.测试转成字符串的方法
// alert(list)
// alert(list.backwardString())
// alert(list.forwardString())
console.log('查看list：', list)
// alert(list)

//3.测试insert方法
list.insert(0, 'aaa')
list.insert(4, 'bbb')
list.insert(2, 'ccc')
// alert(list)
console.log('查看list：', list)

//4.get
// alert(list.get(0))
// alert(list.get(2))
// alert(list.get(5))

//5.indexOf
// alert(list.indexOf('aaa'))
// alert(list.indexOf('abc'))
// alert(list.indexOf('bbb'))

//6.update
list.update(0, 'mmm')
list.update(1, 'nnn')
// alert(list)

//7.removeAt
alert(list.removeAt(1))  // nnn
alert(list)
alert(list.removeAt(0))  // mmm
alert(list)

//8.remvoe
alert(list.remove('cba'))
alert(list)
alert(list.remove('nba'))
alert(list)

// 9 
alert(list.isEmpty())
alert(list.size())
alert(list.getHead())
alert(list.getTail())








