
Function.prototype.call = function (context) {
  // this调用，使用谁调用，指向谁的特点
  // this = 'hello'  错误方式
  // 正确方式 ：  xxx.fn1()
  // {}.fn = fn1 // 引用类型，默认使用对象，可以动态添加属性的特点
  context = context ? Object(context) : window
  context.fn = this // {}.fn = fn1 

  let args = []
  for (let i = 0; i < arguments.length; i++){
    args.push('arguments[' + i + ']') // 实现目标 ['','',''] // 转换成数组
  }

  // 利用数组的toString的特性
  let r = eval('context.fn(' + args + ')') // eval 可以是字符串js代码块执行
  delete context.fn
  return r
}

// 测试使用
function fn1 () {
  // console.log(1,this) // 1 String {"hello", fn: ƒ}
  // console.log(1,arguments)
  console.log(1,this,arguments)
}

// fn1.call('hello', '111', '2') // 1 Arguments(3)


function fn2 () {
  console.log(2,this,arguments)
}

// fn1.call(fn2) 
/*
1 ƒ fn2 () {
  console.log(2,arguments)
}
*/

fn1.call.call(fn2)
// 如果2个或者多个call，会让call方法执行，并且把call中this改变成 fn2
/*
2 ƒ fn2 () {
  console.log(2,this,arguments)
} Arguments [ƒ, callee: ƒ, Symbol(Symbol.iterator): ƒ]
*/