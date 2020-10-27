
// 计数排序是一种特殊的桶排序
// 时间复杂度 O(n+k)
// 空间复杂度 O(n+k)
function counting_sort (A) {
  const max = Math.max(...A)
  // 累计数组
  const B = Array(max + 1).fill(0)
  // 结果数组
  const C = Array(A.length)
  // 累计位递增
  A.forEach((_, i) => B[A[i]]++)
                   //A [ 5, 4, 3, 2, 1]
  // console.log(B) // [ 0, 1, 1, 1, 1, 1 ]
                   //A [12, 8, 3, 2, 5, 4, 4, 8, 9, 4, 12]
  // console.log(B) // [0, 0, 1, 1, 3, 1, 0, 0, 2, 1, 0, 0, 2]
  // 累计求和
  for (let i = 1; i < B.length; i++){
    B[i] = B[i-1] + B[i]
  }
                 // [ 0, 0, 1, 1, 3, 1, 0, 0, 2, 1, 0, 0, 2]
  // console.log(B) // [ 0, 0, 1, 2, 5, 6, 6, 6, 8, 9, 9, 9, 11]
  // 结果取出
  for (let i = 0; i < A.length; i++){
    console.table('B',B)
    const p = B[A[i]] - 1 // 回写位置
    B[A[i]]-- // 新回写位置
    C[p] = A[i] // 回写结果
    console.log(i, 'p', p, 'A[i]', A[i], 'B[A[i]]', B[A[i]])
    console.table('A',A)
    console.table('C',C)
  }
  return C
}

// console.log(counting_sort([5,4,3,2,1]))
console.log(counting_sort([12, 8, 3, 2, 5, 4, 4, 8, 9, 4, 12]))