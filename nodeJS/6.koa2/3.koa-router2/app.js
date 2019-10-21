const koa = require('koa')
// require('koa-router') 返回的是一个函数
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser') 
const controller = require('./controllers/controller')

const app = new koa()

app.use(bodyParser())
app.use(router.routes())

app.listen(10086)
console.log('link start')

