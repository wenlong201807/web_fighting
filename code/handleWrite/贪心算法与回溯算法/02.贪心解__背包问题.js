// 参考资料  https://mp.weixin.qq.com/s?__biz=MzA5NTcxOTcyMg==&mid=2247488826&idx=1&sn=64a692600a5ec7ef85ea9299dd057dee&chksm=90ba4d7fa7cdc469ac2943f5879db127139e7e5cb2d9d3c4a573eb509d63fb1f24d9a676cd1a&mpshare=1&scene=1&srcid=0918wrsNDeDo175JxRJ7O7SB&sharer_sharetime=1600401117802&sharer_shareid=f8d25c6b3b3b5f92cb53a2ecd9878784&key=4598b5ee8f6c4950efb97912c79988b22233240a656646204b6012e95c24ea473ee7b341ba1113ebafd815ef3bead0ae144132f32c2a670c087b5c149071cfad728477358d114d3661e27c14506c87fafb5b7e52924ec4b0daabca471f7440aeb5d81360be0bed5963632c65df8ab10bf391346eefc7945c44b7fdae3e131314&ascene=1&uin=MTg0NzI0OTQwMA%3D%3D&devicetype=Windows+10+x64&version=62090529&lang=zh_CN&exportkey=AZsMAZIVOgNxnhNAUu6VF9s%3D&pass_ticket=0UVwpRD1n%2FIJYdaIfk9hSQ%2BSoforA2mUQrzc9zMwzmYBJikecVqFphU0wPy1wGp1&wx_header=0
// 公众号 图雀社区

/**
 * 贪心算法: 背包问题
 * @param capacity 背包容量
 * @param weights 物品重量
 * @param values 物品价值
 */

// knapSackGreedy(
//   capacity: number,
//   weights: number[],
//   values: number[]
// ): { val: number; compose: ({ dart: boolean; scale: number; id: number } | { dart: boolean; id: number })[] } {
const knapSackGreedy = (capacity, weights, values) => {
  const n = values.length;
  // 存储解决方案
  const compose = [];
  // 已装入背包的物品总重量
  let load = 0;
  // 已装入背包的物品总价值
  let val = 0;
  for (let i = 0; i < n && load < capacity; i++) {
    // 物品可以完整的放入背包
    if (weights[i] <= capacity - load) {
      // 将物品的价值计入背包已装入物品的总价值
      val += values[i];
      // 将物品的重量计入背包已装入物品的总重量
      load += weights[i];
      // 当前物品可以完整放入，将物品编号放入组合方案中
      compose.push({ id: i, dart: false });
    } else {
      // 物品无法完整的放入背包，计算能够装入部分的比例
      const r = (capacity - load) / weights[i];
      // 将计算出的物品价值计入背包已装入物品的总价值
      val += r * values[i];
      // 将物品的重量计入背包已装入物品的总重量
      load += weights[i];
      // 当前物品无法完整放入，将物品编号和可放物品比例放入组合方案中
      compose.push({ id: i, dart: true, scale: r });
    }
  }
  // 返回物品总价值
  return { val: val, compose: compose };
}

const values = [3, 4, 5],
  weights = [2, 3, 4],
  capacity = 6;

console.log('背包结果:', knapSackGreedy(capacity, weights, values))
// 18192641189

