// typeof  instanceof区别

// typeof 只能校验原始类型
// console.log( typeof []) // object
// console.log( typeof {}) // object
// console.log( typeof function(){}) // function
// console.log( typeof 1) // number
// console.log( typeof 's') // string
// console.log( typeof null) // object
// console.log( typeof Symbol) // function
// console.log( typeof Symbol('wenlong')) // symbol
// console.log( typeof Symbol.for('wenlong')) // symbol
// console.log( typeof undefined) // undefined
// console.log( typeof new Date()) // object
// console.log( typeof new RegExp()) // object

// Object.prototype.toString 只能校验已经存在的类型
// console.log( Object.prototype.toString.call([]) ) // [object Array]
// console.log( Object.prototype.toString.call({}) ) // [object Object]
// console.log( Object.prototype.toString.call(function(){}) ) // [object Function]
// console.log( Object.prototype.toString.call(1) ) // [object Number]
// console.log( Object.prototype.toString.call('s') ) // [object String]
// console.log( Object.prototype.toString.call(null) ) // [object Null]
// console.log( Object.prototype.toString.call(new Date()) ) // [object Date]
// console.log( Object.prototype.toString.call(new RegExp()) ) // [object RegExp]
// console.log( Object.prototype.toString.call(undefined) ) // [object Undefined]
// console.log( Object.prototype.toString.call(Symbol) ) // [object Function] 
// console.log( Object.prototype.toString.call(Symbol('wenlong')) ) // [object Symbol] 
// console.log( Object.prototype.toString.call(Symbol.for('wenlong')) ) // [object Symbol] 

// Object.prototype.toString 不能校验自定义类型
// console.log( Obje ct.prototype.toString.call(a ) // ObjectNotFound  CommandNotFoundException 

// instanceof 
// 万物皆对象，每个对象都会有 __proto__ 内置属性，会依据原型链上查找
// 本质上是原型链中能找到相等的的地方：left.__proto__ === right.prototype
// console.log( [] instanceof Array) // true
// console.log({} instanceof Object) // true

// 自定义实现
function MyinstanceOf (a, b) {
  // bug  没有判断  a,b 的数据类型 而null 是一个原始类型
  a = a.__proto__ // 实例对象
  b = b.prototype // 构造函数

  while (true) { // Object.prototype.__prototype__
    if (a === null) {
      return false
    } 
    if (a === b) {
      return true
    }
    // 每次结束前继续查找 
    // 这可是单链表的特点 ，每个属性，都会有next属性，指向下一个节点
    a = a.__proto__
  }
}

function A(){}
let a = new A()

// console.log('自定义实现1：', MyinstanceOf (a, A)) // 自定义实现1： true
// console.log('自定义实现2：', MyinstanceOf (a, Object)) // 自定义实现2： true
// console.log('自定义实现3：', MyinstanceOf (a, Array)) // 自定义实现3： fasle
// Function 函数的实例是一个函数🍇🍇🍇
// console.log('自定义实现4：', MyinstanceOf (a, Function)) // 自定义实现4： fasle
// console.log('自定义实现5：', MyinstanceOf(function () { }, Function)) // 自定义实现4： true

// console.log('自定义实现6：', MyinstanceOf (Object, Function)) // 自定义实现4： true // 对象是函数的实例
// console.log('自定义实现7：', MyinstanceOf (Function, Object)) // 自定义实现4： true // 函数是对象的实例
// console.log('自定义实现8：', MyinstanceOf (Object, null)) // TypeError: Cannot read property 'prototype' of null
// console.log('自定义实现9：', MyinstanceOf (Function, null)) // TypeError: Cannot read property 'prototype' of null

// instanceof 无法正确校验 原始类型 📕📕📕
// console.log( 'wenlong' instanceof String) // false
// console.log( 666 instanceof Number) // false
// console.log( true instanceof Boolean) // false
// console.log(Symbol(123) instanceof Symbol) // false

// 'wenlong' instanceof String 本质上是调用  String[Symbol.hasInstance]('wenlong')
console.log('内部执行操作：', String[Symbol.hasInstance]('wenlong')) // false

// 人为修改此静态方法
class ValidateStr{
  static [Symbol.hasInstance] (x) {
    return typeof x === 'string'
  }
}

console.log('自定义修改内置静态方法1：',ValidateStr[Symbol.hasInstance]('wenlong')) // true
console.log('自定义修改内置静态方法2：', 'wenlong' instanceof ValidateStr ) // true

// console.log( undefined instanceof undefined) 
// TypeError: Right-hand side of 'instanceof' is not an object
// console.log(null instanceof null)
// TypeError: Right-hand side of 'instanceof' is not an object

// 查找对应的构造函数