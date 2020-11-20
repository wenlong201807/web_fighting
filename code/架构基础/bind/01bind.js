
let obj = {
  name: 'wenlongzhu'
}

function fn () {
  console.log('fn内部的this.name:', this.name)
}

/*
bind 方法可以绑定this执行
bind方法返回一个绑定后的函数(高级函数)
*/
let bindFn = fn.bind(obj) // 惰性执行，需要调用才会执行
bindFn() // fn内部的this.name: wenlongzhu
