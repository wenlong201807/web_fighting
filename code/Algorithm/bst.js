
// 搜索效率为logN 比较快的一种
// 搜索效率影响，树的深度
// 封装二叉搜索树
function BinarySearchTree () {
  
  function Node (key) {
    this.key = key
    this.left = null
    this.right = null
  }

  // 属性
  this.root = null   // 

  // 方法
  // 插入数据 ： 对外给用户调用的方法
  BinarySearchTree.prototype.insert = function (key) {
    // 1.根据key创建节点
    var newNode = new Node(key)

    // 2.判断根节点是否有值
    if (this.root == null) {
      this.root = newNode
    } else {
      this.insertNode(this.root,newNode)
    }
  }


  // 第一次 node -> 9  newNode -> 14
  // 第二次 node -> 13  newNode -> 14
  // 第三次 node -> 15   newNode -> 14
  // 递归代码好写，不好理解。。。。。
  // 为了插入功能，内容递归调用的方法
  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    if (newNode.key < node.key) { // 向左查找
      if (node.left == null) {
        node.left = newNode
      } else {
        this.insertNode(node.left,newNode)
      }
    } else { // 向右查找
      if (node.right == null) {
        node.right = newNode
      } else {
        this.insertNode(node.right,newNode)
      }
    }
  }

  // 树的遍历
  // 1.先序遍历
  /**
   * 1.访问根节点
   * 2.先序遍历其左子树
   * 3.先序遍历其右子树
  */
  BinarySearchTree.prototype.preOrderTraversal = function (handler) {
  this.preOrderTraversalNode(this.root,handler)
  }
  // 第一次：node -> 11
  // 第一次：node -> 7
  // 第一次：node -> 5
  // 第一次：node -> 3
  // 第一次：node -> 11
  // 第一次：node -> 11
  // 第一次：node -> 11
  BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
    if (node != null) {
      // 1.处理node节点
      handler(node.key)
      // 2.查找node节点的左子节点
      this.preOrderTraversalNode(node.left, handler)
      // 3.查找node节点的右子节点
      this.preOrderTraversalNode(node.right, handler)
    }
  }


  // 2.后续序遍历
  /**
   * 1.后序遍历其左子树
   * 2.后序遍历其右子树
   * 3.访问根节点
  */
  BinarySearchTree.prototype.postOrderTraversal = function (handler) {
  this.postOrderTraversalNode(this.root,handler)
  }
  // 第一次：node -> 3
  // 第一次：node -> 6
  // 第一次：node -> 5
  // 第一次：node -> 8
  // 第一次：node -> 10
  // 第一次：node -> 7
  // 第一次：node -> 12
  BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
    if (node != null) {
      
      // 1.查找node节点的左子节点
      this.postOrderTraversalNode(node.left, handler)
      // 2.查找node节点的右子节点
      this.postOrderTraversalNode(node.right, handler)
      // 3.处理其父节点
      handler(node.key)
    }
  }


  // 3.中续序遍历 *** 升序遍历  **递增的
  /**
   * 1.中序遍历其左子树
   * 2.访问根节点
   * 3.中序遍历其右子树
  */
  BinarySearchTree.prototype.midOrderTraversal = function (handler) {
  this.midOrderTraversalNode(this.root,handler)
  }
  // 第一次：node -> 3
  // 第一次：node -> 5
  // 第一次：node -> 6
  // 第一次：node -> 7
  // 第一次：node -> 8
  // 第一次：node -> 9
  // 第一次：node -> 10
  BinarySearchTree.prototype.midOrderTraversalNode = function (node, handler) {
    if (node != null) {     
      // 1.查找node节点的左子节点
      this.midOrderTraversalNode(node.left, handler)
      // 2.处理node节点
      handler(node.key)
      // 3.查找node节点的右子节点
      this.midOrderTraversalNode(node.right, handler)
      
    }
  }

  // 获取最小值
  BinarySearchTree.prototype.min = function () {
    // 获取根节点
    var node = this.root
    // 依次向右不断的查找，知道节点为null
    var key = null
    while (node !== null) {
      key = node.key
      node = node.left
    }
    return key
  }

  // 获取最大值
  BinarySearchTree.prototype.max = function () {
    var node = this.root
    var key = null 
    while (node !== null) {
      // console.log(node)
      key = node.key
      node = node.right
    }
    return key
  }

  // 5.1 搜索特定的值****递归版
  // 能用递归的，几乎都可以使用循环实现**********
  BinarySearchTree.prototype.search = function (key) {
    return this.searchNode(this.root,key)
  }
  BinarySearchTree.prototype.searchNode = function (node, key) {
    // 1.如果传入的node为null，那么就退出递归
    if (node === null) {
      return false
    }
    // 2. 判断node节点的值和传入的key的大小
    if (node.key > key) { // 2.1 传入的key较小，向左边继续查找
      return this.searchNode(node.left,key)
    } else if(node.key < key){ //2.2 传入的key较大，向右边继续查找
      return this.searchNode(node.right,key)
    } else { // 2.3 相同，说明找到了key
      return node  // 返回查找到的节点
    }
    //3. 没有查找到，返回false
    return false
  }

   // 5.2 搜索特定的值****循环迭代版
  BinarySearchTree.prototype.searchWhile = function (key) {
    // 1.获取根节点
    var node = this.root
    // 2.循环搜索key
    while (node != null) {
      if (key < node.key) {
        node = node.left
      } else if (key > node.key) {
        node = node.right
      } else {
        return node  // 返回查找到的节点
      }
    }
    //3. 没有查找到，返回false
    return false
  }

  // 6 删除操作
  /**
   * 共有3中情况
   * 1. 没有子节点 （很简单）
   * 2. 有一个子节点（相对简单）
   * 3. 有两个子节点（很复杂）
   * 删除节点的必要操作
   * 1. 先找到要删除的节点，如果没有找到，不需要删除
   * 2. 找到要删除的节 点，那么，就可以考虑以上三种情况了
  */
  // 删除节点的共同操作
  BinarySearchTree.prototype.remove = function (key) {
    // 1. 寻找要删除的节点
    // 1.1 定义变量，保存一些信息
    var current = this.root
    var parent = this.root
    var isLeftChild = true

    // 2. 开始寻找删除的节点
    while (current.key !== key) {
      parent = current
      if (key < current.key) { // 向左继续查找
        isLeftChild = true
        current = current.left
      } else { // 向右继续查找
        isLeftChild = false
        current = current.right
      }

      // 如果发现current已经指向null(已经是叶子节点了) ，那么说明没有找到要删除的数据
      if (current === null) {
        return false
      }
    }

    //  2. 根据对应的情况删除节点
    // 找到了current.key == key
    // 2.1 删除的节点是叶子节点(没有子节点)
    if (current.left == null && current.right == null) {
      if (current == this.root) { // 当前节点为根节点
        this.root = null
      } else if (isLeftChild) { // 当前节点为父节点的左节点
        parent.left = null
      } else { // 当前节点为父节点的右节点
        parent.right = null 
      }
    }

    // 2.2 删除的节点有一个子节点
    else if (current.right == null) {  // 当前节点没有右子节点
      if (current == this.root) {      // 当前节点是根节点
        this.root = current.left // 删除原来的根节点，将当前节点的左节点作为新的根节点
      } else if (isLeftChild) { // 查询结果显示，当前节点为其父节点的左子节点
        parent.left = current.left  // 重新赋值操作：当前节点的父节点的左子节点，重新赋值，等于当前节点的左子节点
      } else {                  // 查询结果显示，当前节点为其父节点的右子节点
        parent.right = current.left // 重新赋值操作：当前节点的父节点的右子节点，重新赋值，等于当前节点的左子节点
      }
    } else if (current.left == null) { // 当前节点没有左子节点
      if (current == this.root) {
        this.root = current.right
      } else if (isLeftChild) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    }

    // 2.3 删除的节点有两个子节点****使用后继的方式，还有另外一种方式，前驱
    else {
      // 1.获取后继节点
      var successor = this.getSuccssor(current)

      // 2.判断是否为根节点
      if (current == this.root) {
        this.root = successor
      } else if (isLeftChild) {
        parent.left = successor      
      } else {
        parent.right = successor
      }

      // 3.将删除节点的左子树 = current.left
      successor.left = current.left
    }

  }

  // 找后继的方法
  BinarySearchTree.prototype.getSuccssor = function (delNode) {
    // 1.定义变量，保存找到的后继
    var successor = delNode
    var current = delNode.right
    var successorParent = delNode

    // 2.循环查找
    while (current != null) {
      successorParent = successor
      successor = current
      current = current.left
    }

    // 3.判断虚招的后继节点是否直接就是delNode的right节点
    if (successor != delNode.right) {
      successorParent.left = successor.right
      successor.right = delNode.right
    }

    return successor
  }
  


}

