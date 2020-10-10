// 桶排序

// 插入排序参考资料  https://segmentfault.com/a/1190000015489767
function insertion_sort (arr) {
  let length = arr.length;
  for(let i = 1; i < length; i++) {
    let temp = arr[i];
    let j = i;
    for(; j > 0; j--) {
      if(temp >= arr[j-1]) {
        break;      // 当前考察的数大于前一个数，证明有序，退出循环
      }
      arr[j] = arr[j-1]; // 将前一个数复制到后一个数上
    }
    arr[j] = temp;  // 找到考察的数应处于的位置
  }
  return arr;
}
// example
let arr = [2,5,10,7,10,32,90,9,11,1,0,10]
console.log(insertion_sort(arr));

function bucket_sort (A, K, S) {
  const buckets = Array.from({length:K},()=>[])
  // 放入桶中
  for (let i = 0; i < A.length; i++){
    const index = ~~(A[i]/S)
    buckets[index].push(A[i])
  }
  // 排序每只桶
  for (let i = 0; i < buckets.length; i++){
    insertion_sort(buckets[i])
  }
  // 取出数据
  return [].concat(...buckets)
}

const A = [29,25,3,49,9,37,21,43]
console.log(bucket_sort(A))