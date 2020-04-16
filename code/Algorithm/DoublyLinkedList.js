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
    var resultString =""

    //2.依次向后遍历，获取每一个节点
    while (current) {
      resultString+=current.data+" "
      current=current.prev
    }

    //3.返回
    return resultString
  }
  //2.3 backwardString方法
  DoublyLinkedList.prototype.backwardString = function () {
    //1.定义变量
    var current = this.head
    var resultString =""

    //2.依次向后遍历，获取每一个节点
    while (current) {
      resultString+=current.data+" "
      current=current.next
    }

    //3.返回
    return resultString
  }


}

// 测试代码
var list = new DoublyLinkedList()

// 1.测试append方法
list.append('abc')
list.append('cba')
list.append('nba')
console.log('查看list：',list)

//2.测试转成字符串的方法
alert(list)
alert(list.backwardString())
alert(list.forwardString())