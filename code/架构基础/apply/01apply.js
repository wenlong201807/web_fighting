
Function.prototype.apply = function (context,args) {
  // this调用，使用谁调用，指向谁的特点
  // this = 'hello'  错误方式
  // 正确方式 ：  xxx.fn1()
  // {}.fn = fn1 // 引用类型，默认使用对象，可以动态添加属性的特点
  context = context ? Object(context) : window
  context.fn = this // {}.fn = fn1 

  if (!args) {
    return context.fn()
  }

  // 利用数组的toString的特性
  let r = eval('context.fn(' + args + ')') // eval 可以是字符串js代码块执行
  delete context.fn
  return r
}

// 测试使用
function fn1 () {
  console.log(1, this, arguments)
  // 1 String0: "h"1: "e"2: "l"3: "l"4: "o"length: 5__proto__: String[[PrimitiveValue]]: "hello" Arguments(4)
}

fn1.apply('hello',[1,2,3,4])
