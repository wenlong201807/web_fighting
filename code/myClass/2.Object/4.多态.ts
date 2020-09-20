/**
 * 多态是一个功能，它的实现是要靠继承的，
 * 多态是要靠继承来实现，没有继承就没有多态
 * */

export {}

// 抽象类
abstract class Animal {
  abstract speak(): void
}
// class Animal {
// speak() {
//     throw new Error('此方法必须由子类实现')
// }
// }

class Dog extends Animal {
  speak() {
    console.log('汪汪汪')
  }
}
class Cat extends Animal {
  speak() {
    console.log('喵喵喵')
  }
}

function talk(animal : Animal) {
  animal.speak()
}

talk(new Dog())
talk(new Cat())
