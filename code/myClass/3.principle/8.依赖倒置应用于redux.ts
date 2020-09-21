// 依赖倒置应用于redux
// 依赖接口，而不依赖具体实现

import {createStore,AnyAction} from 'redux'
let store = createStore(state => state)

interface MyAction extends AnyAction{
  age:number
}

class My2Action implements AnyAction{
  [extraProps: string]: any
  type: any
  
}

// 自己扩展父类 
// 能传父类的地方，也可以传子类
let action1:MyAction = {type:'increment',age:10}
let action2:My2Action = {type:'increment',age:10}
// let action:AnyAction = {type:'increment'}
store.dispatch(action1)
store.dispatch(action2)