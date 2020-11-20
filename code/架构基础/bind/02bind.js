
let obj = {
  name: 'wenlongzhu'
}

function fn () {
  console.log('fn内部的this.name:', this.name)
}

/*
bind 方法可以绑定this执行
bind方法返回一个绑定后的函数(高级函数)
*/
// let bindFn = fn.bind(obj) // 惰性执行，需要调用才会执行
// bindFn() // fn内部的this.name: wenlongzhu

// 自定义实现myBind
Function.prototype.myBind = function (context) {
  console.log('context:',context) // context: { name: 'wenlongzhu' }
  // 目标：人为为原函数执行上下文对象 
  // 函数中的参数部分，是属于函数内部的变量，叫做函数变量，或者叫做局部变量
  console.log('this:', this) // this: [Function: fn]
  // 实现目标时，本身具备的有利条件(需要充分运用你的能够发掘宝藏的眼睛🔎)
  // 即 ： => this 是外部调用的原函数
  let that = this // 函数内部，暂存原函数

  return function () { // bind返回一个函数
    return that.apply(context) // 
  }
}

let bindFn = fn.myBind(obj) // 惰性执行，需要调用才会执行
bindFn() // fn内部的this.name: wenlongzhu
