
let aaa = {
  k: 1, next: {
    k: 2, next: {
      k: 3, next: {
        k: 4, next: null
      }
    }
  }
}
const kk = () => {
  let i = 0
  let b = aaa
  while (b.next) {
    // fn(arr[i])
    console.log(i, b.k)
    b = b.next
    i++
  }
}
// kk()
// kk.call(null)

let t = {yy:'yy'}
console.log(t.call(null))

const yy = (obj) => {
  if (!obj.next) {
    return
  }
  console.log(obj.k)
  yy(obj.next)
}

// yy(aaa)