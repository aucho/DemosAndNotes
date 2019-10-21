//create a web server

var http = require('http')

var server = http.createServer()

//数据服务
// 发送请求
// 接收请求
// 处理请求
// 反馈(响应)


//监听客户端请求 自动触发request请求事件 然后处理回调函数
server.on('request',function(){
  console.log('received')
  //此时浏览器在等待
})

//绑定端口号，启动服务器
server.listen(10086, function(){
  console.log('server activated, 通过 http:localhost:10086 访问')
})