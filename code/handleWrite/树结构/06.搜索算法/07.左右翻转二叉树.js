// https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/solution/yi-tao-quan-fa-shua-diao-nge-bian-li-shu-de-wen--3/


var invertTree = function (root) {
  function traversal (root) {
    if (root === null) {
      return null
    } else {
      [root.left, root.right] = [traversal(root.right), traversal(root.left)]
      return root
    }
  }
  return traversal(root)
}

let root = {
  val: 3,
  left: {val: 9,left: null,right: null,},
  right: {
    val: 20,
    left: {val: 15,left: null,right: null,},
    right: {val: 7,left: null,right: null,}
  }
}
console.log(invertTree(root))

let reserveRoot = {
  val: 3,
  left: {
    val: 20,
    left: { val: 7, left: null, right: null },
    right: { val: 15, left: null, right: null }
  },
  right: { val: 9, left: null, right: null }
}