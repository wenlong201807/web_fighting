

// 1. 抽象化 



let arr = [1, 2, 3]
const forEach = function (arr, fn) {
  // for (let i = 0; i < arr.length; i++) {
  //   fn(arr[i])
  // }

 
}


// forEach(arr, item => {
//   console.log(item)
// })

// // 原生借鉴
// arr.forEach(item => {
//   console.log(item)
// })

// let arr2 = [true, true, true]

// let res = arr2.every(item => item)
// console.log('res', res)

// const myEvery = (arr, fn) => {
//   let result = true
//   for (let i = 0; i < arr.length; i++) {
//     result = result && fn(arr[i])
//   }
//   return result
// }

// let res2 = myEvery(arr2, item => item)
// console.log('res2', res2)