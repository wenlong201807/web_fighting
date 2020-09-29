function objectFlat (obj = {}) {
  const res = {}
  function flat (item, preKey = '') {
    console.log('---:',Object.entries(item))
    Object.entries(item).forEach(([key, val]) => {
      console.log('key-val:',key, val)
      const newKey = preKey ? `${preKey}.${key}` : key
      if (val && typeof val === 'object') { // val不为空且是对象
        flat(val, newKey)
      } else {
        res[newKey] = val // 最后为一层结构的
      }
    })
  }
  flat(obj)
  return res
}

// 测试
// const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } } // { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, 'f.g': 2 }
const source = { a: { b: { c: 1, d: [2] }, e: 3 }, f: { g: 2 } }  // { 'a.b.c': 1, 'a.b.d.0': 2, 'a.e': 3, 'f.g': 2 }  
console.log(objectFlat(source)); 