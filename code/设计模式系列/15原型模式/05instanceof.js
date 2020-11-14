
function MyinstanceOf(L, R) {//L 表示左表达式，R 表示右表达式
  var O = R.prototype;
  L = L.__proto__;
  while (true) { 
    if (L === null) 
      return false; 
    if (O === L)  // 这里重点：当 O 严格等于 L 时，返回 true 
      return true; 
    L = L.__proto__; 
  } 
}
 
console.log(MyinstanceOf(Object,Function))
console.log(MyinstanceOf(Function,Object))
console.log(MyinstanceOf(Function,Function))

// console.log(Object instanceof Function) // true
// console.log(Function instanceof Object) // true
// console.log(Function instanceof Function) // true

// 详细资料 https://www.cnblogs.com/yalong/p/10534858.html