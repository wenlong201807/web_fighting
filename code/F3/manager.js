// pm2 的核心代码
var cluster = require('cluster')
var numCPUs = require('os').cpus().length

if (cluster.isMaster) {
  console.log(numCPUs)
  for (var i = 0; i < numCPUs; i++){
    var worker = cluster.fork()
  }
} else {
  require('./app.js')
}

// pm2 官网  https://pm2.io/
// https://github.com/Unitech/pm2  PM2源码

/**
 * 我们要从PM2中学什么？
 * linux进程管理的方法
 * linux创建进程的两种方式 fork 和 exec
 * 父子进程的管理机制
 * PM2实用入门指南
 * https://www.cnblogs.com/chyingp/p/pm2-documentation.html
*/