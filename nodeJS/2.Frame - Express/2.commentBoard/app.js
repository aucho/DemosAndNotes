var express = require('express')
var bodyParser = require('body-parser')

var comments = [
  {
    title : 'A',
    mainText : 'b',
    time : new Date() 
  },
]

var app = express()
app.engine('html', require('express-art-template'))
//  启用body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/', function(req, res){
  res.render('index.html',{
    'comments' : comments
  })
})

app.get('/post', function(req, res){
  res.render('addComments.html')
})


// 使用插件body-phaser获取表单请求体
app.post('/post',function(req,res){
    comments.unshift({
    title:   req.body.title,
    mainText : req.body.mainText,
    time :  new Date()
  })
  res.redirect('/')
})

// //req.query只有get请求能用

// app.get('/postComments', function(req,res){
//   comments.unshift({
//     title:   req.query.title,
//     mainText : req.query.mainText,
//     time :  new Date()
//   })
//   res.redirect('/')
// })

 
app.listen(10086,function(){
  console.log('link start')
})