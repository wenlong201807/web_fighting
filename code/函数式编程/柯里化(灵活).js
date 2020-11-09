const curry = function (fn) {
  return function curriedFn (...args) {
    if (args.length < fn.length) { // fn.length 表示fn函数的实际参数个数
      return function () {
        return curriedFn(...args.concat([...arguments]))
      }
    }
    return fn(...args)
  }
}

const fn2 = (x, y) => x + y
const fn3 = (x, y, z) => x + y + z
const fn4 = (x, y, z, a) => x + y + z + a
console.log('函数的实际参数个数fn2：',fn2.length) // 2
console.log('函数的实际参数个数fn3：',fn3.length) // 3
console.log('函数的实际参数个数fn4：',fn4.length) // 4
const myFn2 = curry(fn2)
const myFn3 = curry(fn3)
const myFn4 = curry(fn4)
let res4 = myFn4(1)(2)(3)(4) // 多元变成一元函数
console.log('2个参数：', myFn2(1, 2)) // 3
console.log('3个参数：', myFn3(1, 2, 3)) // 6
console.log('4个参数：', myFn4(1, 2, 3, 4)) // 10 
console.log('res4：', res4) // 10