// 参考资料 https://www.cnblogs.com/echolun/p/13328927.html

// 中序遍历满足左子树=>根节点=>右子树的顺序进行查询，我们还是以简单二叉树为例。

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let res = [];
  // 遍历函数
  function traversal(root) {
      if (root !== null) {
          if (root.left) {
              // 递归遍历左子树
              traversal(root.left);
          };
          // 访问根节点的值
          res.push(root.val);
          if (root.right) {
              // 递归遍历右子树
              traversal(root.right);
          };
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
console.log(inorderTraversal(root)) // [ 1, 3, 2 ]