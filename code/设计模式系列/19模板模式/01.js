class Person{
  // 执行顺序固定，即为算法骨架
  // 每个小方法的内部细节可以按需调整
  dinner () {
    this.buy()
    this.cook()
    this.cook()
  }
  buy () {
    throw new Error('必须由子类来实现')
  }
  cook () {
    throw new Error('必须由子类来实现')
  }
  cook () {
    throw new Error('必须由子类来实现')
  }
}

class Long extends Person{
  buy () {
    console.log('先买事物，，，用来下锅')
  }
  cook () {
    console.log('用买来的事物，，，在锅里面，，，煮着，，，')
  }
  cook () {
    console.log('等煮熟了，，，才能吃。')
  }
}

let me = new Long()
me.dinner()