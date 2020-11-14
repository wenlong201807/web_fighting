
class MyPromise {
  constructor(fn) {
    this.state = 'initial' // padding状态
    this.successes = []
    this.fails = []
    let resolve = (data) => {
      this.state = 'fulfilled' // 成功的结束状态
      this.successes.forEach(item => item(data))
    }
    let reject = (data) => {
      this.state = 'failed' // 失败的结束状态
      this.fails.forEach(item => item(data))
    }

    // 初始化执行promise函数
    fn(resolve, reject)
  }

  then (success, fail) {
    this.successes.push(success)
    this.fails.push(fail)
  }
}

let p = new MyPromise((resolve, reject) => {
  console.log('初始化默认执行...')
  setTimeout((args) => {
    console.log('定时器参数：', args)
    let num = Math.random()
    if (num > 0.5) {
      resolve('resolve' + num)
    } else {
      reject('reject:' + num)
    }
  }, 500, 'msg')
})

p.then(
  success => {console.log('成功执行的：',success)},
  fail => {console.log('失败执行的：',fail)}
  )