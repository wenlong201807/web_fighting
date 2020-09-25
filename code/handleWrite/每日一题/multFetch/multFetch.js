const fetch = require("node-fetch");
class sendRequest{
  constructor(urls, max, callback) {
    this.urls = urls
    this.max = max
    this.callback = callback
    this.result = []
    this.sendFetch()
  }
  async sendFetch () {
    let i = 0
    let arr = []
    while (i < max) {
      if (this.urls.length > 0) {
        arr.push(fetch(this.urls.shift()).then(res =>res.json()))
        i++
      } else {
        break
      }
    }
    console.log('arr:',arr)
    let values = await Promise.all(arr)
    console.log('values:',values)
    this.result.push(...values)
    if (this.urls.length > 0) {
      this.sendFetch()
    } else {
      this.callback(this.result)
    }
  }
}

let urls = ['http://localhost:3000/test',,'http://localhost:3000/test',,'http://localhost:3000/test',]
let max = 3
let callback = (result) => {console.log(JSON.stringify(result))}
new sendRequest(urls,max,callback)
