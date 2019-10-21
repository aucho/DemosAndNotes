var fs = require('fs')
var path = require('path')
var http = require('http')

var server = http.createServer()

server.on('request', function (req, res) {
  console.log('recerive')
  if (req.url === '/') {
    // //  通过读取html文件的内容 以字符串或字节流的形式传输
    // fs.readFile(path.resolve(__dirname, './resource/index.html'), function (err, data) {
    //   res.setHeader('Content-Type', 'text/html;charset=utf-8')
    //   res.end(err ? 'an error occurs' : data.toString() /*可以直接传data*/)
    // })
    //  通过读取jpg文件的内容 以字节流的形式传输
    fs.readFile(path.resolve(__dirname, './resource/123.jpg'), function (err, data) {
      res.setHeader('Content-Type', 'image/jpeg')
      res.end(err ? 'an error occurs' : data)
    })
  }
  else{
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('<h2 align = "center" style = "margin-top: 20vh">404 not found<h2>')
  }

})

server.listen(10086, function () {
  console.log("ok")
})