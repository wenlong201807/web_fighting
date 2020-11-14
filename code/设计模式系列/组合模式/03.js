
class Container {
  constructor(type) {
    this.element = document.createElement(type)
    this.children = []
  }
  add (child) {
    this.children.push(child)
    this.element.appendChild(child.element)
    return this
  }
}

class Item {
  constructor(type, title) {
    this.element = document.createElement(type)
    this.element.innerHTML = title
  }
}

class InputItem {
  constructor(type, title) {
    this.element = document.createElement(type)
    this.element.innerHTML = title
  }
}

let form = new Container('form')
let username = new Container('p')
let password = new Container('p')

let usernameLabel = new Item('label', '用户名')
let usernameInput = new InputItem('Input', 'username')
let usernameTip = new Item('span', '请输入用户名')
username.add(usernameLabel).add(usernameInput).add(usernameTip)

let passwordLabel = new Item('label', '密码')
let passwordInput = new InputItem('Input', 'password')
let passwordTip = new Item('span', '请输入密码')
password.add(passwordLabel).add(passwordInput).add(passwordTip)

// 挂载到页面中
form.add(username).add(password)
document.body.appendChild(form.element)