// const Koa = require('koa');
const Koa = require('./src/application');

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(1)
  await next();
  console.log(5)
});

app.use(async (ctx, next) => {
  console.log(2)
  await next();
  console.log(4)

});

app.use(async ctx => {
  // await next();
  console.log(3)
  ctx.body = 'Hello World';
});

app.listen(3000);