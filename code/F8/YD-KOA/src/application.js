const EventeMitter = require('events')
const http = require('http')

class Application extends EventeMitter{
  constructor() {
    super()
    this.middlewares = []
  }

  onerror (err,ctx) {
    
  }
  respondBody (ctx) {
    
  }
  compose () {
    return async ctx => {
      function createNext (middleware, oldNext) {
        return async () => {
          await middleware(ctx,oldNext)
        }
      }
      let len = this.middlewares.length
      let next = async () => {
        return Promise.resolve() // 最后没有next() ,则返回一个promise
      }

      for (let i = len - 1; i >= 0; i--){
        let currentMiddleware = this.middlewares[i]
        next = createNext(currentMiddleware,next)
      }

      await next()
    }
  }

  callback () {
    return (req, res) => {
      let ctx = ''
      let respond = () => this.respondBody(ctx)
      let onerror = err =>this.onerror(err,ctx)
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