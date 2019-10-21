const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')

http
  .createServer(function(req, res){
    var pathname = url.parse(req.url).pathname

    if ( pathname === '/')
    {
      fs.readFile(/*'6.封装ajax.html'*/'7.jQuery.html','utf-8',function(err, data){
        if (err) return
        res.end(data)
      })
    }
    //处理get请求
    if ( pathname === '/get')
    {
      let param = url.parse(req.url).query
      console.log(querystring.parse(param))
      res.setHeader('Content-Type', 'application/json')
      res.end( JSON.stringify({info:'receive get'} ) )
    }
    // 处理post请求
    if ( pathname === '/post')
    {
      var param = '' 
      req.on('data', dt => { param += dt } )
      req.on('end', () => { 
        param = querystring.parse(param)
        console.log(param)
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({info:'receive post'}))        
        })
    }

    // JSONP
    if ( pathname === '/js')
    {
      res.setHeader('Content-Type', 'application/json')
      res.end('divSrc({ name: "jack", id: 0 })')
    }
    // CORS
    if (pathname === '/cors')
    {
      console.log(querystring.parse(url.parse(req.url).query))
      res.setHeader('Access-Control-Allow-Origin','*')
      //res.setHeader('Content-Type', 'application/json')
      res.end( '{ info: "this is port 10086, greetings 12580r"}')
    }

  })
  .listen(10086, function(){
    console.log('link start')
  })