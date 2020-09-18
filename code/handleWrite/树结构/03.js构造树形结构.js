// 参考资料 对象数组转成树结构：https://www.cnblogs.com/lzkwin/p/12143458.html
// 树结构的遍历方式 https://www.jb51.net/article/102393.htm

const data = [
  { id: 56, parentId: 62 },
  { id: 81, parentId: 80 },
  { id: 74, parentId: null },
  { id: 76, parentId: 80 },
  { id: 63, parentId: 62 },
  { id: 80, parentId: 86 },
  { id: 87, parentId: 86 },
  { id: 62, parentId: 74 },
  { id: 86, parentId: 74 },
];

//建立 ID-数组索引映射关系
const idMapping = data.reduce((acc, el, i) => {
  acc[el.id] = i;
  return acc;
}, {});

// console.log('建立 ID-数组索引映射关系', idMapping)
/**
 idMapping = {
  '56': 0,
  '62': 7,
  '63': 4,
  '74': 2,
  '76': 3,
  '80': 5,
  '81': 1,
  '86': 8,
  '87': 6
 }
*/

//构造树形结构
let root;
data.forEach(el => {
  // 判断根节点
  if (el.parentId === null) {
    root = el;
    return;
  }
  // 用映射表找到父元素
  const parentEl = data[idMapping[el.parentId]];
  // 把当前元素添加到父元素的`children`数组中
  parentEl.children = [...(parentEl.children || []), el];
});

console.log('构造树形结构', root);

