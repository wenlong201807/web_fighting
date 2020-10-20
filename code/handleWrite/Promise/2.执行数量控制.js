// 参考资料 https://www.yuque.com/docs/share/75b3ca8c-3fe1-4acd-a6b2-b681a1611f6b

// 基于Promise的执行数量控制

// class PromiseLimit<T> {
//   constructor(private limit: number) {}
  
//   waitForFree() {}
  
//   runTask(task: () => Promise<T>)
// }

// async function main() {
//   let limit = new PromiseLimit<void>(3)
//   for (let i = 0; i < 1000; i++) {
//     await limit.waitForFree()
//     limit.runTask(async () => {
//       /// 耗时任务，PromiseLimit会保证最多同时运行三个，第四个会被卡在waitForFree里
//       /// 一旦有任务完成，后续任务自动执行
//     })
//   }
// }









