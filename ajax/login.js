const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
http.
  createServer((req, res) =>{
    // 主页渲染
    if (req.url === '/')
      fs.readFile('./5.post.html','utf-8',(err, data)=>{
        if (err) return
        res.end(data)
      })
    // 接收post请求
    if (req.url === '/login')
    {
      let str = ''
      req.on('data', dt=>{
        str += dt 
      })
      req.on('end', ()=>{
        // let logInfo = JSON.parse(str) // application/json格式传输
        let logInfo = querystring.parse(str)
        console.log(logInfo)
        // 简单的用户名密码匹配 并返回反馈
        if (logInfo.username !== 'aucho' || logInfo.password !== "123")
          res.end('login fail')
        else
          res.end('login succeed')
      })
    }
  })
  .listen(10086, ()=>{
    console.log('link start')
  })