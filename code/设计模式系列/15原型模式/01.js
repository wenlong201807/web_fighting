function Person (name) {
  this.name = name
  this.getName = function () {
    console.log(this.name)
  }
}

Person.prototype.setName = function (name) {
  this.name = name
}

let p1 = new Person('wenlong')
let p2 = new Person('wenlong')

console.log(p1) // Person { name: 'wenlong', getName: [Function] }
console.log(p2) // Person { name: 'wenlong', getName: [Function] }
console.log(p1.getName === p2.getName) // false

console.log(p1.setName === p2.setName) // true