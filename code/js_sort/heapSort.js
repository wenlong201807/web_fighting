/**
 * 堆排序函数
 * https://mp.weixin.qq.com/s?__biz=MzA5NTcxOTcyMg==&mid=2247484451&idx=1&sn=a4acf836d74ceb6adbded954319182d9&chksm=90ba5c66a7cdd570a707d00a092621cf8a006d1da8eca6c05a4fa8a4dd9c9547c1160bafd1b3&mpshare=1&scene=1&srcid=&sharer_sharetime=1589337128605&sharer_shareid=cfcd208495d565ef66e7dff9f98764da&key=f01754a5c69cbc0496d14b6d68e35dd35f126b87e54914b0474cb5886172a59dc9767bfeb640d9feeb87e56469909cc6cd299ae1f1f9e296674df283e39be787d781c433546d583dcaa77e6831d0c87e&ascene=1&uin=MTg0NzI0OTQwMA%3D%3D&devicetype=Windows+10+x64&version=62090070&lang=zh_CN&exportkey=AYfv8UYNkzcYhwZ0OWxL0yQ%3D&pass_ticket=rnt4vZOKU0%2FSh48pEkkaJwz7alrzkcXdovftkjwU9taf9QKmVSNz07Vp1LGPHxGz
 * 归并排序与堆排序的时间复杂度都为O(nlogn)
*/

const heapSort = function (tree, n) {
  // 构建堆
  buildHeap(tree,n)
  // 从最后一个节点触发
  for (let i = n - 1; i >= 0; i--){
    // 交换跟节点贺最后一个节点的位置
    swap(tree,i,0)
    // 重新调整堆
    heapify(tree,i,0)
  }
}

/**
 * 1.从一个节点触发
 * 2.从它的左子树贺右子树中选择一个较大值
 * 3.将较大值于这个节点进行位置交换
 * 上述步骤，就是一次heapify的操作
 * 
*/
// n为树的节点数，i为当前操作的节点，(找到这棵树里的最大节点)
const heapify = function (tree, n, i) {
  if (i >= n) {
    return // 结束递归
  }
  // 找到左子树的位置
  let leftNode = 2 * i + 1
  // 找到右子树的位置
  let rightNode = 2 * i + 2
  /**
   * 1.找到左子树贺右子树位置后，必须确保它小于树的总节点数
   * 2.已知当前节点与它的左子树与右子树的位置，找到最大值
  */
  // 设最大值的位置i
  let max = i
  // 如果左子树的值大于当前节点的值，则最大值的位置就是左子树的位置
  if (leftNode < n && tree[leftNode] > tree[max]) {
    max = leftNode
  }
  // 如果右子树的值大于当前节点的值，则最大值的位置就是右子树的位置
  if (rightNode < n && tree[rightNode] > tree[max]) {
    max = rightNode
  }
  /**
   * 1.进行大小比较，如果最大值的位置不是刚开始设的i，则将最大值与当前节点进行位置交换
  */
  if (max !== i) {
    swap(tree,max,i)
    heapify(tree,n,max)
  }
}

// 交换数组位置函数
const swap = function (arr, max, i) {
  [arr[max],arr[i]] = [arr[i],arr[max]]
}

const dataArr = [23,15,34,11,23,4,19,80];
// // 我们假设当前操作节点为数组的0号元素，我们对0号元素进行一次heapify才做
// heapify(dataArr,dataArr.length,0);
// // 打印结果
// console.log(dataArr);


/**
 * 将完全二叉树构建成堆
 * 1.从树的最后一个父节点进行heapify操作
 * 2.树的最后一个父节点 = 树的最后一个子节点的父节点
*/

const buildHeap = function (tree, n) {
  // 最后一个节点的位置， = 数组的长度 - 1
  const lastNode = n - 1
  // 最后一个节点的父节点
  const parentNode = Math.floor((lastNode-1)/2)
  // 从最后一个父节点开始进行heapify操作
  for (let i = parentNode; i >= 0; i--){
    heapify(tree,n,i)
  }
}
// buildHeap(dataArr,dataArr.length);  // 按层级从上到下，从左到右打印
// console.log(dataArr);

heapSort(dataArr,dataArr.length);
console.log(dataArr);