// vue2 响应式原理 ：Object.defineProperyt() // 此方法只支持对象，不支持数组，需要额外重写
// vue2 数组响应式原理：？覆盖可以修改数据的7个方法
// 从数组原型中获取这7个方法，并覆盖为可以发送更新通知的函数实现
// ['push','pop','shift','unshift','reserve','sort','splice']

const originalProto = Array.prototype
const arrayProto = Object.create(originalProto)

const sevenArr = ['push', 'pop', 'shift', 'unshift', 'reserve', 'sort', 'splice']
sevenArr.forEach(
  method => {
    arrayProto[method] = function () {
      // 做之前的事情
      originalProto[method].apply(this,arguments)

      // 通知更新 // 自己额外添加的事情
      // 此验证了，使用数组时，不能使用索引，而需要使用vue.$Set()。或者只能使用上述7个方法
      notifyUpdate()
      // 
    }
  }
)
// 思想：递归遍历传递obj，定义每一个属性的拦截

function observe (obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  // 判断类型，如果是数组，则替换他的原型 // 解决 ：添加数组更新操作// 4.数组
  if (Array.isArray(obj)) {
    Object.setPrototypeOf(obj,arrayProto)
  } else {
    const keys = Object.keys(obj)
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index]
    //对obj每一key执行拦截
    defineReactive(obj, key, obj[key])
  }
  }

  
}

function defineReactive (obj, key, val) {
  // 递归遍历  
  observe(val)// 解决2.嵌套属性更新
  // val实际上是一个闭包
  Object.defineProperty(obj, key, {
    get () {
      return val
    },
    set (newVal) {
      if (newVal !== val) {
        // val可能是对象
        observe(newVal) // // 3.赋值是对象
        notifyUpdate()
        val = newVal
      }
    }

  })
}

function notifyUpdate () {
  console.log('更新了...')
}

const data = { foo: 'foo' , bar: { a: 1 }, tua: [1, 2, 3]}
observe(data)
// 1.普通更新
// data.foo = 'foooooooo'
// 2.嵌套属性更新
// data.bar.a = 10
// data.dong = 'lalala' // no ok 原始定义的数据中，没有dong这个属性
// 3.赋值是对象 // 引用方式 ，添加没有响应式的对象
// data.bar = {a:10}
// 4.数组
// data.tua.push(4)


// 问题分析：
// 1.需要响应化的[数据较大]，递归遍历性能不好、消耗较大
// 2.新增或删除属性无法监听  // data.dong = 'lalala' // no ok 原始定义的数据中，没有dong这个属性
// 3.数组响应化需要额外实现  // 4.数组
// 4.修改语法有限制