/// 里氏替换原则应用于react中

import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component{

}

// 传父类的地方也可以传子类
// let element = React.createElement(React.Component)
let element = React.createElement(App)

// 当你定义个类的时候，会得到两个类型：一个是类的类型，另一个是类的原型，或者说是实例的类型
class MyApp {
  static age: number
  getName() {
    console.log('获取名字的')
  }
}

let my = new MyApp()
console.log(typeof my,my)
let m: MyApp = { getName() { } }
console.log('m:',m)
// let n:typeof MyApp = {new():MyApp,age:number}
// console.log('n:',n)

// 举例二
class Animal{}
class Dog extends Animal{ }

function getName(animal: Animal) {

}
// 可以传递父类的地方，就可以传递子类
getName(new Dog())