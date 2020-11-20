//js中，基本类型6中，null也是原始类型，或者叫做 基本类型

// number  string  boolean  null  undefined  symbol

// 基本类型的内容是无法被修改的,只能读取 💡💡💡 存储在栈中 
// 此区别于引用类型，💡💡💡引用类型是可修改，可读取💡💡💡 存储在堆中
var str = 'wenlong'
str[0] = 'y' // 不生效
console.log(str) // wenlong
console.log('读取：',str[0]) // w