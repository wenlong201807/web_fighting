/**
 * @param {number} rowIndex
 * @return {number[][]}
 * 1.先把三种特殊情况排除
2.重点考虑变动情况
3.考虑左侧的1和右侧的1的特点，（左侧的1 标记为当前行数的第一个，索引值为0；右侧的1，通过找规律发现：每一行的个数与行数相等时的焦点，j=i）
4.核心点：加法计算：当前行i的当前索引j的值，等于 上一行（i-1）的当前行同位置j的值与当前行同位置的前一个位置的值(j-1)的和
5.返回数组即可

作者：zhu-wen-long-2
链接：https://leetcode-cn.com/problems/pascals-triangle/solution/cha-zhao-shu-xue-gui-lu-guan-cha-duo-wei-shu-zu-bi/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
function generate (rowIndex) {
  let arr = []
  if (rowIndex == 0) {
    return [1]
  }
  if (rowIndex == 1) {
    return [1,1]
  }

  let i = 0
  if (rowIndex >= 2) {
    while (i <= rowIndex) {
      let indexArr = []
      for (let j = 0; j <= i; j++) {
        if (j == 0 || j == i) {
          indexArr[j] = 1
        } else {
          // console.log('i:',i,'j:',j)
          // indexArr[j] = 2
          indexArr[j]= arr[i-1][j-1] + arr[i-1][j]
        }
      }
      arr.push(indexArr)
      i = i + 1
    }
    console.log(arr)
    return arr[rowIndex]
  }
};

console.log(generate (2))