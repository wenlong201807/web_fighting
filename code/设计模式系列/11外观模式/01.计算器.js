
// 各个模块
class Sum{
  sum (a, b) {
    return a+b
  }
}
class Minus{
  minus (a, b) {
    return a-b
  }
}
class Multiply{
  multiply (a, b) {
    return a*b
  }
}
class Divide{
  divide (a, b) {
    return a/b
  }
}

class Calculator{ // 门面
  constructor() {
    this.sumObj = new Sum()
    this.minusObj = new Minus()
    this.multiplyObj = new Multiply()
    this.divideObj = new Divide()
  }
  sum (a, b) {
    return this.sumObj.sum(a,b)
  }
  minus (a, b) {
    return this.minusObj.minus(a,b)
  }
  multiply (a, b) {
    return this.multiplyObj.multiply(a,b)
  }
  divide (a, b) {
    return this.divideObj.divide(a,b)
  }
}

// 客户端使用
let calculator = new Calculator()
console.log(calculator.sum(9,3))
console.log(calculator.minus(9,3))
console.log(calculator.multiply(9,3))
console.log(calculator.divide(9,3))