// js 实现链式调用
// 参考资料 https://blog.csdn.net/Dilomen/article/details/87943880
// 只需要再方法调用后返回this即可

let user = function (name, age) {
  this.name = name
  this.age = age
}

user.prototype.getName = function () {
  console.log(this.name)
  return this
}

user.prototype.getAge = function () {
  console.log(this.age)
  return this
}

let user1 = new user('wenlong',18)
user1.getName().getAge()