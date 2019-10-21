//create a web server

var http = require('http')

var server = http.createServer()

//数据服务
// 发送请求
// 接收请求
// 处理请求
// 反馈(响应)


//接收到客户端请求 自动触发request请求事件 然后处理回调函数
    // 回调函数接收两个参数
    // request: 获取客户端的信息
    // require：给客户端发送相应消息
server.on('request',
  function(request,response)
  {
    //获取请求路径
    console.log('浏览器请求路径:  ' + request.url )

    //write可以给客户端相应数据 write可以使用多次 但必须用end 结束响应否则客户端将一直等待    
    response.write('hello, ')
    response.write('i am nodejs')
    response.end()

  })

//绑定端口号，启动服务器
server.listen(10086, function(){
  console.log('server activated, 通过 localhost:10086 访问')
})