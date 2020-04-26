function abs (x) {
  return x > 0 ? x : -x
}

function improve (guess, x) {
  return (guess + x / guess) / 2
}

function good_enough (guess, x) {
  return abs(guess * guess - x < 0.00001)
}

function iter (guess, x) {
  if (good_enough(guess, x)) {
    return guess
  } else {
    iter(improve(guess, x))
  }
}

// 使用过程
function sqrt (x) {
  return iter(1.0, x)
}
/**  老方式这样的****伪代码
function iter (x, improve, acc) {
  function good_enough (guess) {
    return abs(guess * guess - x < 0.00001)
  }
}
*/

console.log(sqrt(2))

//------------------
// 模拟柯里化函数
function __fmap (f, arr) {
  let narr = []
  for (let i = 0; i < arr.length; i++){
    narr[i]=f(arr[i])
  }
  return narr
}

const fmap = curry(__fmap)

const g = fmap(f)
g(list)

function add (x, y, z) {
  return x+y+z
}

// 函数式编程主要研究的是对象的映射
// 有两种模式存在  入演算 与 卡片机
// 模式一
function curry (f) {
  let storedArgs = []
  const g = (...args) => {
    storedArgs = storedArgs.concat(args)
    if (storedArgs.length === f.length) {
      f(...storedArgs)
    } else {
      return g
    }
    return g
  }
}

// 模式二 // 函数嵌套函数的模式**不适合
function curry2 (f, storedArgs = []) {
  return ycombinator((g, ...args) => {
    storedArgs = storedArgs.concat(args)
    if (storedArgs.length === f.length) {
      f(...storedArgs)
    } else {
      return g
    }
  })
}

const curriedAdd = curry(add)