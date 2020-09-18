//  DP——01背包问题使用迭代和动态规划（超详细——小白入门）
// https://blog.csdn.net/jushang0235/article/details/78841915?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param


let maxWeight = 5
let packages = [
  { id: 1, weight: 1, profit: 200 },
  { id: 2, weight: 3, profit: 240 },
  { id: 3, weight: 2, profit: 140 },
  { id: 4, weight: 5, profit: 150 },
]

const packageMaxValue = (packages, maxWeight) => {
  let maxValue = -1 << 31 // 默认为最小值

  let len = packages.length - 1
  for (let i = len; i >= 0; i--) {
    console.log(i)
    let curItem = packages[i]
  }

  return maxValue
}

// packageMaxValue(packages, maxWeight)