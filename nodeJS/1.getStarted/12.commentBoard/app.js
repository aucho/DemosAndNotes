//addCommand 界面 写评论 index 查看评论
var http = require('http')
var path = require('path')
var fs = require('fs')
var template = require('art-template')
var url = require('url')

var comments = [
  {
    title: '第一条评论',
    mainText: '大家好',
    time: new Date()
  },

]

http
  .createServer(function (req, res) {
    //  解析地址 获取不包含传值的相对请求路径
    pathname = url.parse(req.url).pathname
    //  获取解析成json对象的传值
    comObj = url.parse(req.url,true).query
    console.log(comObj)
    //  将comments对象里的内容渲染到html页面中
    if (pathname === '/')
      fs.readFile(path.resolve(__dirname, './views/index.html'), function (err, file) {
        if (err) return res.end('404')
        var hstr = template.render(file.toString(), {
          'comments': comments
        })
        res.setHeader('Content-type', 'text/html;charset = utf-8')
        res.end(hstr)
      })
      // 评论页
    else if (pathname === '/post')
      fs.readFile(path.resolve(__dirname, './views/addComments.html'), function (err, file) {
        if (err) return res.end('404')
        res.setHeader('Content-type', 'text/html;charset = utf-8')
        res.end(file)
      })
      //接收到提交表单信息
    else if (pathname === '/postComments')
    {
      comments.push({
        title: comObj.title,
        mainText: comObj.mainText,
        time: new Date()
      })
      //接收post表单后 重定向>
      //设置状态码为302  在相应头 location中确定位置
      res.statusCode = 302
      res.setHeader('Location', '/')
      res.end()
    }
    else
      res.end('404')

  })
  .listen(10086, function () {
    console.log('link start')
  })