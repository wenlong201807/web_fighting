function bind (asThis) {
  // this 就是函数
  const fn = this
  return function () { 
    return fn.call(asThis)
  }
}

// module.export = bind
// export default bind

// 垫片作用
// 如果有就用原来的，没有，就用自己扩展的
// 可以是一个函数，一个属性
if (!Function.prototype.bind) {
  Function.prototype.bind = bind
}