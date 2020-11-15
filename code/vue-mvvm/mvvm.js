
class Dep {
  constructor() {
    this.subs = [] // 存放所有的Watcher
  }
  addSub (watcher) { // 添加 watcher
    this.subs.push(watcher)
  }
  // 发布
  notify () {
    this.subs.forEach(watcher => {
      watcher.update()
    })
  }
}

class Watcher {
  // vm.$watch(vm, 'school.name', (newVal) => {})
  constructor(vm, expr, cb) {
    this.vm = vm
    this.expr = expr
    this.cb = cb
    // 默认先厨房一个老值
    this.oldValue = this.get()
  }
  get () {// vm.$data.school vm.$data.school.name
    Dep.target = this // 先把自己放在this上
    let value = CompileUtil.getValue(this.vm, this.expr)
    Dep.target = null // 不取消 任何值取值 都会给添加上 watcher
    return value
  }
  update () {
    // 更新操作 数据变化后 会调用观察者的update方法
    let newVal = CompileUtil.getValue(this.vm, this.expr)
    if (newVal !== this.oldValue) {
      this.cb(newVal)
    }
  }
}

class Observer {  // 实现数据劫持功能
  constructor(data) {
    // console.log(data) // {school: {…}} // 对应data里面定义的所以内容，
    this.observer(data)
  }
  observer (data) {
    // 如果是对象才观察
    if (data && typeof data === 'object') {
      // 如果是对象
      for (let key in data) {
        this.defineReactive(data, key, data[key])
      }
    }
  }
  defineReactive (obj, key, value) {
    this.observer(value) // 递归调用，使每一层都是响应式的 // school:[watcher,watcher] b:[watcher,watcher]
    // 以上监听，为每一个属性都加上各自的观察者，每个变化，都只是更新自己的，而不是全部更新【优化点】
    let dep = new Dep() // 给每一个属性 都加上一个具有发布订阅的功能
    Object.defineProperty(obj, key, {
      get () {
        // 创建watcher 时，会取到对应的内容，并且把watcher放到了全局上
        Dep.target && dep.addSub(Dep.target)
        return value
      },
      set: (newValue) => { // {{school:{name:'文龙'}}}  // school = {} // 赋值一个对象时再扩展
        if (newValue !== value) { // 小小优化:新值与老值不相等时，才重新赋值  
          this.observer(newValue) // 递归调用，赋值引用类型时，也是响应式的，限于对象，数组没有此功能
          value = newValue
          dep.notify()
        }
      }
    })
  }
}

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
      let { name, value: expr } = attr
      // console.log(name, value) // type text  ,  v-model school.name
      // 判断是不是指令 // v-
      if (this.isDirective(name)) { // 可能的情况 v-model  v-html v-bind
        // console.log(node) // <input type="text" v-model="school.name">
        let [, directive] = name.split('-') // 新添的模式  v-on:click
        let [directiveName, eventName] = directive.split(':')
        // console.log('****',node, expr,this.vm, eventName)  <button v-on:click="change">更新操作</button> change Vue {$el: "#app", $data: {…}} click
        // 需要调用不同的指令来处理
        CompileUtil[directiveName](node, expr, this.vm, eventName)
      }
    })
  }
  // 编译文本的
  compileText (node) {
    // 判断当前文本节点中内容是否包含  {{xxx}} {{aaa}}
    let content = node.textContent
    // console.log(content) // {{school.name}}   {{school.age}}
    if (/\{\{(.+?)\}\}/.test(content)) {
      // console.log('text:',content) // 找到所有的文本  比如:text: {{school.name}}
      // 文本节点
      CompileUtil['text'](node, content, this.vm) // {{a}} , {{b}}
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
    console.log(vm, expr)
    return expr.split('.').reduce((data, current) => {
      return data[current]
    }, vm.$data)
  },
  setValue (vm, expr, value) { // vm.$data  'school.name' = 文龙
    expr.split('.').reduce((data, current, index, arr) => {
      if (index === arr.length - 1) {
        return data[current] = value
      }
      return data[current]
    }, vm.$data)
    // 更新访问方式  原来访问方式是: vm.$data.school    现在变成 vm.school  即可  去掉了  $data这一层
  },
  // 解析v-model这个指令 // 视图更新则数据更新
  model (node, expr, vm) {
    // node是节点，expr是表达式，vm是当前实例，  // school.name  vm.$data
    // 给输入框赋予value属性，node.value = xxx
    let fn = this.updater['modelUpdater']
    // 给输入框加一个观察者 如果稍后数据更新了，会触发此方法，会拿新值 给输入框赋值
    new Watcher(vm, expr, newVal => {
      fn(node, newVal)
    })
    node.addEventListener('input', e => {
      let value = e.target.value // 获取用户输入的内容
      this.setValue(vm, expr, value)
    })
    let value = this.getValue(vm, expr) // 文龙
    // console.log(node,expr,vm)
    fn(node, value)
  },
  html (node, expr, vm) { // v-html="message"
    console.log(node, expr, vm)
    // node.innerHTML = xxx
    let fn = this.updater['htmlUpdater']
    new Watcher(vm, expr, (newVal) => {
      fn(node, newVal)
    })
    let value = this.getValue(vm, expr) // message 里面的内容
    fn(node, value)
  },
  getContentValue (vm, expr) {
    // 遍历表达式 将内容  重新替换成一个完整的内容 返回回去
    return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      // console.log(args)
      return this.getValue(vm, args[1])
    })
  },
  on (node, expr, vm, eventName) {
    node.addEventListener(eventName, (e) => {
      // alert(1) // 测试成功
      vm[expr].call(vm, e) // this.change
    })
  },
  text (node, expr, vm) { // expr => {{a}}  {{b}} {{c}}
    let fn = this.updater['textUpdater']
    let content = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      // console.log(args) // ["{{school.age}}", "school.age", 0, "{{school.age}}"]
      // 给表达式每 {{}} 都加上观察者
      new Watcher(vm, args[1], () => {
        fn(node, this.getContentValue(vm, expr)) // 返回了一个全的字符串
      })
      return this.getValue(vm, args[1])
    })
    fn(node, content)
  },
  updater: {
    htmlUpdater (node, value) { // 此处没有做防  xss攻击
      node.innerHTML = value
    },
    modelUpdater (node, value) {
      node.value = value
    },

    // 处理文本节点的
    textUpdater (node, value) {
      node.textContent = value
    }
  },
}

