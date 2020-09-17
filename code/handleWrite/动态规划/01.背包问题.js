// 参考资料 https://segmentfault.com/a/1190000006082676

// 参考资料2 https://www.cnblogs.com/muamaker/p/9298129.html
// 暂未尝试
// 参考资料3 https://blog.csdn.net/jushang0235/article/details/78841915?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param
// DP——01背包问题使用迭代和动态规划（超详细——小白入门）

function packageMaxValue (weight, value, size) {
  // 省略参数合法性校验
  let bagMatrix = []
  for (let w = 0; w <= size; w++) {
    // js不能直接创建二维数组，所以在此初始化数组
    bagMatrix[w] = []
    for (let j = 0; j < 5; j++) {
      // 背包的容量为0，那么一个东西也装不下，此时的值肯定也是为0
      if (w === 0) {
        bagMatrix[w][j] = 0
        continue
      }
      // 背包的容量小于物品j的重量，那么就没有上述情况a了
      if (w < weight[j]) {
        bagMatrix[w][j] = bagMatrix[w][j - 1] || 0
        continue
      }
      bagMatrix[w][j] = Math.max((bagMatrix[w - weight[j]][j - 1] || 0) + value[j], bagMatrix[w][j - 1] || 0)
    }
  }
  return bagMatrix
}

let weight = [4, 5, 6, 2, 2]
let value = [6, 4, 5, 3, 6]

console.log(packageMaxValue(weight, value, 10))