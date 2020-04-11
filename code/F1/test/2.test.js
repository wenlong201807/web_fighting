// 2.请写出如下输出值，并完成附加题的作答(8分)
// function fn () {
//   console.log(this.length); // undefined ？？
// }
// var yideng = {
//   length: 5,
//   method: function () {
//     "use strict";
//     fn();
//     arguments[0]()  // 2
//   }
// }
// const result = yideng.method.bind(null);
// result(fn, 1);




// 附加题： 
function yideng (a, b, c) {
  console.log('cc',this.length);
  console.log('dd',this.callee.length);
}
function fn (d) {
  console.log('aa',d,arguments)
  arguments[0](10, 20, 30, 40, 50);
}
fn(yideng, 10, 20, 30);