// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247483932&idx=5&sn=198e5823c7d5e1c3a7f856c68b631cfd&chksm=ea911a4cdde6935ad8e95eea498ecd263a2de3cd46c598eec0e4828ffef50f3c7ab753034bd3&scene=21#wechat_redirect
// 通关：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/solution/122mai-mai-gu-piao-zui-jia-shi-ji-by-zhu-wen-long-/

/**
 * 第122题：给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 * 注意你不能在买入股票前卖出股票。
 * 
 * 示例 1:
输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
*/

const prices = [7,1,5,3,6,4]

const maxProfit = prices => {
  let result = 0
  for (let i = 1; i < prices.length; i++){
    if (prices[i] - prices[i - 1] > 0) {
      result += prices[i] - prices[i - 1]
    }
  }
  console.log(result)
  return result
}

maxProfit(prices)