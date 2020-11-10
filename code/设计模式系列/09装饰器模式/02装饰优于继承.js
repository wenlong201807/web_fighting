

class Coffee {
  make (water) {
    return `${water}+咖啡`
  }
  cost () {
    return 10
  }
}

class MilkCoffee {
  constructor(parent) {
    this.parent = parent
  }
  make (water) {
    return `${this.parent.make(water)}+奶`
  }
  cost () {
    return 10
  }
}

class SugarCoffee {
  constructor(parent) {
    this.parent = parent
  }
  make (water) {
    return `${this.parent.make(water)}+糖`
  }
  cost () {
    return 10
  }
}

let coffee = new Coffee()
let milkCoffee = new MilkCoffee(coffee)
let sugarCoffee = new SugarCoffee(coffee)

let myMilkCoffee = milkCoffee.make('水')
let mySugarCoffee = sugarCoffee.make('水')

console.log(myMilkCoffee) // 水+咖啡+奶
console.log(mySugarCoffee) // 水+咖啡+糖