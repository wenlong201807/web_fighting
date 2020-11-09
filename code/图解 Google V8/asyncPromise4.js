
function HaveResolvePromise () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(100)
    }, 0);
    // resolve(100)
  })
}
async function getResult () {
  console.log(1)
  let a = await HaveResolvePromise()
  console.log(a)
  console.log(2)
}
console.log(0)
getResult()
console.log(3)