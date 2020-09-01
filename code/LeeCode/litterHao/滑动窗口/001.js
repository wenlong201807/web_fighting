
/**
 * 小浩算法公众号
 * https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484605&idx=1&sn=fa8e3c44c740e3ef83380d4e5dab7cbb&chksm=ea911ceddde695fb0c0d9508b72832d17a14e6deec0b2241b1b97143f5c09a64bfdcd5e637ab&scene=21#wechat_redirect
 * 滑动窗口第一篇
 * https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/jian-zhi-offer57-by-zhu-wen-long-2/
*/

const target = 9
const findContinuousSequence = (target) => {
  let result = []
  let i = 1
  let j = 1
  let win = 0
  let arr = []
  for (let k = 0; k < target; k++) {
    arr[k] = k + 1
  }
  console.log('initArr:', arr)

  while (i <= target / 2) {
    console.log('start:', win, i, j)
    if (win < target) {
      win += j
      j++
    } else if (win > target) {
      console.log('偏大:', win, i)
      win -= i
      i++
    } else {
      let eachArr = arr.slice(i - 1, j - 1)
      result.push(eachArr)
      win -= i
      i++
    }
    console.log(win, i, j)
  }
  return result
}
console.log(findContinuousSequence(target))