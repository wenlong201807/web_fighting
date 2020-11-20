// 目标：将bind返回的函数，变成构造函数
// 可以使用 new 关键字 去实例化对象
// 可以获取原函数中，原型上的属性和方法

let obj = {
  name: 'wenlongzhu',
};

function fn(name, age) {
  this.say = 'fn inner:who am i ?';
  console.log('fn内部的this.name:', this.name);
  console.log('fn内部的name:', name);
  console.log('fn内部的age:', age);
  console.log('测试新功能***fn内部的this:', this);
}

fn.prototype.test = function () {
  console.log('我是fn函数中原型方法上的test方法，看看我的this是谁：', 66, this);
};

fn.prototype.hh = '我是fn原型上的属性hh';

/*
目标 ：获取原函数中，原型上的属性和方法
*/

// let BindFn = fn.bind(obj,'dragon') // 惰性执行，需要调用才会执行
// let m = new BindFn(20)
// console.log('实例m==fn的实例:', m)
// console.log('m.hh:', m.hh)
// m.test()

/* 执行结果：
fn内部的this.name: undefined
fn内部的name: dragon
fn内部的age: 20
测试新功能***fn内部的this: fn { say: 'fn inner:who am i ?' }
实例m==fn的实例: fn { say: 'fn inner:who am i ?' }
m.hh: 我是fn原型上的属性hh
我是fn函数中原型方法上的test方法，看看我的this是谁： 66 fn { say: 'fn inner:who am i ?' }
*/

// 自定义实现myBind
Function.prototype.myBind = function (context) {
  console.log('myBind--this--start:', this); // [Function: fn]
  // console.log('myBind.prototype--start:',myBind.prototype) // myBind is not defined 不能在自己内部使用

  let that = this;
  let bindArgs = Array.prototype.slice.call(arguments, 1);

  function fBound() {
    console.log('fBound--this:', this);
    let args = Array.prototype.slice.call(arguments);
    return that.apply(
      this instanceof fBound ? this : context,
      bindArgs.concat(args)
    );
  }

  /*
  简单回顾上一篇说明：构造函数不能使用return  ，否则会无法使用原型上的属性和方法
  但是，作为构造函数，还是有  prototype 属性，有this指针，即为函数本身
  因此在代码中使用return 关键字之后，把原型给切断了，
  那就人为的给它接上去
  */
  console.log('myBind--this--end:', this); // [Function: fn]
  console.log('fBound.prototype:', fBound.prototype); // fBound {}
  // 🍌🍌🍌公用原型链 Object.prototype 顶端第二个，查找范围大🍌🍌🍌
  fBound.prototype = this.prototype;

  // 这个this是 myBind的 ,this是谁调用，指向谁，这里指向了 Function.prototype
  /*
  fBound.prototype.__proto__ = Object.prototype
  this.prototype.__proto__ = Object.prototype
  即：Function.prototype.__proto__ = Object.prototype
  */

  return fBound;
};

// myBind.prototype = {kk:99};
// console.log('myBind.prototype--outer:', myBind.prototype);
// console.log('fBound.prototype--outer:', fBound.prototype);

let BindFn5 = fn.myBind(obj, 'dragon5'); // 惰性执行，需要调用才会执行
let instance5 = new BindFn5(25); // fn内部的this.name: wenlongzhu
console.log('instance5:', instance5); // fn { say: 'fn inner:who am i ?' }
console.log(instance5.hh); // 我是fn原型上的属性hh
// instance5.test()

/* 自定义myBind 函数，与原bind一致***获取实例原型上的方法和属性
fn内部的this.name: undefined
fn内部的name: dragon5
fn内部的age: 25
测试新功能***fn内部的this: fn { say: 'fn inner:who am i ?' }
instance5: fn { say: 'fn inner:who am i ?' }
我是fn原型上的属性hh
我是fn函数中原型方法上的test方法，看看我的this是谁： 66 fn { say: 'fn inner:who am i ?' }
*/
