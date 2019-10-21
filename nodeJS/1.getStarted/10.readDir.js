var http = require('http')
var fs = require('fs')
var path = require('path')

var server = http.createServer()
server.on('request', function (req, res) {
  console.log('received')
  var content = ''
  res.setHeader('Content-Type', 'text/html;charset = utf-8')
  // 如果没有index.html文件显示showList目录
  fs.readFile(path.resolve(__dirname, './resource/index.html0'), function (err, dataIndex) {
    if (err)
      fs.readdir(path.resolve(__dirname, './resource/'), function (err, file) {

        if (err) return res.end('error, cannot read file dict')
        // 获取目录下文件名 整合
        file.forEach(function (item) {
          content += `<li>${item}</li>`
        })
        // 读取showList文档,将列表项替换
        fs.readFile(path.resolve(__dirname, './resource/showList.html'), function (err, dataList) {
          var li = dataList.toString().replace('@listTag', content)
          li = li.replace('@address', path.resolve(__dirname, './resource'))
          console.log(li)
          res.end(li)
        })
      })
    // 有index的话 直接显示index
    else
      res.end(dataIndex)
  })
})

server.listen(10086, function () {
  console.log('activated')
})