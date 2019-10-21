const http = require('http')
const fs = require('fs')
const querystring = require('querystring')

server = http.createServer()

server.on('request',function(req, res){
  var str = ''
  if (req.url === '/')
    fs.readFile('./3.http.html','utf-8',function(err, data){
      res.end(data)
    })
  if (req.url === '/a')
    // res.end('alert("aucho")')
    req.on('data',dt => { str += dt })
    req.on('end', ()=>{
      console.log(str)
      var json = querystring.parse(str)
      console.log(json)
      res.end()
    })
    
})

server.listen(10086, function(){
  console.log('link start')
})