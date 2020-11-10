
Function.prototype.before = function (beforeFn) {
  let _this = this
  return function () {
    beforeFn.apply(this, arguments)
    _this.apply(this, arguments)
  }
}

Function.prototype.after = function (afterFn) {
  let _this = this
  return function () {
    _this.apply(this, arguments)
    afterFn.apply(this, arguments)
  }
}

function buy (money, goods) {
  console.log('我是代表原来函数的功能的：', money, goods)
}

buy = buy.before(function () {
  console.log('我是原来函数之前前前添加的逻辑...')
})

buy = buy.after(function () {
  console.log('我是原来函数之后后后添加的逻辑...')
})

buy(666, '房子，车子...')

