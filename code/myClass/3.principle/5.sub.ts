// 里氏替换原则
// 任何在能使用父类的地方都要可以使用子类
export {}
class AbstractDrink {
  getPrice():any {
    return 1
  }
  sum(a: number, b: number) {
    return a+b
  }
}

class CocaCola extends AbstractDrink {
  getPrice(): any {
    return '不能修改父类的功能'
  }
  sum(a: number, b: number) { // 此违反了父类求和的功能，不可
    return 0
  }
}

class Sprite extends AbstractDrink {
  getPrice(): string {
    return '可以增强功能，但是不能更改'
  }

}

class Fanta extends AbstractDrink {
  getPrice(): number {
    return 7
  }

}

class Customer {
  drink(abstractDrink : AbstractDrink) {
    console.log('花费:', abstractDrink.getPrice())
  }
}

// 里氏替换：可以替换=》 任何可以传父类的地方，都可以将其子类传递进去
// 里氏替换是一个原则，要求子类不能违反父类的功能和规定
let c1 = new Customer()
c1.drink(new AbstractDrink())
c1.drink(new CocaCola())
c1.drink(new Sprite())
c1.drink(new Fanta())
