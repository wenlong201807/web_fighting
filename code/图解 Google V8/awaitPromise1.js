
function NeverResolvePromise(){
  return new Promise((resolve, reject) => {})
}
async function getResult() {
  let a = await NeverResolvePromise()
  console.log(a)
}
getResult()
console.log(0)

// 输出结果
// 0