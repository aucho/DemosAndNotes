const http = require('http')
const url = require('url')
const fs = require('fs')

/* 数据于此 */

var stu = [
  {
    id : '10',
    name : 'jack',
    gender : 1
  },
  {
    id : '11',
    name : 'au',
    gender : 1
  }
]

http
.createServer(function(req,res){
  var URL = url.parse(req.url)
  if (URL.pathname === '/'){
    fs.readFile('4.get.html','utf-8',function(err, data){
      if (err) return
      res.end(data)
    })
  }
  if(URL.pathname === '/a')
    // 返回所有stu对象
    if (!URL.query) res.end(JSON.stringify(stu))
    // 根据请求返回不同数据,控制台呈现
    else
      stu.forEach( (s, index)=>{
        if (s.id === URL.query)
          res.end(JSON.stringify(stu[index]))
      } )

  })
.listen('10086',function(){
    console.log('link start')
  })