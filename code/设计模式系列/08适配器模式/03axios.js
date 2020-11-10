
// 参数的适配
// 返回值的适配

function ajax (options) {
  let defaultOptions = {
    method: 'GET',
    dataType:'json'
  }

  for (let attr in options) {
    defaultOptions[attr] = options[attr] || defaultOptions[attr]
  }

  console.log(defaultOptions)
}

function transform (str) {
  return JSON.parse(str)
}

ajax({
  url: 'localhost:3000/list',
  method: 'POST',
  success (str) {
    // 服务器返回来的是一个纯的JSON的字符串
    let result = transform(str)
    console.log(result)
  }
})
// { method: 'POST', dataType: 'json', url: 'localhost:3000/list' }