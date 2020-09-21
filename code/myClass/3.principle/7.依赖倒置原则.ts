// 依赖倒置原则
// 要依赖抽象而非依赖具体的实现

interface GirlFriend{ // 抽象的一类人
  age: number
  height: number
  cook():void
}
// implements -> interface  // 实现接口
// extends -> fatherClass  // 继承父类
class LinZhiling implements GirlFriend{ // 具体的某一个人
  age: number = 35
  height: number = 178
  cook() {
    console.log('泡面..')
  }
}

class HanMeimei implements GirlFriend{// 具体的某一个人
  age: number = 39
  height: number = 170
  cook() {
    console.log('煮面..')
  }
}

class SingleDog{
  // girlFriend:GirlFriend // 依赖抽象，正确
  // girlFriend:LinZhiling // 依赖具体 ，错误
  constructor(public girlFriend: GirlFriend) {
    console.log('single...dog')
  }
}

let dog1 = new SingleDog(new LinZhiling())
let dog2 = new SingleDog(new HanMeimei())
console.log(1,dog1)
console.log(2,dog2)