export { } // 保证Animal不报错

// 继承主要实现代码逻辑的复用，或者说是属性和方法的复用
// 继承的弊端：导致类的层次过深，类和类之间出现了耦合，如果修改了父类，子类也会跟着变
class Animal{ // 同一个项目中有同名的类名，会报错
  name: string
  eat() {
    console.log('吃东西...')
  }
}

let animal = new Animal()
animal.eat()

// 继承的操作
class Dog extends Animal{

}

let dog = new Dog()
console.log(dog.name)
dog.eat()