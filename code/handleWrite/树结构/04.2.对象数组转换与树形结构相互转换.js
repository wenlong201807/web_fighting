// 参考资料 对象数组与树形结构相互转换  https://www.cnblogs.com/liquanjiang/p/11405480.html

// 在工作中经常会遇到树形结构的对象转为数组或者数组转为树形对象的需求，那么如何实现呢？

// 1、首先是要将一个具有树形结构的数组转化为树形结构的对象

// 将一个扁平化的对象数组，转化为树形结构
// 现在有一个对象组成的数组，每个元素有id属性和parent_id属性，根据其id属性和parent_id属性，将其转换为树结构的对象
const arr = [
  {
      id: '1',
      parent_id: 'root',
      name:'abc'
  },
  {
      id: '2',
      parent_id: 'root',
      name:'abc'
  },
  {
      id: '1-1',
      parent_id: '1',
      name:'abc'
  },
  {
      id: '1-2',
      parent_id: '1',
      name:'abc'
  },
  {
      id: '1-1-1',
      parent_id: '1-1',
      name:'abc'
  },
  {
      id: '1-1-2',
      parent_id: '1-1',
      name:'abc'
  },
  {
      id: '1-2-1',
      parent_id: '1-2',
      name:'abc'
  },
  {
      id: '2-1',
      parent_id: '2',
      name:'abc'
  },
  {
      id: '2-2',
      parent_id: '2',
      name:'abc'
  },
  {
      id: '2-1-1',
      parent_id: '2-1',
      name:'abc'
  },
  {
      id: '2-2-1',
      parent_id: '2-2',
      name:'abc'
  },
  {
      id: '2-2-1-1',
      parent_id: '2-2-1',
      name:'abc'
  },
  {
      id: '2-2-1-2',
      parent_id: '2-2-1',
      name:'abc'
  },
   {
      id: '2-2-1-2-1',
      parent_id: '2-2-1-2',
      name:'abc'
  },
  {
      id: '2-3',
      parent_id: '2',
      name:'abc'
  },
  {
      id: '2-3-1',
      parent_id: '2-3',
      name:'abc'
  },
  {
      id: '3',
      parent_id: 'root',
      name:'abc'
  },   
];

// 将这样一个数组，变成能够以树形展示的对象

//先将数组中的每一个节点放到temp对象中（创建set）
//即数组中有{id: '2-3', parent_id: '2',...}这样一个节点，需要将他放到temp中变成 '2-3': {id: '2-3', parent_id: '2',...}这种JSON结构
//直接遍历整个temp对象，通过这句代码   temp[temp[i].parent_id].children[temp[i].id] = temp[i];  
//将当前子节点与父节点建立连接。是因为我们保证了父节点一定在子节点前，
//那么当子节点出现的时候就直接可以用temp[temp[i].parent_id]来查找到父节点这个时候先父节点的children对象中添加一个引用即可。


function buildTree(array,id,parent_id) {
   console.time('123');
   // 创建临时对象
   let temp = {};
   // 创建需要返回的树形对象
   let tree = {};
   // 先遍历数组，将数组的每一项添加到temp对象中
   for(let i in array) {
       temp[array[i][id]] = array[i];
   }

   /*  上面也可以写成
   for(let i=0;i<array.length;i++) {
       temp[array[i][id]] = array[i];
   }
   */

   // 遍历temp对象，将当前子节点与父节点建立连接
   for(let i in temp) {
       // 判断是否是根节点下的项
       if(temp[i][parent_id] !== 'root') {
            if(!temp[temp[i][parent_id]].children) {
                temp[temp[i][parent_id]].children = new Array();
            }
            temp[temp[i][parent_id]].children.push(temp[i]);
       } else {
           tree[temp[i][id]] = temp[i];
       }
   }

   /*  上面也可以写成
   for(let i=0;i<array.length;i++) {
       temp[array[i][id]] = array[i];
   }
   */

   console.timeEnd('123');
   return tree;
}

const obj = buildTree(arr, 'id', 'parent_id');
console.log(obj);