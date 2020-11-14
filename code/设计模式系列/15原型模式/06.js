function Foo () {
  this.a = 10
}

Foo.prototype.b = 20

let f = new Foo()

console.log(f.a,f.b) // 10 , 20
console.log(f.hasOwnProperty('a')) // true
console.log(f.hasOwnProperty('b')) // false
let a = Object.prototype