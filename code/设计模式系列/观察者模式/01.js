
class Star{
  constructor(name) {
    this.name = name
    this.state = ''
    this.observers = [] // 粉丝团
  }
  getState () {
    return this.state
  }
  setState (state) {
    this.state = state
  }
  // 增加一个新的观察者
  attach (observer) {
    this.observers.push(observer)
  }
  // 通知所有的观察者更新自己
  notifyAllObservers () {
    if (this.observers.length) {
      this.observers.forEach(observer => observer.update()) // 难点来源
    }
  }
}

class Fan{
  constructor(name, star) {
    this.name = name
    this.star = star
    this.star.attach(this) // 我是谁的粉丝，就把我添加到女神的粉丝团中
  }
  update () { // 接收女神的更新信息
    console.log(`我的女神喜欢了${this.star.getState()}的颜色`)
  }
}

let star = new Star('刘亦菲')
let f1 = new Fan('文龙', star)

star.setState('深蓝色')
star.notifyAllObservers() // 发布通知，女神发消息了，小伙盘门老开心啦...