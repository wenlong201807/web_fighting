

// API接口配置

/*
 let modal = ModalPlugin({
   title: '系统提示', // 提示的标题信息
   template: null, // 内容模板，字符串/模板字符串，dom元素对象
   drag: true, // 是否开启拖拽
   buttons: [{ // 自定义按钮组信息
     text: '确定',
     click () { // 点击触发的回调函数
       // this : 当前实例
     }
   }]
 })

 modal.open() // 打开
 modal.close() //关闭

 基于发布订阅，实现回调函数的监听
 modal.on('init/open/close/dragstart/dragmove/dragend',[func])
 modal.off(...)

*/

(function () {
  // 封装插件的时候，我们需要支持n多个配置项，有点配置项不传递，却有默认值，
  // 此时，我们千万不要一个个定义形参
  // 而是使用对象的方式
  function ModalPlugin (options) {
    return new init(options)
  }

  ModalPlugin.prototype = {
    constructor: ModalPlugin,

    // 相当于大脑，可以控制先干什么，再干什么【命令模式】
    init () {
      this.createDom()
    },
    // 创建dom结构
    createDom () {
      // TODO:44:42
    }
  }

  // 内部定义一个方法，并将此方法的原型对象，指向另一个原型对象，
  // 在外面调用的模式可以变成，普通函数调用方法，却可以实现，创建类的实例调用方式
  function init (options = {}) {
    // 所有实际的功能，都放到这里来
    // 参数初始化：传递进来的配置项替换默认的配置项
    options = Object.assign({ // 此处为默认值
      title: '系统提示', // 提示的标题信息
      template: '', // 内容模板，字符串/模板字符串，dom元素对象
      drag: true, // 是否开启拖拽
      buttons: []
    }, options)

    // 有属性，有方法，需要对外暴露 --> 
    // 把信息挂载到实例上：在原型等各个方法中，只要this是实例，都可以调用到这些信息
    this.options = options
    this.init() // 此init对应ModalPlugin方法中定义的init(){}


    console.log('init...')
  }
  // 
  init.prototype = ModalPlugin.prototype




  // 浏览器直接导入，这样方法是暴露到全局的
  window.ModalPlugin = ModalPlugin

  // 健壮性考虑

  // 还需要支持ES6Module/CommonJS模块导入规范
  // 加上这个判断条件，浏览器可以直接调用，webpack环境中也可以调用
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = ModalPlugin // CommonJS规范导出 (webpack环境下才支持，浏览器直接不能使用)
  }
})()

// 浏览器直接调用**两者达到一致的效果***实现目的
ModalPlugin() // 而不用  new ModalPlugin()
// new ModalPlugin() // 两种方式都可以  ***稍微有点不习惯，直接调用方法的操作，更符合js的操作