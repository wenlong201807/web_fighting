var swapPairs = function (head) {
  function swap (node1, node2) {   //交换两个节点，返回原来的第1个节点和第3个节点
    var thirdNode = node2.next;  //如果此时不保存第三个节点，则交换后，链接就断了
    node2.next = node1;
    node1.next = null;
    return [node1, thirdNode];
  }

  if (!head || !head.next) return head;

  var newHead = head.next;
  var node;

  while (head && head.next) {
    if (node) node.next = head.next;   //上个循环的节点在此进行连接
    [node, head] = swap(head, head.next);
    if (!head || !head.next) node.next = head;   //如果第三个节点是最后一个节点，直接连接上
  }

  return newHead;
};

let head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
              val: 7,
              next: {
                val: 8,
                // next: null
              }
            }
          }
        }
      }
    }
  }
}
let head2 = JSON.parse(JSON.stringify(head))

let newNodeList = swapPairs(head)
// console.log(JSON.stringify(newNodeList))

const nodeListToArr = (list) => {
  let arr = []
  let point = list
  while (point) {
    arr.push(point.val)
    point = point.next
  }
  return arr
}
console.log('原有的数组：', nodeListToArr(head2))
// [1, 2, 3, 4,5, 6, 7, 8]
console.log('xin的数组：', nodeListToArr(newNodeList))
// [ 2, 1, 4, 3, 6, 5, 8, 7]