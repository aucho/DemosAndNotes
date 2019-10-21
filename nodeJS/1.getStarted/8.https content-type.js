var http = require('http')
var server = http.createServer()

server.on('request',function(req,res){
  //node默认发送utf-8编码数据 浏览器默认使用操作系统的编码 
  //中文操作系统为GBk

  //text/plain为普通文本
  //text/html 为html文本
  if (req.url === '/')
  {
    res.setHeader('Content-Type','text/plain; charset=utf-8')
    res.end('你好弄得捷爱斯')
  }
  else
  {
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.end('<a onclick="location = \'./\'">点这里</a>')
  }

})

server.listen(10086, function(){
  console.log('server activate    访问localhost:10086/agsf')
})