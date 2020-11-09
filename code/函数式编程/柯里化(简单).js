// 把二元函数变成一元函数

function test (x, y) {
  return x + y
}

// 柯里化转变法
const curry = function (fn) {
  return function (x) {
    return function (y) {
      return fn(x, y)
    }
  }
}

let myFn = curry(test)
let res = myFn(1)(2)
console.log('curry:', res)
console.log('origin--test(1,2):', test(1, 2))

// 孰能生巧
let arr = [
  { name: '111', age: 11 },
  { name: '222', age: 22 },
  { name: '333', age: 33 },
]

const getObj = (name, item) => item.name === name
// let res2 = arr.filter(item => getObj('111', item))
// console.log(res2) // [ { name: '111', age: 11 } ]

const cfn = curry(getObj)
const res3 = arr.filter(cfn('111'))
console.log(res3) // [ { name: '111', age: 11 } ]