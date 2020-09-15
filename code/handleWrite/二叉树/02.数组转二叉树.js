// 参考资料 https://www.cnblogs.com/zxk5625/p/9399324.html

function TreeNode(val) {
  this.value = val;
}

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }
  var mid = parseInt(nums.length / 2);
  var root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  console.log('root数组转二叉树:',root)
  return root;
}

var ss = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.log('ss:',ss);