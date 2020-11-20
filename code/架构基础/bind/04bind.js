// 目标：将bind返回的函数，变成构造函数，
// 可以使用 new 关键字 去实例化对象


let obj = {
  name: 'wenlongzhu'
}

function fn (name, age) {
  this.say = 'fn inner:who am i ?'
  console.log('fn内部的this.name:', this.name)
  console.log('fn内部的name:', name)
  console.log('fn内部的age:', age)
  console.log('测试新功能***fn内部的this:', this)
}

/*
bind 方法可以绑定this执行
bind方法返回一个绑定后的函数(高级函数)
// 已经实现的目标，支持bind给原函数添加参数(包括参数合并)
*/

// let bindFn = fn.bind(obj,'dragon') // 惰性执行，需要调用才会执行
// bindFn(20) 

/* 执行结果：
fn内部的this.name: wenlongzhu
fn内部的name: dragon
fn内部的age: 20
*/



/*
bind 方法可以绑定this执行
bind方法返回一个绑定后的函数(高级函数)
// 已经实现的目标，支持bind给原函数添加参数(包括参数合并)

// 新目标：将bind返回的函数，变成构造函数，
// 可以使用 new 关键字 去实例化对象
*/

// let BindFn4 = fn.bind(obj,'dragon4') // 惰性执行，需要调用才会执行
// let instance4 = new BindFn4(14) 
// console.log('instance4:',instance4)
/*
fn内部的this.name: undefined  // 使用  new 关键字之后 this 使用原来函数内部的
fn内部的name: dragon4
fn内部的age: 14
测试新功能***fn内部的this: fn { say: 'fn inner:who am i ?' } // 函数内部的this
instance4: fn { say: 'fn inner:who am i ?' } // 对应实例 也是原函数内部的this
*/

// 自定义实现myBind
Function.prototype.myBind = function (context) {
  // console.log('context:',context) // context: { name: 'wenlongzhu' }
  // 目标：人为为原函数执行上下文对象 
  // 函数中的参数部分，是属于函数内部的变量，叫做函数变量，或者叫做局部变量
  // console.log('this:', this) // this: [Function: fn]
  // 实现目标时，本身具备的有利条件(需要充分运用你的能够发掘宝藏的眼睛🔎)
  // 即 ： => this 是外部调用的原函数
  let that = this // 函数内部，暂存原函数

  // 目标：支持传参，并且是两种方式，合并参数
  /*
  详解：arguments  中第一个属性是 函数明面上写的参数，context，其后的属性，才是我们需要的实参
  因此，需要把第一项，切除，只保留剩余部分
  另：容易忽略的点： 每个函数都会有arguments 属性，这是js语言设计存在的特性
  myBind 也是一个函数，所以也有自己的arguments属性，
  因此，这一层获取的到的 arguments 中的属性，是 myBind 中的实际传入的参数
  这里是与返回函数那里做一个区分，里头的返回函数，也是一个函数，自然也有它自己的arguments属性
  在那里头，也是可以传参数的
  这才是详解的全部(～￣▽￣)～
  */
  // console.log('mybind中的arguments:', arguments)
  // mybind中的arguments: [Arguments] { '0': { name: 'wenlongzhu' }, '1': 'dragon2' }
  let bindArgs = Array.prototype.slice.call(arguments,1)


  // 具名函数具有名字，可以通过函数名字调用，执行
  // 具名函数和匿名函数都是由this的，这就又可以做一些其他的事情了 🍎🍎🍎
  /*
  目标：为了支持myBind 返回的新函数，可以通过new 关键字，实例化新对象
  并且，实例化对象的this指向，🍉🍉🍉依旧指向原函数的this🍉🍉🍉
  在这个函数的返回的自执行的函数中，需要判断，然后选择性的注入，fBound 的this
  */ 
  function fBound() { // bind返回一个函数 
    let fBoundThis = this
    // console.log('返回函数的arguments:',arguments) // [Arguments] { '0': 21 }
    let args = Array.prototype.slice.call(arguments)
    return that.apply(fBoundThis instanceof fBound ? fBoundThis : context,bindArgs.concat(args)) // apply 参数，可以是数组，或伪数组 
    // return that.apply(context,bindArgs.concat(args)) // apply 参数，可以是数组，或伪数组 
    // return that.apply(context) // 
  }

  return fBound
}

let BindFn5 = fn.myBind(obj,'dragon5') // 惰性执行，需要调用才会执行
let instance5 = new BindFn5(25) // fn内部的this.name: wenlongzhu
console.log('instance5:',instance5)

/* 自定义myBind 函数，与原bind一致
fn内部的this.name: undefined
fn内部的name: dragon5
fn内部的age: 25
测试新功能***fn内部的this: fBound { say: 'fn inner:who am i ?' }
instance5: fBound { say: 'fn inner:who am i ?' }
*/