// 单一原则

function afn (a) {
  return a * 2
}

function bfn (b) {
  return b + 5
}

// 需求：先乘以2，再加上5
let res = bfn(afn(2))
// console.log(res) // 9


// 组合：执行顺序是从右到左的 # compose
// 管道：执行顺序是从左到右的 # 有 '|'  管道符  pipe

const compose = function (fn1, fn2) {
  return function (val) {
    return fn1(fn2(val))
  }
}

const myFn = compose(bfn, afn)
// console.log('组合操作结果：', myFn(2)) // 9

// 多个函数组合
const compose2 = function (...fns) {
  return function (val) {
    return fns.reverse().reduce((total, fn) => {
      return fn(total)
    }, val)
  }
}
const myFn2 = compose2(bfn, afn)
// console.log('多组合:', myFn2(2)) // 9


// 多管道
const pipe2 = function (...fns) {
  return function (val) {
    return fns.reduce((total, fn) => {
      return fn(total)
    }, val)
  }
}
const myFn3 = pipe2(bfn, afn)
// console.log('多管道:', myFn3(2)) // 14

// 案例实操
let str = 'hello。every。body。and。girl。'
// 目标：找到句号数量，判断其个数为奇偶
// 抽象成 纯函数
// 获取句号
const getPeriod = str => str.match(/。/g)
console.log(getPeriod(str))
// 统计数量
const getLength = arr => arr.length
// 判断奇偶
const oddOrEven = num => num % 2 ? '偶数' : '奇数'
// 组合函数
let formatFn = compose(oddOrEven, getLength, getPeriod)
let result = formatFn(str)
console.log(result)