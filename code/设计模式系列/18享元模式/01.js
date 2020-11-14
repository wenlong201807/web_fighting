
function Person (name,age) {
  this.name = name // 私有属性 方法，内部属性，方法
  this.age = age
}

Person.prototype.getName = function () {
  return this.name // 共有属性，方法，外部属性，方法
}

Person.prototype.getAge = function () {
  return this.age
}

let p1 = new Person()
let p2 = new Person()