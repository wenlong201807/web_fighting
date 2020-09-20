// 简单工厂应用于jquery

// 联合类型的写法
interface jQuery{ // 此接口名字必须与对应的类名同名
  [index:number]:any // 任意的索引，值是任意值
}
class jQuery {
  public length :number
  constructor(selector: string) {
    let elements = Array.from(document.querySelectorAll(selector))
    let length = elements ? elements.length : 0
    this.length = length
    for (let i = 0; i < length; i++){
      this[i]= elements[i] // 有了联合类型，就不报错
    }
  }

  html(htmlText: string | undefined) {
    if (htmlText) {
      for (let i = 0; i < this.length; i++){
        this[i].innerHTML = htmlText
      }
    } else {
      return this[0].innerHTML
    }
  }
}

// 使用方式 
// 类型“Window & typeof globalThis”上不存在属性“$”。
// 如何给对象添加不存在的属性
// 这种是局部赋值，全局的话使用  global 
interface Window{ // 联合类型声明 (接口名必须与新添属性的上一级变量同名)
  $:any // 原来没有这个属性，认为添加这个属性即可
}

// 简单工厂就是函数里返回类的实例
window.$ = function (selector: string) {
  return new jQuery(selector)
}