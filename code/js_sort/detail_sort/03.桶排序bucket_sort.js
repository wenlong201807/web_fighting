/**
 * 桶排序算法
 * 
*/

function insertion_sort (A) {
  for (let i = 0; i < A.length; i++){
    let p = i - 1
    const x = A[p+1]
    while (p >= 0 && A[p] > x) {
      A[p+1] = A[p]
      p--
    }
    A[p+1] = x
  }
}
const arr = [29, 25, 3, 49, 9, 37, 21, 43]
console.log(insertion_sort(arr))
/**
 * A 需要排序的数组
 * k 桶的数量
 * s 每只桶的大小
 * 返回：排序好的数组
*/
function bucket_sort (A,k,s) {
  const buckets = Array.from({length:k},()=>[]) // 空间复杂度 O(k)
  // 放入桶中
  for (let i = 0; i < A.length; i++){ // 空间复杂度  O(n)
    const index = ~~(A[i]/s)
    buckets[index].push(A[i])
  }
  // 排序每只桶
  for (let i = 0; i < buckets.length; i++){ // 数据平均分配时 O(n) // 数据极端分配时 O(n^2)
    insertion_sort(buckets[i])
  }
  // 取出数据
  return [].concat(...buckets)// 空间复杂度  O(n)
}

const A = [29, 25, 3, 49, 9, 37, 21, 43]
// console.log(bucket_sort(A,5,10)) // [ 3, 9, 21, 25, 29, 37, 43, 49 ]