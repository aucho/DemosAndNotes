fs = require('fs')
path = require('path')

// 这里的相对路径 ./a.txt 相对node的执行路径
fs.readFile('./a.txt', 'utf-8', function(err, data){
  if (err)
    throw err
  console.log(data)
})

// // 这样子就没有问题
// fs.readFile(path.join(__dirname, './a.txt'), 'utf-8', function(err, data){
//   if (err)
//     throw err
//   console.log(data)
// })