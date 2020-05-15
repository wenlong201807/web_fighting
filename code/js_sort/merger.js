/**
 * 归并排序
 * https://mp.weixin.qq.com/s?__biz=MzA5NTcxOTcyMg==&mid=2247484451&idx=1&sn=a4acf836d74ceb6adbded954319182d9&chksm=90ba5c66a7cdd570a707d00a092621cf8a006d1da8eca6c05a4fa8a4dd9c9547c1160bafd1b3&mpshare=1&scene=1&srcid=&sharer_sharetime=1589337128605&sharer_shareid=cfcd208495d565ef66e7dff9f98764da&key=f01754a5c69cbc0496d14b6d68e35dd35f126b87e54914b0474cb5886172a59dc9767bfeb640d9feeb87e56469909cc6cd299ae1f1f9e296674df283e39be787d781c433546d583dcaa77e6831d0c87e&ascene=1&uin=MTg0NzI0OTQwMA%3D%3D&devicetype=Windows+10+x64&version=62090070&lang=zh_CN&exportkey=AYfv8UYNkzcYhwZ0OWxL0yQ%3D&pass_ticket=rnt4vZOKU0%2FSh48pEkkaJwz7alrzkcXdovftkjwU9taf9QKmVSNz07Vp1LGPHxGz
 * 
*/

/**
 * 归并函数
 * @param arr
 * @param L 数组的起点
 * @param M 数组的分割点
 * @param R 数组的终点
*/

const merger = function (arr, L, M, R) {
  // 左边数组大小贺右边数组大小
  let left_size = M - L
  let right_size = R - M + 1
  // 声明左边数组贺右边数组
  let leftArr = new Array(left_size)
  let rightArr = new Array(right_size)
  let i, j, k

  // 填充左数组(从L开始到M结束)
  for (i = L; i < M; i++) {
    leftArr[i - L] = arr[i]
  }
  // 填充右数组
  for (i = M; i <= R; i++) {
    rightArr[i - M] = arr[i]
  }

  // 数组合并
  i = 0; j = 0; k = L
  while (i < left_size && j < right_size) {
    if (leftArr[i] < rightArr[j]) {
      arr[k] = leftArr[i]
      i++
      k++
    } else {
      arr[k] = rightArr[j];
      j++;
      k++;
    }
  }
  // 当右边数组到顶部后，左边数组还未到顶部，则将剩余元素放进arr中
  while (i < left_size) {
    arr[k] = leftArr[i];
    i++;
    k++
  }
  // 当左边数组到顶部后，右边数组还未到顶部，则将剩余元素放进arr中
  while (j < right_size) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }

}

// const dataArr = [2,8,9,10,4,5,6,7];
// /*测试合并*/
// merger(dataArr,0,4,7);
//  // 合并后的数据
// console.log(dataArr);


const mergerSort = function (arr,L,R) {
  if(L===R){
      // 数据已经切割完毕
      return false;
  }
  else{
      // 计算中间值(向下取整)
      let M = Math.floor((L + R) / 2);
      // 分割后,把左边的数据进行一次归并排序
      mergerSort(arr,L,M);
      // 对右边的数据进行一次归并排序
      mergerSort(arr,M+1,R);
      // 合并两边的数据
      merger(arr,L,M+1,R)
  }
};

const dataArr = [6,4,3,7,5,1,2];
/*测试排序*/
mergerSort(dataArr,0,dataArr.length - 1);
 // 合并后的数据
console.log(dataArr);
