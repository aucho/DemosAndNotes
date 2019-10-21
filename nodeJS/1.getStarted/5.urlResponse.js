var http = require('http')
server = http.createServer()

server.on('request',function(request,response){

  var url = request.url
  console.log('received:' + request.url)

  // response.write(  (url === '/')? 'i am root':'iam not root')
  //response.end('hello js')  //简写

  var data = [
    {
      name: 'apple',
      id:1
    },
    {
      name: 'pear',
      id:2 
    },
    {
      name: 'banana',
      id:3
    }
  ]
  switch(url)
  {
    case '/data':
      response.end(JSON.stringify(data))

  }


})

server.listen(10086,function(){
  console.log('server activated')
})