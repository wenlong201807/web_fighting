// 缓存特性
// 要求：实现test函数只执行一次

function test () {
  console.log('test...')
}

test() // 第一次可以执行     // test...
test() // 非第一次不可以执行 // test...
test() // 非第一次不可以执行 // test...

// 借助高阶函数做缓存执行结果
const once = fn => {
  let done = false
  return function () {
    if (!done) {
      // 没有执行过，即第一次执行
      fn()
      done = true
    } else {
      // 执行过的，非第一次，则不可再执行
      console.log('已经执行过的，不再执行了。')
    }
  }
}

// 使用
let myTest = once(test)
myTest() // test...
myTest() // 已经执行过的，不再执行了。
myTest() // 已经执行过的，不再执行了。
