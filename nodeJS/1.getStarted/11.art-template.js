//art-template模板引擎
var http = require('http')
var fs = require('fs')
var template = require('art-template')

var server = http.createServer()

server.on('request', function (req, res) {

  fs.readFile('./resource/index.html', function (err, data) {
    var htmStr = template.render(data.toString(), {
      name: 'Aucho',
      age: '222',
      hobbies: ['sing', 'dance', 'rap', 'play basketball']
    })
    res.end(htmStr)
  })

})

server.listen(10086, function () {
  console.log('link start')
})
