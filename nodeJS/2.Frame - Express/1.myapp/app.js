var express = require('express')

//createServer()
var app = express() 
app.get('/',function(req,res){
  res.send(`<h3>你好 express</h3>`)
})

// 提供静态资源目录 访问/pub 获取public文件夹里的东西
app.use('/pub/', express.static('./public/'))

//server.listen
app.listen(10086, function(){
  console.log('link start')
})