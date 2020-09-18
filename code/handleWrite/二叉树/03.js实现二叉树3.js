// 参考资料 https://www.cnblogs.com/cc-freiheit/p/10368078.html

// 用 js 实现的二叉树数据结构，
// 完成 先 / 中 / 后 序遍历、
// 查找最 大 / 小 值、
// 查找特定值以及删除节点(虽然没太理解)的操作。

class BNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.values = new Array();
  }

  /**
   * insert 插入节点
   * @param {[ type ]} val [description]
   * @return {[ void ]}  [description]
   */
  insert (val) {
    this.values.push(val);
    let node = new BNode(val);
    if (!this.root) {
      this.root = node;
    } else {
      this._insertNode(this.root, node);
    }
  }

  /**
   * _insertNode 递归插入节点
   * @param  {[ BinaryNode ]} node    [父节点]
   * @param  {[ BinaryNode ]} newNode [新子节点]
   */
  _insertNode (node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  /**
   * [inOrderTraverse 中序遍历]
   * @return {[ Array ]} [description]
   */
  inOrderTraverse () {
    let result = new Array();
    this._inOrderTraverseNode(this.root, node => {
      result.push(node.value);
    })
    return result;
  }

  /**
   * [_inOrderTraverseNode 中序遍历递归]
   * @param  {[ BinaryNode ]}   node     [当前节点]
   * @param  { Function } callback [回调函数]
   * @return {[ void ]}            [description]
   */
  _inOrderTraverseNode (node, callback) {
    if (node) {
      this._inOrderTraverseNode(node.left, callback);
      callback(node);
      this._inOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * [preOrderTraverse 先序遍历]
   * @return {[ Array ]} [description]
   */
  preOrderTraverse () {
    let result = new Array();
    this._preOrderTraverseNode(this.root, node => {
      result.push(node.value);
    })
    return result;
  }

  /**
   * [_preOrderTraverseNode 先序遍历递归]
   * @param  {[ BinaryNode ]}   node     [当前节点]
   * @param  { Function } callback [回调函数]
   * @return {[ Void ]}            [description]
   */
  _preOrderTraverseNode (node, callback) {
    if (node) {
      callback(node);
      this._preOrderTraverseNode(node.left, callback);
      this._preOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * [postOrderTraverse 后序遍历]
   * @return {[Array]} [description]
   */
  postOrderTraverse () {
    let result = new Array();
    this._postOrderTraverseNode(this.root, node => {
      result.push(node.value);
    })
    return result;
  }

  /**
   * [_postOrderTraverseNode 后序遍历递归]
   * @param  {[BinaryNode]}   node     [当前节点]
   * @param  {Function} callback [回调函数]
   * @return {[type]}            [description]
   */
  _postOrderTraverseNode (node, callback) {
    if (node) {
      this._postOrderTraverseNode(node.left, callback);
      this._postOrderTraverseNode(node.right, callback);
      callback(node);
    }
  }

  /**
   * [remove 移除指定值]
   * @param  {[*]} val [目标值]
   * @return {[ Void ]}     [description]
   */
  remove (val) {
    this.root = this._removeNode(this.root, val);
  }

  /**
   * [_removeNode 移除节点递归]
   * @param  {[BinaryNode]} node [当前节点]
   * @param  {[*]} val  [要移的除节点值]
   * @return {[BinaryNode]}      [当前节点]
   */
  _removeNode (node, val) {
    if (node === null) return null;

    // 递归寻找目标节点
    if (val < node.value) {
      this._removeNode(node.left, val);
      return node;
    }

    if (val > node.value) {
      this._removeNode(node.right, val);
      return node;
    }

    // 找到目标节点
    if (val === node.value) {
      // 是叶子节点 （left\right没有节点）
      if (node.left === null && node.right === null) {
        // 赋值 null, 表示删除
        node = null;
        return node;
      }

      // 只有一个子节点
      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }

      // 左右子节点都有
      let min_node = this._findMinNode(node);
      node.value = min_node.value;
      node.right = this._removeNode(node.right, min_node.value);
      return node;
    }
  }

  /**
   * [_findMinNode 查找最小节点]
   * @param  {[BinaryNode]} node [当前节点]
   * @return {[BinaryNode]}      [最小的节点]
   */
  _findMinNode (node) {
    while (node && node.left) {
      node = node.left;
    }
    return node;
  }

  /**
   * [search 检索]
   * @param  {[ * ]} val [被检索值]
   * @return {[ Boolean ]}     [表示是否存在]
   */
  search (val) {
    let values = this.inOrderTraverse();
    return values.includes(val);
  }

  /**
   * [min 返回最小值]
   * @return {[ type ]} 最小值
   */
  min () {
    let values = this.inOrderTraverse();
    return values[0]
  }

  /**
   * [max 返回最小值]
   * @return {[ type ]} 最大值
   */
  max () {
    let values = this.inOrderTraverse();
    return values[values.length - 1]
  }

  /**
   * [isEmpty 是否为空二叉树]
   * @return {Boolean}
   */

  isEmpty () {
    return this.root === null;
  }

  /**
   * [breadthFirstSearch 广度优先遍历]
   * @return {[Array]} [遍历后结果]
   */
  breadthFirstSearch () {
    let result = new Array();
    let content = new Array();
    let current_node = null;
    content.push(this.root);
    while (content.length) {
      current_node = content.shift();
      result.push(current_node.value);
      if (current_node.right) {
        content.push(current_node.right);
      }
      if (current_node.left) {
        content.push(current_node.left);
      }
    }
    return result;
  }
}