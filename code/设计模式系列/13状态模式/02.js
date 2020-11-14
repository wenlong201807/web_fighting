class SuccessState{
  show () {
    console.log('显示绿色')
  }
}
class WarningState{
  show () {
    console.log('显示黄色')
  }
}
class ErrorState{
  show () {
    console.log('显示黄色')
  }
}

class Battery{
  constructor() {
    this.amount = 'high' // 电量很高
    this.state = new SuccessState()
  }
  show () {
    this.state.show() // 把显示的逻辑委托给子状态对象
    // 内部还要维护状态的变化
    if (this.amount === 'high') {    
      this.amount = 'middle'
      this.state = new WarningState()
    } else if(this.amount === 'middle'){     
      this.amount = 'low'
      this.state = new ErrorState()
    }
  }
}

let battery = new Battery()
battery.show()
battery.show()
battery.show()