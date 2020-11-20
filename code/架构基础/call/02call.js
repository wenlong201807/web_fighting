function fn1 () {
  console.log(1)
}

function fn2 () {
  console.log(2)
}

// 执行当前函数，当前函数指的是  call前面的函数，call第一个参数只是作为fn1的上下文
// fn1.call(fn2) // 1

// 内部原理***简易版
// Function.prototype.call = function (context) {
//   this() // fn2()
// }

// 有两个以上的call ，那么执行括号内的函数
fn1.call(fn2)  // 1 
fn1.call.call(fn2)  // 2
fn1.call.call.call(fn2)  // 2