// 测试代码
// 1 创建BinarySearchTree
var bst = new BinarySearchTree()

// 2 插入数据
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)  // 后来新插入的
// bst.insert()

// 3. 测试遍历
// 3.1 先序遍历  根 -> 左子节点 -> 右子节点
// var resultPreString = ''
// bst.preOrderTraversal(function (key) {
//   resultPreString += key + ' '
// })
// console.log('中序遍历结果：',resultPreString)


// 3.2 中序遍历  根 -> 左子节点 -> 右子节点
// var resultInString = ''
// bst.midtOrderTraversal(function (key) {
//   resultInString += key + ' '
// })
// console.log('中序遍历结果：', resultInString)


// 3.3 后序遍历  根 -> 左子节点 -> 右子节点
var resultPostString = ''
bst.postOrderTraversal(function (key) {
  resultPostString += key + ' '
})
console.log('删除之前的****后序遍历结果：', resultPostString)

// 4.1 最小值
// var min = bst.min()
// console.log('最小值：',min)
// 4.2 最大值
// var max = bst.max()
// console.log('最大值：',max)

// 5.1 测试搜索方法***递归版
// console.log(bst.search(25))
// console.log(bst.search(24))
// console.log(bst.search(2))
// 5.2 测试搜索方法***循环版
// console.log(bst.search(25))
// console.log(bst.search(24))
// console.log(bst.search(2))

// 6 测试删除方式
bst.remove(9)
bst.remove(7)
bst.remove(15)
resultPostString = ''
bst.postOrderTraversal(function (key) {
  resultPostString += key + ' '
})
console.log('删除之后的****后序遍历结果：', resultPostString)








