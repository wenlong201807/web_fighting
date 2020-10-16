// 参考资料 https://www.cnblogs.com/echolun/p/13328927.html

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let ans = 0;
  if (root === null) {
    return ans;
  };
  function traversal (root, deepth) {
    // 始终取最大数为最深层级
    ans = Math.max(ans, deepth)
    if (root.left) {
      traversal(root.left, deepth + 1);
    };
    if (root.right) {
      traversal(root.right, deepth + 1);
    };
  };
  // 从1开始
  traversal(root, 1);
  return ans;
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
console.log(maxDepth(root)) // 3
