
function Animal (type) {
  // 在函数内部中定义的东西，都是实例上的属性或者方法
  // 而且每个实例，都会各占据一份，极耗内存
  this.type = type
  this.fly = function () {
    console.log(this,'i can fly...')
  }

  /*
  函数是一等公民，自然还有特别的地方
  比如：返回数据的类型，：此次重点关注哦 ^_^

  如果当前构造函数返回的是一个引用类型，需要把这个对象放回
  或者返回一个新的函数
  */
  
  return {name:'文龙朱'} // 构造函数，不能写return ，否则会失去原型上的功能
}

Animal.prototype.say = function () {
  console.log('function_protoptye:',this,'i want to say...')
}

Animal.prototype.hh = 'hh'

// let animal = new Animal('哺乳类')
// console.log(animal.type) // 哺乳类
// animal.say() // function_protoptye: Animal { type: '哺乳类', fly: [Function] } i want to say...

function mockNew () {
  /*
  原型上都会有一个属性， constructor  属性，指向其对应的构造函数
  而 构造函数:constructor(){}，也是一个函数，在构造函数内部会自动执行构造函数中
  依据此特点：能传入参数，并且是自动执行的，刚好满足，new 的需求
  */ 
  // Constructor  => animal 剩余的arguments 就是其他的参数
  // console.log('arguments:',arguments) // arguments: [Arguments] { '0': [Function: Animal], '1': '哺乳类2' }
  // arguments 是伪数组，第一项，是指向其构造函数，其它项，是第一项(构造函数) 的实参 【不是形参】
  let Constructor = [].shift.call(arguments) // 自定义模拟mockNew的构造函数
  // console.log('Constructor:',Constructor) // Constructor: [Function: Animal]
  let obj = {} // 这样的空函数，存在原型链
  // 实例对象的私有属性 __proto__  指向原型
  // 构造函数的 原型属性 prototype 指向原型
  // 这两个原型，人为关联在一起，指向同一个原型，
  // 即实现，new MyFn() 
  obj.__proto__ = Constructor.prototype // 原型上的方法，实现继承，传递给了`实例`obj对象

  // Constructor.apply(obj,arguments) // 自定义模拟mockNew的执行
  // return obj
  
  // 优化考虑 判断返回值是否是对象(对象，函数，数组都是原型链中的对象)
  let r = Constructor.apply(obj,arguments) // 自定义模拟mockNew的执行
  return r instanceof Object ? r : obj
  
  // 切忌： 构造函数不要使用return
  // 自定义模拟的new 方法的弊端，只是生成一个对象而已，失去了其构造函数的功能
}

// 测试执行
let animal2 = mockNew(Animal,'哺乳类2')
console.log('animal2:',animal2)  // animal2: { name: '文龙朱' }


// animal2.say() // TypeError: animal2.say is not a function
// 构造函数不能使用 return  // 否则其对应的实例，无法执行原型上的方法