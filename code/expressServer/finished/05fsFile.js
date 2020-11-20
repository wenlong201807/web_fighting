const fs = require('fs')

function promisify (fn) {
  return function (...args) {
    return new Promise(function (resolve, reject) {
      fn(...args, function (err, data) {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
        console.log(data)
      })
    })
  }
}

// 后面的内容是以() 开头的。需要特别注意  ; 号是 分割效果
let readFile = promisify(fs.readFile);

(async function read () {
  let one =  await readFile('./1.txt','utf8')
  let two =  await readFile('./2.txt','utf8')
  let three =  await readFile('./3.txt','utf8')
  console.log(one,two,three)
})()
