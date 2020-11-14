class A{
  constructor(bridge) {
    this.bridge = bridge
  }
  go () {
    console.log(`从${this.from()}到达${this.bridge.to()}`)
  }
  from () {
    throw new Error('子类必须实现此方法')
  }
}

class A1 extends A{
  from(){ return 'A1'}
}

class A2 extends A{
  from(){ return 'A2'}
}

class   B{
  to () {
    throw new Error('子类必须实现此方法')
  }
}

class B1 extends B{
  to(){ return 'B1'}
}

class B2 extends B{
  to(){ return 'B2'}
}

let b2 = new B2() // b2实例 与 a1实例 完全没有关联的
let a1 = new A1(b2) // 通过将 b2 作为参数传入 A1 的构造函数，进而实现了两者间的通信
a1.go()