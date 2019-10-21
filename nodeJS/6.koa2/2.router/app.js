const koa = require('koa')
// require('koa-router') 返回的是一个函数
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')

const app = new koa()

// ctx 封装了request和response 可通过之访问request和response
// next 传入的将要处理的下一个异步函数
app.use(async (ctx, next)=>{
  // 处理下一个一步函数
  await next();

})

// router.get('/', async (ctx, next)=>{
//   var name = ctx.query.name || ''
//   ctx.response.body=`<h1>hello ${name}</h1>`
// })

// router.get('/:name', async (ctx, next)=>{
//   var name = ctx.params.name
//   ctx.response.body=`<h1>hello ${name}</h1>`
// })/**visit 
// * localhost:10086/?name=aucho
// * and
// * localhost:10086/aucho
// *  */ 


router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
      <form action="/signin" method="post">
          <p>Name: <input name="name" value="koa"></p>
          <p>Password: <input name="password" type="password"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`;
});

router.post('/signin', async (ctx, next) => {
  var
      name = ctx.request.body.name || '',
      password = ctx.request.body.password || '';
  console.log(`signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '12345') {
      ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
      ctx.response.body = `<h1>Login failed!</h1>
      <p><a href="/">Try again</a></p>`;
  }
});

app.use(bodyParser())
app.use(router.routes())

app.listen(10086)
console.log('link start')

