const vue = require('vue')
const render = require('vue-server-renderer')
const server = require('express')()
const fs = require('fs')

const renderer = render.createRenderer({
  template: fs.readFileSync('./3.页面模板.html','utf-8')
})

server.get('*', (req,res)=>{
  var app = new vue({
    data:{
      url: req.url
    },
    template: `<h2>url:{{url}}</h2>`
  })

  var context = {
    title:'lalala',
    name:'aucho',
    meta:`<meta ...>
          <meta ...>`
  }

  renderer.renderToString(app,context,(err, html)=>{
    if (err) throw err
    res.end(html)
  })
}).listen(10086,()=>{
  console.log('link start')
})

