
function Folder (name) {
  this.name = name 
  this.children = []
  this.parent = null
}

Folder.prototype.add = function (child) {
  child.parent = this
  this.children.push(child)
}

Folder.prototype.remove = function () {
  if (!this.parent) {
    return false //  '不存在可删除的文件或文件夹'
  }
  let children = this.parent.children
  for (let i = 0; i < children.length; i++){
    if (children[i] === this) { // 可以这么判断的吗？
      children.splice(i,1)
      return true // '删除选中的文件或文件夹'
    }
  }
}

Folder.prototype.show = function () {
  console.log('文件夹 ' + this.name)
  for (let i = 0; i < this.children.length; i++){
    this.children[i].show() // 神奇的递归 // this指向调用者，而刚好，架构中定义好了，
    // 文件和文件夹的方法中都有这个显示的方法，这就是很奇妙的设计
  }
}

function File (name) {
  this.name = name
}

File.prototype.add = function () {
  throw new Error('文件下面是不能再添文件或者文件夹的，你懂的哦')
}

// File.prototype.remove = function () { // ？？？
//   if (!this.parent) {
//     return false //  '不存在可删除的文件或文件夹'
//   }
//   let children = this.parent.children
//   for (let i = 0; i < children.length; i++){
//     if (children[i] === this) { // 可以这么判断的吗？
//       children.splice(i,1)
//       return true // '删除选中的文件或文件夹'
//     }
//   }
// }

File.prototype.show = function () {
  console.log('文件 ' + this.name)
}

let video = new Folder('video')
let vue = new Folder('vue')
let react = new Folder('react')
let reactjs = new File('react.js')
let vuejs = new File('vue.js')
vue.add(vuejs)
react.add(reactjs)
video.add(vue)
video.add(react)
video.show()
console.log('===============')
react.remove()
video.show()
// 文件夹 video
// 文件夹 vue
// 文件 vue.js
// 文件夹 react
// 文件 react.js
// ===============
// 文件夹 video
// 文件夹 vue
// 文件 vue.js