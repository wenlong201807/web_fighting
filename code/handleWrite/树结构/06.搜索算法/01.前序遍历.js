// 参考资料 https://www.cnblogs.com/echolun/p/13328927.html

// 前序遍历可以说最符合大家阅读树结构的查询顺序，
// 它满足根节点 => 左子树 => 右子树的顺序，我们来看个例子：
// 我们永远先遍历根节点，紧接着判断有没有左子树，
// 如果有接着遍历，而左子树也可以有自己的左子树与右子树，
// 所以我们可以用递归来做到遍历

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [];
  // 遍历函数
  function traversal (root) {
    if (root !== null) {
      // 访问根节点的值
      res.push(root.val);
      if (root.left) {
        // 递归遍历左子树
        traversal(root.left);
      };
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
console.log(preorderTraversal(root)) // [ 1, 2, 3 ]