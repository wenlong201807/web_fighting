

class Coffee {
  make (water) {
    return `${water}+咖啡`
  }
  cost () {
    return 10
  }
}

class MilkCoffee extends Coffee {
  constructor() {
    super()
  }
  makeMilk (water) {
    return `${this.make(water)}` + '+奶'
  }
  cost () {
    return 10
  }
}

class SugarCoffee extends Coffee {
  constructor() {
    super()
  }
  makeSugar (water) {
    return `${this.make(water)}` + '+糖'
  }
  cost () {
    return 10
  }
}

let milkCoffee = new MilkCoffee()
let myMilkCoffee = milkCoffee.makeMilk('水')
console.log(myMilkCoffee) // 水+咖啡+奶
let sugarCoffee = new SugarCoffee()
let mySugarCoffee = sugarCoffee.makeSugar('水')
console.log(mySugarCoffee) // 水+咖啡+糖