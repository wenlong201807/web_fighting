// 参考资料  https://www.jb51.net/article/110454.htm

//今天学习了下二叉树算法，总结在这里
//1全局变量 binary Tree =bt
//1.1 node
function Node () {        //bt节点
  this.text = '';       //节点的文本
  this.leftChild = null;    //节点的左孩子引用
  this.rightild = null;     //节点右孩子引用
}
//1.2 二叉树装载的字符串
var strText = "";
var charecters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var len = charecters.length;        //数组的长度
var nodes = new Array();          //创建一个临时数组，用于存放二叉树节点
//循环创建二叉树节点存放到数组中
for (var i = 0; i < len; i++) {
  var node = new Node();
  node.text = charecters[i];
  nodes.push(node);
}
var root = nodes[0];
//1.3 栈
function Stack () {
  var stack = new Array();        //存放栈的数组
  //压栈
  this.push = function (o) {
    stack.push(o);
  };
  //出栈
  this.pop = function () {
    var o = stack[stack.length - 1];
    stack.splice(stack.length - 1, 1);
    return o;
  };
  //检查栈是否为空
  this.isEmpty = function () {
    if (stack.length <= 0) {
      return true;
    }
    else {
      return false;
    }
  };
}
//使用方式如下
var stack = new Stack();
stack.push(1);    //现在栈中有一个元素
stack.isEmpty();   //false , 栈不为空
//alert(stack.pop()); //出栈, 打印1
stack.isEmpty();   //true, 此时栈为空，因为在调用了stack.pop()之后元素出栈了，所以为空
//2.1递归实现：
function buildBt1 (node, i) {
  var leftIndex = 2 * i + 1,             //左孩子节点的索引
    rightIndex = 2 * i + 2;             //右孩子节点的索引
  if (leftIndex < charecters.length) {       //判断索引的长度是否超过了charecters数组的大小
    var childNode = new Node();         //创建一个新的节点对象
    childNode.text = charecters[leftIndex];   //给节点赋值
    node.leftChild = childNode;         //给当前节点node加入左孩子节点
    buildBt1(childNode, leftIndex);      //递归创建左孩子
  }
  if (rightIndex < charecters.length) {      //同上
    var childNode = new Node();
    childNode.text = charecters[rightIndex];
    node.rightChild = childNode;
    buildBt1(childNode, rightIndex);
  }
}
//2.2非递归实现
function buildBt2 () {
  index = 0;               //索引从0开始
  //循环建立二叉树子节点的引用
  while (index < len) {
    var leftIndex = 2 * index + 1,       //当前节点左孩子索引
      rightIndex = 2 * index + 2;       //当前节点右孩子索引
    //给当前节点添加左孩子
    nodes[index].leftChild = nodes[leftIndex];
    //给当前节点添加右孩子
    nodes[index].rightChild = nodes[rightIndex];
    index++;
  }
}
//3遍历
//3.1.1先序递归遍历
function firstIteration (node) {
  if (node.leftChild) {          //判断当前节点是否有左孩子
    firstIteration(node.leftChild);  //递归左孩子
  }
  if (node.rightChild) {         //判断当前节点是否有右孩子
    firstIteration(node.rightChild);  //递归右孩子
  }
}
//递归遍历二叉树
firstIteration(root);
//3.1.2先序普通遍历
function notFirstIteration (node) {
  var stack = new Stack(),         //开辟一个新的栈对象
    resultText = '';           //存放非递归遍历之后的字母顺序
  stack.push(root);            //这个root在上面非递归方式构建二叉树的时候已经构建好的
  var node = root;
  resultText += node.text;
  while (!stack.isEmpty()) {
    while (node.leftChild) {       //判断当前节点是否有左孩子节点
      node = node.leftChild;      //取当前节点的左孩子节点
      resultText += node.text;     //访问当前节点
      stack.push(node);        //将当前节点压入栈中
    }
    stack.pop();             //出栈
    node = stack.pop().rightChild;    //访问当前节点的兄弟节点（右孩子节点）
    if (node) {              //当前节点的兄弟节点不为空
      resultText += node.text;     //访问当前节点
      stack.push(node);        //将当前节点压入栈中
    }
    else {                //当前节点的兄弟节点为空
      node = stack.pop();       //在回溯到上一层
    }
  }
}
//非递归先序遍历
//  notFirstIteration(root);
//3.2.1中序递归遍历
function btIteration21 (node) {
  //访问左节点
  if (node.leftChild) {
    if (node.leftChild.leftChild) {
      btIteration21(node.leftChild);
    }
    else {
      strText += node.leftChild.text;
    }
  }
  //访问根节点
  strText += node.text;
  //访问右节点
  if (node.rightChild) {
    if (node.rightChild.leftChild) {
      btIteration21(node.rightChild);
    }
    else {
      strText += node.rightChild.text;
    }
  }
}
//测试区
//2.1.1测试递归实现
var node = new Node();
node.text = charecters[0];
buildBt1(node, 0);  //索引i是从0开始构建
btIteration21(node);

console.log('strText:', strText)