
// let aa = new Array(10000000).fill(Math.floor(Math.random() * 1000000)).floor(Math.random() * 1000000)
// console.log(aa)
// console.log(Array.apply(null, Array(30)).map(() => Math.floor(Math.random() * 1000000) >= 1000000 ? Math.floor(Math.random() * 1000000) : Math.floor(Math.random() * 1000000).padStart(6, '0')))

// let bb = Array.apply(null, Array(Number.MAX_SAFE_INTEGER)).map(() => Math.floor(Math.random() * 1000000)).filter(item => /^\d{6}$/.test(item)).slice(0,10)
// let bb = Array.apply(null, Array(200000)).map(() => Math.floor(Math.random() * 1000000)).filter(item => /^\d{6}$/.test(item))
// console.log(bb)
// console.log(bb.length)
// console.log(1 << 31,Math.abs(1 << 31))
console.time('111')
let bb = []
let len = Math.abs(1 << 31)
let targetNumber = 1000000
let i = 0
while (++i <= len && bb.length<=targetNumber) {
  let aa = Math.floor(Math.random() * 1000000)   
  let isSix = /^\d{6}$/.test(aa)
  isSix && bb.push(aa)
}
// console.log(bb)
console.timeEnd('111')


console.time('222')
Array.from({ length: 1000000 }, () => Math.random().toFixed(6).slice(-6))
console.timeEnd('222')