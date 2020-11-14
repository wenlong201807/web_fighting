let express = require('express')
let path = require('path')
let app = express()

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'09bridge2.html'))
  // res.sendFile(path.join(__dirname,'09bridge.html'))
})

app.get('/user/:id', function (req, res) {
  let id = req.params.id
  res.json({id,name:'wenlongzhu'+id})
})

app.listen(8080, () => {
  console.log('localhost:8080 is running...')
})