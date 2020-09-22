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
      if (position === 0) {
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      } else if (position == this.length) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = node;
        node.next = current;
        current.prev = node;
        node.prev = previous;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  };
  this.append = function (element) {
    var node = new Node(element);
    var current;
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
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
  this.removeAt = function (position) {
    if (position > -1 && position < this.length) {
      var current = this.head;
      var previous;
      var index = 0;
      if (position === 0) {
        this.head = current.next;
        if (this.length === 1) {
          this.tail = null;
        } else {
          this.head.prev = null;
        }
      } else if (position === (this.length - 1)) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.length--;
      return current.element;
    } else {
      return false;
    }
  };
}
inheritPrototype(DoublyLinkedList, LinkedList);
