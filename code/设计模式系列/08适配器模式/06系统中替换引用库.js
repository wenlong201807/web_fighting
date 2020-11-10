// let $ = require('jquery')

// fetch新加入的，替换原来的jquery
window.$ = {
  ajax (options) {
    return fetch(options.url, {
      method: options.type || 'GET',
      body:JSON.stringify(options.data || {})
    })
    .then(res => res.json())
  }
}

// 用户在原有项目中已经使用的方式
$.ajax({
  url,
  type: 'POST',
  dataType: 'json',
  data:{id:1}
}).then(data => {
  console.log(data)
})