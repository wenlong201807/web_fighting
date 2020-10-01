// 实现负数索引

const negativeArray = arr => new Proxy(arr, {
  get: (target, prop, receiver) => {
    console.log(target, prop, receiver)
    let aa = Reflect.get(target, +prop < 0 ? +prop + target.length : +prop, receiver)
    return aa
  }
})


const ar = negativeArray([1, 2, 3, 4])
// console.log(ar[1])
// console.log(ar[-1])