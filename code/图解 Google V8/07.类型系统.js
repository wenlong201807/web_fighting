var Obj = {
  toString () {
    return '200'
  },
  valueOf () {
    return 100
  }
}
console.log(Obj + '3')

// var Obj = {
//   toString () {
//     return new Object()
//   },
//   valueOf () {
//     return new Object()
//   }
// }
// console.log(Obj + 3)