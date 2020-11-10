
class Duck{
  eat (food) {
    console.log(food)
  }
}

class TangDuck{
  constructor() {
    this.duck = new Duck()
  }
  eat () {
    this.duck.eat(food)
    console.log('我是通过装饰，添加一些额外功能的来的')
  }
}

// let t = new Duck() // 原有调用方式
let t = new TangDuck() // 使用装饰器之后，修改调用类名
t.eat('原来的使用方式不变，只是里面多了一些额外添加的功能')