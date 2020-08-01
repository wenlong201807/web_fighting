[
  async (ctx, next) => {
    console.log(1)
    await next();
    console.log(5)
  },
  async (ctx, next) => {
    console.log(2)
    await next();
    console.log(4)
  },
  async ctx => {
    console.log(3)
    ctx.body = 'Hello World';
  }
]
  
  // 实现  1，2，3，4，5的执行顺序
  // 使用函数组合解了一个偏应用函数
[
  async (ctx, next) => {
    console.log(1)
    await (async (ctx, next) => {
      console.log(2)
      await (async ctx => {
        console.log(3)
        ctx.body = 'Hello World';
      })();
      console.log(4)
    })();
    console.log(5)
  }
]