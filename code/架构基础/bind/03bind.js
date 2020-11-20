
let obj = {
  name: 'wenlongzhu'
}

function fn (name,age) {
  console.log('fn内部的this.name:', this.name)
  console.log('fn内部的name:', name)
  console.log('fn内部的age:', age)
}

/*
bind 方法可以绑定this执行
bind方法返回一个绑定后的函数(高级函数)
// 新目标，支持bind给原函数添加参数(包括参数合并)
*/

// let bindFn = fn.bind(obj,'dragon') // 惰性执行，需要调用才会执行
// bindFn(20) 

/* 执行结果：
fn内部的this.name: wenlongzhu
fn内部的name: dragon
fn内部的age: 20
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
  console.log('mybind中的arguments:', arguments)
  // mybind中的arguments: [Arguments] { '0': { name: 'wenlongzhu' }, '1': 'dragon2' }
  let bindArgs = Array.prototype.slice.call(arguments,1)


  return function () { // bind返回一个函数

    console.log('返回函数的arguments:',arguments) // [Arguments] { '0': 21 }
    let args = Array.prototype.slice.call(arguments)
    return that.apply(context,bindArgs.concat(args)) // apply 参数，可以是数组，或伪数组 
    // return that.apply(context) // 
  }
}

let bindFn = fn.myBind(obj,'dragon2') // 惰性执行，需要调用才会执行
bindFn(21) // fn内部的this.name: wenlongzhu

/*
返回函数的arguments: [Arguments] { '0': 21 }
fn内部的this.name: wenlongzhu
fn内部的name: dragon2
fn内部的age: 21
*/