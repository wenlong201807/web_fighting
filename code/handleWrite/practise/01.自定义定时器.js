// 写一个mySetInterVal(fn,a,b)
// 每次间隔   a , a+b  , a+2b  的时间，然后写一个myClear 停止上面的定时器

// 版本1
class MySetInterVal {
  constructor(fn, a, b) {
    this.fn = fn
    this.a = a
    this.b = b
    this.count = 0
    this.timer = null
    this.start()
  }
  start () {
    let time = this.a + this.count * this.b
    this.timer = setTimeout(() => {
      this.fn(time)
      this.count++
      this.start()
    }, time)
  }

  myClear () {
    clearTimeout(this.timer)
    this.timer = null
    this.count = 0
  }

}

const mySetInterVal = new MySetInterVal((time) => console.log('mySetInterVal-->' + time), 1000, 1000)
// setTimeout(()=>mySetInterVal.myClear(),5000)
// setTimeout(()=>mySetInterVal.myClear(),9000)
// setTimeout(()=>mySetInterVal.myClear(),11000)

// 版本2
class MyInterval {
  constructor(fn, a, b) {
    this.fn = fn
    this.a = a
    this.b = b

    this.number = 0
    this.timer = -1
  }

  start () {
    this.timer = setTimeout(() => {
      this.fn()
      this.number++
      this.start()
    }, this.a + this.number * this.b)
  }

  clear () {
    clearTimeout(this.timer)
    this.number = 0
  }
}

const interval = new MyInterval(
  () => console.log('test'),
  100,
  500
)

// interval.start()
// interval.clear()

// 版本3
function mySetInterval (fn,a,b) {
  this.timeout = a
  this.end = false
  this.start = function (params) {
    if (!this.end) {
      setTimeout(() => {
        fn(),
          this.timeout += b
        this.start()

      }, this.timeout)
    }
  }

  this.clear = function (params) {
    this.end = true
  }
}

let t = new mySetInterval(() => console.log('test'), 100, 100)
// t.start()
// t.clear()

// 版本4
let mySetInterVal4 = function (fn, a, b, n) {
  let count = 0
  let timer = null
  return (function time () {
    return setTimeout(() => {
      fn(a+count*b)
      if(n===count) return clearTimeout(timer)
      time()
      count++
    },a+count*b)
  })()
}

mySetInterVal4(function(v){console.log(v)},1000,2000,3)