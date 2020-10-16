// 参考资料 https://www.cnblogs.com/echolun/p/13328927.html

// 层序遍历满足从上到下，从左到右一层一层遍历的顺序，以简单的二叉树为例：

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];

  function traversal (root, depth) {
    if (root !== null) {
      if (!res[depth]) {
        res[depth] = [];
      };
      res[depth].push(root.val)
      if (root.left) {
        traversal(root.left, depth + 1);
      };
      if (root.right) {
        traversal(root.right, depth + 1);
      };
    };
  };
  traversal(root, 0);
  return res;
};


let root = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    }
  }
}
console.log(levelOrder(root)) // [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
console.table(levelOrder(root))
let result = [
  [3],
  [9, 20],
  [15, 7]
]