let proto = {} // 将来要暴露出去的

function delegateSet (property, name) {
  // 只是为了适应较低版本的浏览器
  proto.__defineSetter__(name, function (val) {
    this[property][name] = val
  }) 
}
function delegateGet (property,name) {
  // 只是为了适应较低版本的浏览器
  proto.__defineGetter__(name, function () {
    // console.log('====',property,name)
    return this[property][name]
  }) 
}

let requestSet = []
let requestGet = ['query']

let responseSet = ['body','status']
let responseGet = responseSet

// requestSet.forEach((ele) => {
//   delegateSet('request',ele)
// })
// requestGet.forEach((ele) => {
//   delegateGet('request',ele)
// })
// responseSet.forEach((ele) => {
//   delegateSet('response',ele)
// })
// responseGet.forEach((ele) => {
//   delegateGet('response',ele)
// })

module.exports= proto