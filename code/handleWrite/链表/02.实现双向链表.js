// 参考资料  https://www.cnblogs.com/greatluoluo/p/6308828.html

/**
 * 创建双向链表
 * 在双向链表中,链接是双向的:一个链向下一个元素, 另一个链向前一个元素。
 * 双向链表和链表的区别就是有一个tail属性，
 * 所以必须重写insert、append、removeAt方法。
 * 每个节点对应的Node也多了一个prev属性。
*/

//寄生组合式继承实现，详见javascript高级程序设计第七章
function inheritPrototype (subType, superType) {
  function object (o) {
    function F () { }
    F.prototype = o;
    return new F();
  }
  var prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}


function DoublyLinkedList () {
  function Node (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
  this.tail = null;
  LinkedList.call(this);
  //与LinkedList不同的方法自己实现。
  this.insert = function (position, element) {
    if (position > -1 && position <= this.length) {
      var node = new Node(element);
      var current = this.head;
      var previous;
      var index = 0;
      if (position === 0) { // 插入到第一个位置
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      } else if (position == this.length) { // 插入到最后一个位置
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else { // 插入到中间任意一个位置
        while (index++ < position) { // 依次遍历，查找到指定的位置
          previous = current;
          current = current.next;
        }
        // 重新赋值新节点
        previous.next = node;
        node.next = current;
        current.prev = node;
        node.prev = previous;
      }
      this.length++; // 所有的插入操作，都是新增一个节点，长度必然加一
      return true;
    } else {
      return false;
    }
  };
  this.append = function (element) {
    var node = new Node(element);
    var current;
    if (this.head === null) {  // 原链表是否为空
      this.head = node;
      this.tail = node;
    } else { // 原链表不为空时，新节点追加到最后一个
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
      this.tail = node;
    }
    this.length++;
  };
  this.removeAt = function (position) { // 删除任意一个位置的节点
    if (position > -1 && position < this.length) { // 删除的节点，在节点范围内
      var current = this.head;
      var previous;
      var index = 0;
      if (position === 0) { // 删除第一个
        this.head = current.next;
        if (this.length === 1) {
          this.tail = null;
        } else {
          this.head.prev = null;
        }
      } else if (position === (this.length - 1)) { // 删除最后一个
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
      } else { // 删除其他指定位置节点
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.length--; // 删除掉一个节点，自然长度减一
      return current.element;
    } else {
      return false;
    }
  };
}
inheritPrototype(DoublyLinkedList, LinkedList);
