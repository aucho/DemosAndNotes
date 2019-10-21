var fs = require('fs')

// 封装读取文件的函数
var pReadfile = function(filePath){
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath,'utf-8',function (err, data) {
      if (err) 
        reject(err)
      else 
        resolve(data)
    })
})
}

pReadfile('./a.txt')
  .then(function(data){
    console.log(data)
    return pReadfile('./b.txt')
  })
  .then(function(data){
    console.log(data)
    return pReadfile('./c.txt')
  })
  .then(function(data){
    console.log(data)
  })