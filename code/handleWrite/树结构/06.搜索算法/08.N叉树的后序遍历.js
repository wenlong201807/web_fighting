/**
 * 作者：lrjets
链接：https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/solution/yi-tao-quan-fa-shua-diao-nge-bian-li-shu-de-wen--3/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

var postorder = function (root) {
  const res = []
  function traversal (root) {
    if (root !== null) {
      res.push(root.val) // 先序遍历结果 [ 1, 3, 5, 6, 2, 4 ]
      root.children.forEach(child => {
        traversal(child)
      })
      // res.push(root.val) // 后序遍历结果 [ 5, 6, 3, 2, 4, 1 ]
    }
  }
  traversal(root)
  return res
}

let root = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        { val: 5, children: [] },
        { val: 6, children: [] },
      ]
    },
    { val: 2, children: [] },
    { val: 4, children: [] },
  ]
}

console.log(postorder(root))