class Vue {
  constructor(options) {
    // this.$el  $data $options
    this.$el = options.el
    this.$data = options.data
    let computed = options.computed
    let methods = options.methods
    // 这个根元素  存在 编译模板
    if (this.$el) {
      // 把数据  全部转化成用Object.definedProperty来定义
      new Observer(this.$data)

      // 把数据获取操作  vm上的取值操作 都代理到 vm.$data

      // {{getName}} reduce vm.$data.getName
      for (let key in computed) { // 有依赖关系，数据
        Object.defineProperty(this.$data, key, {
          get: () => {
            return computed[key].call(this)
          }
        })
      }

      for (let key in methods) { // 遍历方法，成为响应式的
        Object.defineProperty(this, key, {
          get () {
            return methods[key]
          }
        })
      }

      // 把数据获取操作  vm上的取值操作 都代理到 vm.$data
      this.proxyVm(this.$data)

      new Compiler(this.$el, this)
    }
  }
  // 进步的地方
  // backbone  set () get ()  // 做的响应，使用时比较复杂，vue在使用上比较方便
  proxyVm (data) {
    for (let key in data) { // {school:{name,age}}
      Object.defineProperty(this, key, {// 实现可以通过vm取到对应的内容
        get () {
          return data[key] // 进行了转化操作
        },
        set (newVal) { // 设置代理方法
          data[key] = newVal
        }
      })
    }
  }
}