//参考资料 https://www.cnblogs.com/greatluoluo/p/6308828.html
/**
 * 首先要明确，我们为什么要创建链表呢？
 * 数组的大小是固定的，从数组的起点或中间插入或移除的成本很高，因为需要移动元素。
 * 尽管JS的Array类方法可以做这些，但是情况也是这样。
 * 链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。
 * 每个元素由一个存储元素本身和指向下一个元素的指针组成。
 * 相对于传统的数组，链表的一个好处在于，添加或移除元素的时候不需要移动其他元素。
 * 然而，链表需要使用指针，因此实现链表时需要额外注意。
 * 数组的另一个细节是可以直接访问任何位置的任何元素，
 * 而要想访问链表中间的一个元素，需要从起点（表头）开始迭代到列表直到找到所需元素。
 * 正式创建链表！
 * 我们使用动态原型模式来创建一个链表。列表最后一个节点的下一个元素始终是null。
*/

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
    LinkedList.prototype.append = function (element) { // 追加一个节点到尾部
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
    LinkedList.prototype.insert = function (position, element) { // 指定位置添加一个节点
      if (position > -1 && position < this.length) {
        var current = this.head;
        var node = new Node(element);
        var previous;
        var index = 0;
        if (position == 0) { // 插入第一个节点位置，替换了头节点
          node.next = current;
          this.head = node;
        } else { // 插入的不是第一个位置
          while (index++ < position) { // 依次遍历，查找指定索引位置
            previous = current;
            current = current.next;
          }
          // 新节点的插入位置
          node.next = current; // 新加入的节点的下一个节点指向原来的当前节点
          previous.next = node;  // 前一个节点的下一个节点指向新加入的节点
        }
        this.length++; // 新加了一个节点，长度必然加1
        return true;
      } else {
        return false;
      }
    };

    //根据位置删除指定元素，成功 返回元素， 失败 返回null
    LinkedList.prototype.removeAt = function (position) {
      if (position > -1 && position < this.length) {
        var current = this.head; // 重置当前节点为头节点
        var previous = null; // 对应当前节点为头节点时，是没有前一个节点的，即为null
        var index = 0;

        if (position == 0) { // 删除了头节点，那么将当前节点的下一个节点指向头节点
          this.head = current.next;
        } else {
          while (index++ < position) { // 依次遍历，获取指点节点位置的信息
            previous = current;
            current = current.next;
          }
          previous.next = current.next; // 前一个的下一个节点 直接指向当前节点的下一个节点
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

var linkedList = new LinkedList();
    // console.log(linkedList.isEmpty());//true;
    linkedList.append('huang');
    // linkedList.append('==88888==');
    linkedList.append('du')
    // linkedList.append('--kkkk--')
    linkedList.insert(1,'cheng');
    // console.log(linkedList.toString());//huangchengdu
    // console.log(linkedList.indexOf('du'));//2
    // console.log(linkedList.size());//3
    // console.log(linkedList.removeAt(2));//du
    // console.log(linkedList.toString());//huangcheng