// var name = '极客时间'
// var type = 'global'
// function bar () {
//   var type = 'function'
//   function foo () {
//     console.log(type)
//   }
//   foo()
// }
// bar()

// var a = [];
// for(let i = 0;i<10;i++){
//   a[i]=function(){
//     console.log(i)
//   }
// };
// a[2]();
// console.log(a)
// 2
// [
//   [Function], [Function],
//   [Function], [Function],
//   [Function], [Function],
//   [Function], [Function],
//   [Function], [Function] 
// ]

var a = [];
for(var i = 0;i<10;i++){
  a[i]=function(){
    console.log(i)
  }
};
a[2](); // 10
console.log(a)
// [
//   [Function], [Function],
//   [Function], [Function],
//   [Function], [Function],
//   [Function], [Function],
//   [Function], [Function] 
// ]