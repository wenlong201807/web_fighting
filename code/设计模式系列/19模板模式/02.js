
class Modal {
  constructor(options = {}) {
    this.title = options.title || '标题'
    this.content = options.content || '内容'
    this.onConfirm = options.onConfirm
    this.onCancel = options.onCancel
    this.init()
    this.eventListener() // 为什么这里需要调用一下？初始化干嘛要执行
  }

  //初始化的方法用于在页面中绘制一个对话框
  init () {
    this.panel = document.createElement('div')
    this.panel.className = 'modal'
    document.body.appendChild(this.panel)

    let titleP = this.titleP = document.createElement('p')
    titleP.innerHTML = this.title
    this.panel.appendChild(titleP)

    let contentP = this.contentP = document.createElement('p')
    contentP.innerHTML = this.content
    this.panel.appendChild(contentP)

    let confireBtn = this.confirmBtn = document.createElement('button')
    confireBtn.className = 'button confirm-button'
    confireBtn.innerHTML = '确定'
    this.panel.appendChild(confireBtn)

    let cancelBtn = this.cancelBtn = document.createElement('button')
    cancelBtn.className = 'button cancel-button'
    cancelBtn.innerHTML = '取消'
    this.panel.appendChild(cancelBtn)
  }
  eventListener () {
    this.confirmBtn.addEventListener('click', () => {
      this.onConfirm()
      this.hide()
    })
    this.cancelBtn.addEventListener('click', () => {
      this.onCancel()
      this.hide()
    })
  }
  hide () {
    this.panel.style.display = 'none'
  }
  show () {
    this.panel.style.display = 'block'
  }
}



// 添加子类，添加无限想象
class ContentOnlyModal extends Modal {
  init () {
    super.init() // 继承父类的所有此方法内的功能
    this.titleP.parentNode.removeChild(this.titleP) // 删除内容节点  contentP节点
  }
}

// 右上角添加  X 图标
class XModal extends Modal {
  // constructor() { // 错误写法??为什么不能这样写
  //   super()
  //   this.init()
  // }
  init () {
    super.init()
    // 
    // 为新添加的元素绑定事件
    let x = this.x = document.createElement('span')
    x.innerHTML = 'X'
    x.className = 'close-me'
    this.panel.appendChild(x)
  }
  eventListener () {
    super.eventListener()
    this.x.addEventListener('click',()=>{this.hide()}) // 调用父组件方法
  }
}

let modal = new XModal({
  // let modal = new ContentOnlyModal({
  // let modal = new Modal({
  title: '我是标题',
  content: '我的内容',
  onConfirm: () => { alert('confirm') },
  onCancel: () => { alert('cancel') }
})