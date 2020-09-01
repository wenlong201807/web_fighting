// const Koa = require('koa');
const Koa = require('./src/application');
const app = new Koa();

// app.use(async (ctx, next) => {
//   console.log(1)
//   await next();
//   console.log(5)
// });

// app.use(async (ctx, next) => {
//   console.log(2)
//   await next();
//   console.log(4)

// });

// app.use(async ctx => {
//   // await next(); // koa源码以处理报错结束next is not defined
//   console.log(3)
//   // await next(); // 后面没有东西了，如何回去
//   // koa源码以处理报错结束next is not defined
//   ctx.body = 'Hello World666'
  
// });


app.context.echoData = function (errno = 0, data = null, errmsg = '') {
  this.res.setHeader('Content-type', 'application/json;charset=utf-8');
  this.body = {
    errno,
    data,
    errmsg,
  };
};
app.use(async (ctx) => {
    console.log('ctx:',ctx);
  if (ctx.query.name !== undefined) {
    let data = 'heelo' + ctx.query.name;
    ctx.echoData(0, data, '成功');
  } else {
    ctx.echoData(1001, '', '参数确实');
  }
});



app.listen(3000, () => {
  console.log('项目启动成功。。。')
});