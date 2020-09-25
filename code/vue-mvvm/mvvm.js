// 基类  调度

class Compiler {
  constructor(el, vm) {
    // 判断el属性， 是不是一个元素，如果不是元素 那就获取它
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    // 把当前节点中的元素，获取到 放到内存中
    this.vm = vm
    let fragment = this.node2fragment(this.el)
    // 把节点中的内容进行替换

    // 编译模板，用数据编译
    this.compile(fragment)
    // 把内容再重新塞到页面中

    this.el.appendChild(fragment)
  }
  isDirective (attrName) {
    return attrName.startsWith('v-')
  }
  // 编译元素的
  compileElement (node) {
    let attributes = node.attributes // 类数组
    // console.log( attributes) // NamedNodeMap {0: type, 1: v-model, type: type, v-model: v-model, length: 2}
    Array.from(attributes).forEach(attr => {
      // console.log(attr) // typpe="text" v-model="school.name" ...
      let { name, value:expr } = attr 
      // console.log(name, value) // type text  ,  v-model school.name
      // 判断是不是指令
      if (this.isDirective(name)) {
        // console.log(node) // <input type="text" v-model="school.name">
        let [,directive] = name.split('-')
        // 需要调用不同的指令来处理
        CompileUtil[directive](node,expr,this.vm)
      }
    })
}
  // 编译文本的
  compileText (node) {
    // 判断当前文本节点中内容是否包含  {{xxx}} {{aaa}}
    let content = node.textContent
    // console.log(content) // {{school.name}}   {{school.age}}
    if (/\{\{(.+?)\}\}/.test(content)){
      // console.log('text:',content) // 找到所有的文本  比如:text: {{school.name}}
    }
    
  }
  compile (node) {
    // 用来编译内存中的dom节点
    let childNodes = node.childNodes
    Array.from(childNodes).forEach(child => {
      if (this.isElementNode(child)) {
        this.compileElement(child)
        // 如果是元素的话，需要把自己传进去 再去 遍历子节点
        this.compile(child) // 配合编译文本使用
      } else {
        this.compileText(child)
      }
    })
  }
  // 把节点移动到内存中
  node2fragment (node) {
    // 创建一个文档碎片
    let fragment = document.createDocumentFragment()
    let firstChild
    while (firstChild = node.firstChild) {
      // appendChild 具有移动性
      fragment.appendChild(firstChild)
    }
    return fragment
  }
  isElementNode (node) { // 是不是元素节点
    return node.nodeType === 1
  }
}

CompileUtil = {
  // 根据表达式取到对应的数据
  getValue (vm, expr) { // vm.$data 'school.name' [school,name]
    return expr.split('.').reduce((data, current) => {
      return data[current]
    },vm.$data)
  },
  model (node, expr, vm) {
    // node是节点，expr是表达式，vm是当前实例，  // school.name  vm.$data
    // 给输入框赋予value属性，node.value = xxx
    let fn = this.updater['modelUpdater']
    let value = this.getValue(vm,expr)
    // console.log(node,expr,vm)
    fn(node,value)
  },
  html () {
    // node.innerHTML = xxx
  },
  text () {
    
  },
  updater: {
    modelUpdater () {
      
    },
    htmlUpdater () {
      
    }
  },
}

class Vue {
  constructor(options) {
    // this.$el  $data $options
    this.$el = options.el
    this.$data = options.data
    // 这个根元素  存在 编译模板
    if (this.$el) {
      new Compiler(this.$el, this)
    }
  }
}