
function strToArray1(str) {
  let i = 0
  const len = str.length
  let arr = new Uint16Array(str.length)
  for (; i < len; ++i) {
    arr[i] = str.charCodeAt(i)
  }
  return arr;
}


function foo1() {
  let i = 0
  let str = 'test V8 GC'
  while (i++ < 1e5) {
    strToArray1(str);
  }
}

console.time('foo1')
foo1() // 13.352ms
console.timeEnd('foo1')

//
// Scavenge 1.2 (2.4) -> 0.3 (3.4) MB, 0.9 / 0.0 ms  (average mu = 1.000, current mu = 1.000) allocation failure

