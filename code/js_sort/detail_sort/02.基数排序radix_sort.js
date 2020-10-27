
/**
 * 基数排序
 * 非比较型排序算法
 * 按照相同位有效数字的值 分组排序整数
 *  time O(wn)
 *  space O(w+n)
 * 此排序算法要求  
 * 1.维持当前顺序  比较位置相同
 * 2.排序         比较位置不同
*/

function radix_sort (A) {
  const max = Math.max(...A)
  const buckets = Array.from({ length: 10 }, () => [])
  // console.log(buckets) // [ [], [], [], [], [],[], [], [], [], [] ]
  // 有效位数
  let m = 1
  while (m < max) { // w 次
    // 将数组放入桶中
    A.forEach(number => { // n 次
      
      /**
       * 基数排序核心点
       * 如何取得某一位数字
       * 6789 % 1000 = 789
       * 789 / 100 = 7.89
       * Math.floor(7.89) = 7
      */
      const digit = ~~((number%(m*10))/m)
      buckets[digit].push(number)
    })

    console.log(buckets)
    // 从桶中取出元素
    let j = 0
    buckets.forEach(bucket => { // n 次
      while (bucket.length > 0) {
        A[j++] = bucket.shift()
      }
    })
    // 下一个位置
    m*=10
  }
}

const A = [10,200,13,12,7,88,91,24]
radix_sort(A)
console.log(A) // [7, 10, 12, 13, 24, 88, 91, 200]