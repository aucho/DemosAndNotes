const http = require('http')

http
  .createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.end('request url is'+ req.url)
  }) 
  .listen(3000)