
/**
 * 题解参考：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484108&idx=1&sn=df9e7f64bbeb302a1e1117c4997f33a2&chksm=ea911a9cdde6938a0644f258acd122564c92e6c4f2289cdd9328f1625f7aaa5921ddbe2187f6&scene=21#wechat_redirect
 * 自解答案：https://leetcode-cn.com/problems/sliding-window-maximum/solution/239hua-dong-chuang-kou-by-zhu-wen-long-2/
*/
// const nums = [7, 2, 4]
// const k = 2
const nums = [1, -1]
const k = 1
// const nums = [1, 3, -1, -3, 5, 3, 6, 7]
// const k = 3

// 解法一，两层for循环// 滑动窗口
const maxSlidingWindow1 = (nums, k) => {
  console.log('initNums:', nums, Number.MAX_VALUE)
  let len = nums.length;
  let result = []
  if (len * k == 0) return 0;
  if (k === 1) return nums

  for (let i = 0; i < len - k + 1; i++) {
    let curMax = Number.MIN_VALUE
    for (let j = i; j < i + k; j++) {
      curMax = Math.max(curMax, nums[j]);
    }
    result[i] = curMax
  }
  return result;
}

// console.log(maxSlidingWindow1(nums, k))

// 解法二 // 双端队列
// https://leetcode-cn.com/problems/sliding-window-maximum/solution/239-hua-dong-chuang-kou-zui-da-zhi-by-zhu-wen-long/
const maxSlidingWindow2 = (nums, k) => {
  let len = nums.length
  if (len === 0) {
    return []
  }
  //用切片模拟一个双端队列
  let queue = []
  let result = []
  for (let i = 0; i < len; i++) {

    if (i >= k && nums[i - k] == queue[0]) {
      //维护队列，保证其头元素为当前窗口最大值
      // (避免一种常见情况：上一次的最大值，在上一次的滑动窗口左侧的一个值，刚好他是最大的，此时，在进入下一个滑动窗口的时候，需要删除这个数字)
      queue.splice(0,1)
    }

    while (i > 0 && (queue.length > 0) && nums[i] > queue[queue.length - 1]) {
      //队列中的数字，可能是当前滑动窗口的任何一个值，从队列中的最后一个值开始，依次比较，尽可能把小的数字删除
      queue.splice(queue.length - 1,1)
    }

    //将当前元素放入queue中
    queue.push(nums[i])
    
    if (i >= k - 1) {
      //放入结果数组
      result.push(queue[0])
    }
  }

  return result
}
console.log(maxSlidingWindow2(nums, k))


