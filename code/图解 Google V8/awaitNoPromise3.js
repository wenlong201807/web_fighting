
function ResolvePromise () {
  console.log('normal...function')
  return new Promise((resolve, reject) => {
    // 此处有无定时器，输出结果一样
    // resolve('retrun Promise string')
    setTimeout(() => {
      resolve('retrun Promise string')
    },6)
  })
}
async function getResult () {
  console.log('before...await')
  let a = await ResolvePromise()
  console.log('after...await...up')
  console.log(a)
  console.log('after...await...down')
}
console.log('normal...global...start')
getResult()
console.log('normal...global...end')

// 输出结果
// normal...global...start
// before...await
// normal...function
// normal...global...end
// after...await...up   
// retrun Promise string
// after...await...down