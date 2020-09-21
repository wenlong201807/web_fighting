// 抽象公共模式
// 适用于一类产品的创建
export { }

abstract  class AmericanoCoffee {}
abstract  class LatteCoffee  {}
abstract class CappuccinoCoffee  { }

class StarBuckAmericanoCoffee extends AmericanoCoffee{}
class LuckinAmericanoCoffee extends AmericanoCoffee{}
class StarBuckLatteCoffee extends LatteCoffee{}
class LuckinLatteCoffee extends LatteCoffee{}
class StarBuckCappuccinoCoffee extends CappuccinoCoffee{}
class LuckinCappuccinoCoffee extends CappuccinoCoffee{ }

// 抽象工厂，抽象工厂里面需要三个方法
abstract class CafeFactory {
  abstract  createAmericanoCoffee():AmericanoCoffee
  abstract  createLatteCoffee():LatteCoffee
  abstract  createCappuccinoCoffee():CappuccinoCoffee
}

class StarBuckCafeFactory extends CafeFactory{
  createAmericanoCoffee() {
    return new StarBuckAmericanoCoffee()
  }
  createLatteCoffee() {
    return new StarBuckLatteCoffee()
  }
  createCappuccinoCoffee() {
    return new StarBuckCappuccinoCoffee()
  }
}
class LuckinCafeFactory extends CafeFactory{
  createAmericanoCoffee() {
    return new LuckinAmericanoCoffee()
  }
  createLatteCoffee() {
    return new LuckinLatteCoffee()
  }
  createCappuccinoCoffee() {
    return new LuckinCappuccinoCoffee()
  }
}

let luckinCafeFactory = new LuckinCafeFactory()
console.log(luckinCafeFactory.createAmericanoCoffee()) // LuckinAmericanoCoffee {}

