
let likeState = {
  render (element) {
    element.innerHTML = '赞'
  }
}

let likedState = {
  render (element) {
    element.innerHTML = '取消'
  }
}

class Button{
  constructor(container) {
    this.likeState = false
    this.state = likeState
    this.element = document.createElement('button')
    container.appendChild(this.element)
    this.render()
  }
  setState (state) { // 有木有像react 中的setState()
    this.state = state // 修改状态
    this.render() // 状态修改完成后要重新渲染 button
  }
  render () {
    this.state.render(this.element)
  }
}

let button = new Button(document.getElementById('root'))
button.element.addEventListener('click', () => {
  button.setState(button.liked ? likeState : likedState)
  button.liked = !button.liked
})