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
 
  let that = this;
  let bindArgs = Array.prototype.slice.call(arguments, 1);

  function Fnn(){} // Object.create() 原理 ，创建一个自定义函数
  function fBound() {
   
    let args = Array.prototype.slice.call(arguments);
    return that.apply(
      this instanceof fBound ? this : context,
      bindArgs.concat(args)
    );
  }

  /*
  默认的关系
  this.prototype 指向 Function.prototype
  Fnn.prototype === new Fnn().__proto__

  fBoundu也是一个自定义的函数，
  这样就强行的将两个自定义函数的原型，指向了一个普通实例，
  😊😊😊原型链的查找，从底层到上层的顺序，这样查找原型，就少走了两层 😊😊😊
  */ 

  Fnn.prototype = this.prototype
  fBound.prototype = new Fnn()
  // 实现：fBound.prototype.xx === nm.xx  (let nm = new Fnn())
  // 把自定义构造函数的原型上的属性和方法，寄存，挂载到了 一个普通实例对象上
  // 将自定义的构造函数上的原型里面的属性和方法 =》类似  let kk = {} // 变成了很普通的引用传值

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
*/

/*
bind 实现方法总结

1.bind方法可以绑定 this 指向，绑定参数
2.bind方法返回一个绑定后的函数 （高级函数）
3.如果绑定的函数被 new 实例化使用，当前函数的this 就是原函数的this
4.new 出来的结果 ，可以找到原函数的原型上的方法和属性
*/

// == 比较的时候null 会转换成 undefin

console.log(null == undefined) // true
