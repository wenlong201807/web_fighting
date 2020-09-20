/**
 * 每个知识点有两个例子，一个为了理解，一个实战使用
*/
import axios from 'axios'
let instance = axios.create()

// http://localhost:3000
// result = {headers,data} // 如果状态码不是200.则直接给报错，如何实现

// 请求拦截器
instance.interceptors.request.use(config => {
  if (config.url!.startsWith('http')) {  // ! 断言功能，如果没有，不执行，如果有，在执行 ！ 后面的代码
  // if (config.url!.indexOf('http') === -1) {  // ! 断言功能，如果没有，不执行，如果有，在执行 ！ 后面的代码
    config.url = 'http://localhost:3000' + config.url
  }
  return config
})

instance.interceptors.response.use(response => {
  if (response.status !== 200) {
    return Promise.reject(response)
  }
  return response.data
})

instance({
  url:'/api/users'
}).then(result => {
  console.log(result)
})