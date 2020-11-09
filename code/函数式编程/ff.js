const curry = function (fn) {
  console.log(fn.length,fn)
  return function curriedFn (...args) {
    console.log(888,arguments)
    if (args.length < fn.length) { // fn.length 表示fn函数的实际参数个数
      return function () {
        console.log(999,arguments)
        return curriedFn(...args.concat([...arguments]))
      }
    }
    return fn(...args)
  }
}

const fn4 = (x, y, z, a) => x + y + z + a
const myFn4 = curry(fn4)
let res4 = myFn4(1)(2,3)(4) // 多元变成一元函数
console.log(res4)