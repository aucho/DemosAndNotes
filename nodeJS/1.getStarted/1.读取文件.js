//fs stands for fileSystem
var fs = require('fs')

fs.readFile('./test.txt',function(err, data){
  console.log((data || 'error exists').toString())
  console.log(err || '')
})

//浏览器不认识nodejs的代码
//node + 文件名  在命令行执行
//命令行工具中 Tab 可以对文件名进行补全