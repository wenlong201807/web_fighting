// const bind = require('./index')
// console.log(bind)
// https://xiedaimala.com/tasks/06956063-1b66-497a-8b3b-78d3ab7ab2a9/video_tutorials/3e1d5b18-44cd-4843-bb57-c7e2ea971bf6



Function.prototype.bind2 = bind
console.assert(Function.prototype.bind2 !== undefined)

const fn1 = function () {
  return this
}

const newFn1 = fn1.bind2({ name: "frank" })
console.assert(newFn1().name === "frank")