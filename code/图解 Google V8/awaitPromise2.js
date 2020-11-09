
function HaveResolvePromise () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(100)
    }, 0);
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

// 输出结果
// 0  
// 1  
// 3  
// 100
// 2 