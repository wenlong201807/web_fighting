/**
 * 工厂方法
 * 就是把创建产品的工作交由具体工厂类来实现
*/


export {}

abstract class Coffee {
  constructor(public name : string) {}
}

class AmericanoCoffee extends Coffee {}

class LatteCoffee extends Coffee {}

class CappuccinoCoffee extends Coffee {}


// 工厂模式
abstract class CafeFactory {
  abstract createCoffee(): Coffee
}


class AmericanoCoffeeFactory extends CafeFactory {
  createCoffee() {
    return new AmericanoCoffee('美食咖啡')
  }
}

class LatteCoffeeFactory extends CafeFactory {
  createCoffee() {
    return new LatteCoffee('拿铁咖啡')
  }
}

class CappuccinoCoffeeFactory extends CafeFactory {
  createCoffee() {
    return new CappuccinoCoffee('卡布奇诺咖啡')
  }
}

// let americanoCoffeeFactory = new AmericanoCoffeeFactory()
// console.log(americanoCoffeeFactory.createCoffee())
// let latteCoffeeFactory = new LatteCoffeeFactory() 
// console.log(latteCoffeeFactory.createCoffee())
// let cappuccinoCoffeeFactory = new CappuccinoCoffeeFactory()
// console.log(cappuccinoCoffeeFactory.createCoffee())

// 简单工厂模式里面，是由Factory来创建产品的
// 在工厂方法里面，不再 由Factory来创建产品，而是先创建具体的工厂，然后具体的工厂来创建产品
class Factory {
  static order(name : string) {
    switch (name) {
      case 'Americano':
        return new AmericanoCoffeeFactory().createCoffee()
      case 'LatteCoffee':
        return new LatteCoffeeFactory().createCoffee()
      case 'CappuccinoCoffee':
        return new CappuccinoCoffeeFactory().createCoffee()
      default:
        throw new Error('你点的咖啡品种我们不支持')
    }
  }
}

// 工厂方法模式应用于react中
function createElement(type: any, config: any) { // 柯里化
  // this绑定为null，第一个参数绑定为type
  return {type,props:config}
}

function createFactory(type: string) {
  const factory = createElement.bind(null,type) // 此处不需要this，可以写null，或者其他都行，
  return factory
}
 
let factory = createFactory('h1')
let element = factory({id:'h1',className:'title'})
console.log(element)
// { type: 'h1', props: { id: 'h1', className: 'title' } }

// TODO : 4.设计模式-工厂模式0:45:59