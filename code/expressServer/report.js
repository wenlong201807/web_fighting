let express = require('express')
let app = express()

let goods = {}

app.get('/report', (req, res) => {
  let name = req.query.name
  console.log('name:', name)
  if (goods[name]) {
    goods[name]++
  } else {
    goods[name] = 1
  }

  res.end('')
})

app.get('/toDbStore', () => {
  res.end(JSON.stringify(goods)) // 存储点击总量
})

app.listen(3001, () => {
  console.log('localhost:3001 is running...')
})