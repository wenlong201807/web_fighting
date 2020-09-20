/**
 * 封装：可以把类内部的属性隐藏起来，增加易用性，只暴露需要使用的部分，
 * 1.可以提供类易用性
 * 2.可以保护类的隐私
*/

// 如此，变成一个模块，就可以了
export {} // 同一个项目中，只能由一个类名，同名的话会报错

class Animal { // public 指的是共有属性，此属性可以在本类中，子类中，其他类中访问
  public name : string
  // protected 受保护的属性，此属性可以在本类中，子类中，被访问，其他地方不可以访问
  protected age : number
  // private 受保护的，被保护的类只能在当前类内部使用，子类不可以访问，其他地方也不可以被访问
  private weight: number
  constructor(name: string, age: number, weight: number) {
    this.name = name
    this.age = age
    this.weight = weight
  }

}
class Person extends Animal { // 我这个人的账户余额，私有的，只有自己可以访问
  private balance: number
  constructor(name: string, age: number, weight: number, balance: number) {
    super(name, age, weight)
    this.balance = balance
  }

  getName() {
    return this.name
  }
  getAge() {
    return this.age
  }
  getWeight() {
     // return this.weight //属性“weight”为私有属性，只能在类“Animal”中访问。
  }
}

let p1 = new Person('wenlong',10,100,1000)
p1.name
// p1.age // 属性“age”受保护，只能在类“Animal”及其子类中访问。
// p1.weight // 属性“weight”为私有属性，只能在类“Animal”中访问。
