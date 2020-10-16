// 参考资料 https://www.cnblogs.com/echolun/p/13328927.html

// 后序遍历满足左子树=>右子树=>根节点的顺序进行查询，还是从简单二叉树开始：

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  let res = [];
  // 遍历函数
  function traversal(root) {
      if (root !== null) {
          if (root.left) {
              // 递归遍历左子树
              traversal(root.left);
          };
          if (root.right) {
              // 递归遍历右子树
              traversal(root.right);
          };
          // 访问根节点的值
          res.push(root.val);
      };
  };
  traversal(root);
  return res;
};


let root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  }
}
console.log(postorderTraversal(root)) // [ 3, 2, 1 ]