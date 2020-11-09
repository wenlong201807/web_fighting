function Foo (property_num, element_num) {
  //添加可索引属性 
  for (let i = 0; i < element_num; i++) {
    this[i] = `element${i}`
  }
  //添加常规属性 
  for (let i = 0; i < property_num; i++) {
    let ppt = `property${i}`
    this[ppt] = ppt
  }
}
// var bar = new Foo(100, 10)

var a = { 1: "a", 2: "b", "first": 1, 3: "c", "second": 2 }
var b = { "second": 2, 1: "a", 3: "c", 2: "b", "first": 1 }
console.log(a)
console.log(b)