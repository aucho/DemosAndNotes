const http = require('http')
const fs = require('fs')

http
  .createServer( function(req, res){
    if (req.url !== '/') 
      res.end('unknown request')
    else
      fs.readFile('8.跨域.html', 'utf-8', (err, dt)=>{
        if (err) return
        res.end(dt)
      })
  })
  .listen(12580, function(){
    console.log('link start again')
  })
