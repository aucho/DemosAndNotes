const koa = require('koa')

const app = new koa()

// ctx 封装了request和response 可通过之访问request和response
// next 传入的将要处理的下一个异步函数
app.use(async(ctx, next)=>{
  // 处理下一个一步函数
  await next();
  ctx.response.type = 'text/html'
  // 简写  ctx.type ='text/html'
  ctx.response.body = '<h1>hello aucho</h1>'
})

app.listen(10086)
console.log('link start')