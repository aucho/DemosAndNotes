/**
 * app.js 入口模块
 * 创建服务
 * 相关配置
 *  模板引擎
 *  body-parser解析表单请求
 *  静态资源服务
 * 挂载路由
 * 监听服务端口
 */
var express = require('express')
var bodyParser = require('body-parser')
var router = require('./router.js')

var app = express()

// 静态资源服务
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

// 模板引擎
app.engine('html', require('express-art-template'))

// post解析
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//挂载路由
app.use(router)

app.listen(10086, function(){
  console.log('link start')
})
