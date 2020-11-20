function fn1 () {
  // console.log(this)
  console.log(arguments)
}

// fn1()
fn1.call('hello', '1', '2')

/*
call 的特点
1.可以改变当前函数的this 指向
2.还会让当前函数执行
*/

/*
this 的所有内容
Object [global] {
  global: [Circular],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(util.promisify.custom)]: [Function]
  }
}
*/

/*
arguments 的所有内容
[Arguments] {}
*/

/*
执行 fn1.call('hello','1','2')
arguments 的所有内容
[Arguments] { '0': '1', '1': '2' }
*/