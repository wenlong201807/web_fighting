// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484564&idx=1&sn=4fe97e5d66b93457900a1c326e223bd5&chksm=ea911cc4dde695d229134babe3bf686391f321741ded996886f11ec1fb16edf070cad95d16e7&scene=21#wechat_redirect

/**
 * 第6题：将一个给定字符串根据给定的行数，
 * 以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
*/

const s = 'LEETCODEISHIRING'
const numRows = 4

const convert = (s, numRows) => {
  if (numRows === 1)  return s

  let len = s.length
  let resultArr = new Array(numRows).fill('')
  let period = numRows * 2 - 2// 规律可得
  for (let i = 0; i < len; i++){
    let mod = i % period
    if (mod < numRows) {
      resultArr[mod] += '' + s[i]
    } else {
      resultArr[period-mod] += '' + s[i]
    }
  }
  console.log(resultArr,resultArr.join(''))
  return resultArr.join('')
}
convert(s, numRows)