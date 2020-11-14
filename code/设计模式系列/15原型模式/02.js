// 函数也是一种对象

function Person () {}
// console.log(Person instanceof Object) // true

// 对象都是通过函数创建的

// 语法糖方式创建对象
let p1 = new Person()
// console.log(p1) // Person {}
let obj1 = {name:'wenlongzhu'}
// console.log(obj1) // { name: 'wenlongzhu' } 

// 创建对象的根本大法
let obj2 = new Object() // Object 也是一个构造函数
obj2.name = 'wenlongzhu2'
// console.log(obj2) // { name: 'wenlongzhu2' }

// console.log(Object) // [Function: Object]

// 创建函数的根本大法
let sum = new Function('a','b','return a+b')
console.log(sum) // [Function: anonymous]
console.log(Object.prototype.toString.call(sum)) // [object Function]