
class Battery{
  constructor() {
    this.amount = 'high' // 电量很高
  }
  show () {
    if (this.amount === 'high') {
      console.log('显示绿色')
      this.amount = 'middle'
    } else if(this.amount === 'middle'){
      console.log('显示黄色')
      this.amount = 'low'
    }else if(this.amount === 'low'){
      console.log('显示红色')
    }
  }
}

let battery = new Battery()
battery.show()
battery.show()
battery.show()