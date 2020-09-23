// 参考资料  https://www.cnblogs.com/greatluoluo/p/6308828.html
function LinkedList () {
  //先创建一个节点
  function Node (element) {
    this.element = element;
    this.next = null;
  }
  this.head = null;
  this.length = 0;

  //通过对一个方法append判断就可以知道是否设置了prototype
  if ((typeof this.append !== 'function') && (typeof this.append !== 'string')) {
    //添加元素
    LinkedList.prototype.append = function (element) {
      var node = new Node(element);
      var current;

      if (this.head == null) {
        this.head = node;
      } else {
        current = this.head;
        while (current.next != null) {
          current = current.next;
        }
        current.next = node;
      }
      this.length++;
    };

    //插入元素，成功true，失败false
    LinkedList.prototype.insert = function (position, element) {
      if (position > -1 && position < this.length) {
        var current = this.head;
        var node = new Node(element);
        var previous;
        var index = 0;
        if (position == 0) {
          node.next = current;
          this.head = node;
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          node.next = current;
          previous.next = node;
        }
        this.length++;
        return true;
      } else {
        return false;
      }
    };

    //根据位置删除指定元素，成功 返回元素， 失败 返回null
    LinkedList.prototype.removeAt = function (position) {
      if (position > -1 && position < this.length) {
        var current = this.head;
        var previous = null;
        var index = 0;

        if (position == 0) {
          this.head = current.next;
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          previous.next = current.next;
        }
        this.length--;
        return current.element;
      } else {
        return null;
      }
    };

    //根据元素删除指定元素，成功 返回元素， 失败 返回null
    LinkedList.prototype.remove = function (element) {
      var index = this.indexOf(element);
      return this.removeAt(index);
    };

    //返回给定元素的索引，如果没有则返回-1
    LinkedList.prototype.indexOf = function (element) {
      var current = this.head;
      var index = 0;
      while (current) {
        if (current.element === element) {
          return index;
        }
        current = current.next;
        index++;
      }
      return -1;
    };

    LinkedList.prototype.isEmpty = function () {
      return this.length === 0;
    };
    LinkedList.prototype.size = function () {
      return this.length;
    };
    LinkedList.prototype.toString = function () {
      var string = '';
      var current = this.head;
      while (current) {
        string += current.element;
        current = current.next;
      }
      return string;
    };
    LinkedList.prototype.getHead = function () {
      return this.head;
    };
  }
}
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

var doublyList = new DoublyLinkedList();
// console.log(doublyList.isEmpty()); //true;
    doublyList.append('huang');
    doublyList.append('du')
    doublyList.insert(1, 'cheng');
    console.log(doublyList.toString()); //huangchengdu
    // console.log(doublyList.indexOf('du')); //2
    // console.log(doublyList.size()); //3
    console.log(doublyList.removeAt(2)); //du
    console.log(doublyList.toString()); //huangcheng