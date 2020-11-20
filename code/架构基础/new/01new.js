
function Animal (type) {
  // 在函数内部中定义的东西，都是实例上的属性或者方法
  // 而且每个实例，都会各占据一份，极耗内存
  this.type = type
  this.fly = function () {
    console.log(this,'i can fly...')
  }
}

Animal.prototype.say = function () {
  console.log('function_protoptye:',this,'i want to say...')
}

let animal = new Animal('哺乳类')
console.log(animal.type) // 哺乳类
animal.say() // function_protoptye: Animal { type: '哺乳类', fly: [Function] } i want to say...
