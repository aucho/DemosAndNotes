const Vue = require('vue')
const app = new Vue({
  template: '<h1>hello</h1>'
})

const render = require('vue-server-renderer').createRenderer()

render.renderToString(app, (err,html)=>{
  if (err) throw err
  console.log(html)
})

// 未传入回调函数的情况下 返回Promise:
render.renderToString(app)
  .then(html=>{
  console.log(html)
}).catch(err=>{
  console.log(err)
})