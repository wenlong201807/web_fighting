// 性能加倍，消耗减半
// vue3 响应式原理：利用proxy对象对数据拦截  ，proxy可以支持数组

// 依赖收集的核心：创建getter里面的key和响应函数之间的映射关系
// 1.设置中间对象数组保存当前响应函数
// activeXXXXStack = []
// 2.如何保存key和fn之间关系
// {target:{key:[effect1,effect2,...]}} // 可能有多个effect


// 避免重复代理，即多次调用相同的内容，执行多次（只要执行一次才是需要的）

// 使用弱引用，避免内存泄漏 
const toProxy = new WeakMap() // 形如：obj:observed
const toRow = new WeakMap() // 形如：observed:obj
// 后续需要使用到toRow对象，要把代理对象(observe)脱壳转换成原始对象(obj)

// 为什么要写正反缓存
/**
 * 1.用户乱写代码，避免重复执行逻辑
 * 2.如果传入的是纯对象，则使用正缓存
 * 3.如果传入的响应对象，则使用反缓存
 *  原始对象（纯对象）
 *  proxy对象（响应对象）
*/

function isObject (obj) {
  return typeof obj === 'object' || obj === null
}

function hasOwn (obj, key) {
  return obj.hasOwnProperty(key)
}

function reactive (obj) {
  // 健壮性
  if (!isObject(obj)) {
    return obj
  }

  // 查找缓存，避免重复
  if (toProxy.has(obj)) {
    return toProxy.get(obj)
  }
  // 传入obj就是代理对象
  if (toRow.has(obj)) {
    return obj
  }

  // 
  const observe = new Proxy(obj, {
    get (target, key, receiver) {
      // 访问 // 考虑安全性，优雅的访问方式
      const res = Reflect.get(target, key, receiver) // 如果有错误，reflect内部自行处理，不会崩溃
      console.log(`获取${key}: ${res}`)

      // 依赖收集
      track(target, key)

      return isObject(obj) ? reactive(res) : res  // 动态的变化，此代码在运行时出发，解决 // 4.嵌套对象
    },
    set (target, key, value, receiver) {
      // 新增和更新
      // 对应trigger函数中的添加和删除里面的数组的特殊情况
      const hadKey = hasOwn(target, key) // 如此区分开是添加还是修改  => ADD 或 SET
      const oldVal = target[key]
      const res = Reflect.set(target, key, value, receiver) // 如果有错误，reflect内部自行处理，不会崩溃
      // console.log(`设置${key}: ${res}`)
      // trigger (target, 'SET', key)

      // 对应的变化，需要做区别对待
      if (!hadKey) {
        console.log(`新增${key}:${value}`)
        trigger(target, 'ADD', key)
      } else if (oldVal !== value) {
        console.log(`设置${key}:${value}`)
        trigger(target, 'SET', key)
      }
      return res
    },
    deleteProperty () {
      // 删除
      const hadKey = hasOwn(target, key)
      const res = Reflect.deleteProperty(target, key) // 如果有错误，reflect内部自行处理，不会崩溃
      // console.log(`删除: ${res}`)
      // trigger(target, 'DELETE', key)
      // key存在并且删除成功
      if (res && hadKey) {
        console.log(`删除${key}:${res}`)
        trigger(target, 'DELETE', key)
      }
      return res
    }
  })

  // 缓存
  toProxy.set(obj, observe)
  toRow.set(observe, obj)

  return observe
}

// 
const activeReativeEffectStack = []

// 依赖收集的执行
// 基本结构  {target:{key:[eff1,eff2,...]}}
let targetsMap = new WeakMap() // 弱引用，避免内存泄漏
function track (target, key) {
  // 从栈中获取响应函数
  const effect = activeReativeEffectStack[activeReativeEffectStack.length - 1]
  if (effect) {
    let depsMap = targetsMap.get(target)
    if (!depsMap) {
      // 首次访问taget
      depsMap = new Map()
      targetsMap.set(target, depsMap)
    }

    // 存放key
    let deps = depsMap.get(key)
    if (!deps) {
      deps = new Set()
      depsMap.set(key, deps)
    }

    if (!deps.has(effect)) {
      deps.add(effect)
    }
  }
}


function effect (fn) {
  // 1.异常处理
  // 2.执行函数
  // 3.防止到activeReativeEffectStack

  const rxEffect = function (...args) { // 获取所有参数
    try {
      activeReativeEffectStack.push(rxEffect)
      return fn(...args) // 执行函数出发依赖收集 // 展开所有参数
    } finally {
      activeReativeEffectStack.pop()
    }
  }

  rxEffect() // 默认立即执行
  return rxEffect
}

// 触发target.key对应响应函数 
// 数据发生变化的时候触发此函数（新增和更新，删除的时候触发）
function trigger (target, type, key) {
  // 获取依赖表
  const depsMap = targetsMap.get(target)
  if (depsMap) {
    // 获取响应函数集合
    const deps = depsMap.get(key) // 里面存放着所有需要执行的回调函数
    const effects = new Set() // 处理特殊情况，主要是数组的问题 (在添加或者删除的时候，数组的长度会改变，需要额外处理)
    // 进而导致 reactive函数里面的 set会多次触发
    if (deps) {
      // 执行所有响应函数
      deps.forEach(effect => {
        // effect()
        effects.add(effect)
      })
    }

    // 数组新增或删除
    if (type === 'ADD' || type === 'DELETE') {
      if (Array.isArray(target)) {
        const deps = depsMap.get('length')
        if (deps) {
          deps.forEach(effect => {
            effects.add(effect)
          })
        }
      }
    }
    // 获取已存在的Dep Set执行 // 将所有的副作用函数执行一遍
    effects.forEach(effect => effect())
  }
}

const data = { foo: 'foo', bar: { a: 1 } }
const react = reactive(data)
// obj  中包裹了proxy，里面的添加属性，删除属性，修改属性，都是可以的
// 但是，里面obj里面嵌套数组，对象的话，就没有了更新，添加，删除功能，需要递归判断// 4嵌套对象

// 1.获取
// react.foo // ok
// 2.设置已存在属性
// react.foo = 'foooooooo'
// 3.设置不存在属性
// react.baz = 'bazzzzzz'
// 4.嵌套对象
// react.bar.a = 10

// 避免重复代理
// console.log(reactive(data) === react) // true -> 则缓存成功
// reactive(react)

// 测试effcet
effect(() => {
  console.log('react发生了变化...:', react.foo)

  // dom操作
  // 更新页面，或者更新其他的值

})

react.foo = 'fooooooo'