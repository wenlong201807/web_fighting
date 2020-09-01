const EventeMitter = require('events')
const context = require('./context')
const request = require('./request')
const response = require('./response')
const http = require('http')

class Application extends EventeMitter {
  constructor() {
    super()
    this.middlewares = []
    this.context = context
    this.request = request
    this.response = response
  }

  onerror (err, ctx) {
    if (err.code === 'ENOENT') {
      ctx.status = 404
    } else {
      ctx.status = 500
    }

    let msg = err.message || '项目启动失败'
    ctx.res.end(msg)
    this.emit('error', err) // 继承自 emit
  }
  responseBody (ctx) {
    let content = ctx.body
    if (typeof content == 'string') {
      ctx.res.end(context)
    } else if (typeof content === 'object') {
      ctx.res.end(JSON.stringify(context))
    }//还有其他很多情况
  }
  compose () {
    return async ctx => {
      function createNext (middleware, oldNext) {
        return async () => {
          await middleware(ctx, oldNext)
        }
      }
      let len = this.middlewares.length
      let next = async () => {
        return Promise.resolve() // 最后没有next() ,则返回一个promise
      }

      for (let i = len - 1; i >= 0; i--) {
        let currentMiddleware = this.middlewares[i]
        next = createNext(currentMiddleware, next)
      }

      await next()
    }
  }

  createContext (req, res) {
    let ctx = Object.create(this.context)
    ctx.request = Object.create(this.request)
    ctx.response = Object.create(this.response)
    ctx.req = ctx.request.req = req
    ctx.res = ctx.response.res = res
    return ctx
  }

  callback () {
    return (req, res) => {
      let ctx = this.createContext(req, res)
      let respond = () => this.responseBody(ctx)
      let onerror = err => this.onerror(err, ctx)
      let fn = this.compose()
      return fn(ctx).then(respond).catch(onerror)
    }
  }

  use (middleware) {
    this.middlewares.push(middleware)
  }

  listen (...args) {
    let server = http.createServer(this.callback())
    server.listen(...args)
  }
}

module.exports = Application