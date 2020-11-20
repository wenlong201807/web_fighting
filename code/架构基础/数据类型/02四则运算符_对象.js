// js 中类型转换规则

// if() 
// 哪些会变成true  ，哪些会变成 false
// fasle(5个) ： fasle undefined null '' 0 NaN
// 其他都是true

// !可以把这个值转变成 boolean类型 的 对立面💡💡💡
// console.log(1,!'') // true
// console.log(2,!'wenlong') // false
// console.log(3,!0) // true
// console.log(4,!12) // false
// console.log(5,!undefined) // true
// console.log(6,!NaN) // true
// console.log(7,!false) // true
// !!可以把这个值转变成 boolean类型 的 默认的boolean💡💡💡
// console.log(1,!!'') // false
// console.log(2,!!'wenlong') // true
// console.log(3,!!0) // false
// console.log(4,!!12) // true
// console.log(5,!!undefined) // false
// console.log(6,!!NaN) // false
// console.log(7,!!false) // false

// 运算符中  + - * /
//  + 号 特殊，有 字符串连接功能 (优先级高于 加法运算)
// 其他几个，默认会把非 数字类型的内容，尝试性的转变的数字类型，
// 如果不能转换成数字，那么 就会变成  不是数字  NaN

// console.log( Number('a')) // NaN
// console.log(3 + 'a') // '3a'
// console.log(3 * 'a') // NaN
// console.log(3 - 'a') // NaN
// console.log(3 / 'a') // NaN

// 运算法则  
// 1.数字和非字符串相加
// console.log( 1, 6+ null,typeof(6+ null) ) // 6 number  null->0
// console.log( 2, 6+ [],typeof(6+ [])) // 6 string
// console.log( 3, 6+ {},typeof(6+ {})) // 6[object Object] string
// console.log( 4, 6+ true,typeof(6+ true)) // 7 number
// console.log( 5, 6+ false,typeof(6+ false)) // 6 number
// console.log( 6,6 + function () { },typeof(6 + function () { })) // 6function () { } string
// console.log( 7,6 + Symbol,typeof(6 + Symbol)) // 6function Symbol() { [native code] } string
// console.log( 8,6 + undefined,typeof(6 + undefined)) // NaN number

// console.log(1,Number(null)) // 0
// console.log(2,Number([])) // 0
// console.log(3,Number({})) // NaN
// console.log(4,Number(true)) // 1
// console.log(5,Number(false)) // 0
// console.log(6,Number(function () { })) // NaN
// console.log(7,Number(Symbol)) // NaN
// console.log(8,Number(undefined)) // NaN

 // 2.非数字相加
//  console.log(1,true + {}) // true[object Object]
//  console.log(2,true + []) // true
//  console.log(3,true + null) // 1
//  console.log(4,true + undefined) // NaN
//  console.log(5,true + Symbol) // truefunction Symbol() { [native code] }
//  console.log(6,true + true) // 2
//  console.log(7,true + false) // 1
//  console.log(8,true + function () { }) // truefunction () { }

// 1.对象中有两个方法 
// 优先：valueOf()  第二：toString()

// let obj = {
//   valueOf () {
//     return 100
//   },
//   toString () {
//     return '200'
//   }

// }
// console.log(true + obj) // 101
// console.log(obj) // { valueOf: [Function: valueOf], toString: [Function: toString] }
// console.log(obj.valueOf()) // 100
// console.log(obj.toString()) // 200
// console.log({}.valueOf()) // {}
// console.log({}.toString()) // [object Object]


// 2.对象中有两个方法 
// 优先：valueOf()  第二：toString()
// 可以优先的原有：如果valueOf 返回的是一个原始类型，那么会先返回这个结果
// 如果valueOf 返回的是一个引用类型 {} 或者数组 那么就直接使用 toString() 的返回值

// let obj = {
//   valueOf () {
//     return {} // 🍎🍎🍎 
//   },
//   toString () {
//     return '200' // 🏮
//   }

// }
// console.log(1,true + obj) // true200
// console.log(2,obj) // { valueOf: [Function: valueOf], toString: [Function: toString] }
// console.log(3,obj.valueOf()) // {}
// console.log(4,obj.toString()) // 200

// 如果对象的这两个方法都不能返回原始数据类型🏮🏮🏮
// TypeError: Cannot convert object to primitive value
// let obj = {
//   valueOf () { 
//     return {} // 🍎🍎🍎 
//   },
//   toString () {
//     return {name:'wenlong'} // 🏮
//   }

// }
// // console.log(1,true + obj) // true200
// console.log(2,obj) // { valueOf: [Function: valueOf], toString: [Function: toString] }
// console.log(3,obj.valueOf()) // {}
// console.log(4,obj.toString()) // { name: 'wenlong' }

// 内部运作机制
let obj = {
  [Symbol.toPrimitive] () { // 优先级最高
    return 666
  },
  valueOf () { 
    return {} // 🍎🍎🍎 
  },
  toString () {
    return {name:'wenlong'} // 🏮
  }

}
// console.log(1,true + obj) // 667
// console.log(2, obj) 
/*
{
  valueOf: [Function: valueOf],
  toString: [Function: toString],
  [Symbol(Symbol.toPrimitive)]: [Function: [Symbol.toPrimitive]]
}
*/
// console.log(3,obj.valueOf()) // {}
// console.log(4,obj.toString()) // { name: 'wenlong' }

// 通过 + - 号 将一个非数字类型（可转换成数字的）转换成数字而且优先即高于加法
// 这个加号 作为转换数字的  + 号  必须 位于 非字符串前面
// console.log(1+ + '123') // 124
// console.log( + '123'-1) // 122
console.log(  '123'+ -1) // 123-1
// console.log(1 + '123') // 1123
// console.log(+ '666') // 666
// console.log(- '666') // -666
// console.log(+ '666aa') // NaN
// console.log(- '666aa') // NaN