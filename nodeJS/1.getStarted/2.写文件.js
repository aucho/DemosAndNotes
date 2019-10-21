var fs = require('fs')

fs.writeFile(
  './test.txt',            // 参数1 文件路径
  'Greetings, I am nodejs',// 参数2 文件内容
  function(error){        // 参数3 回调函数 只接受error参数
    console.log(error || 'create file successfully')
  }
)

fs.writeFile(
  './><!test2.txt',            // 参数1 文件路径
  'Greetings, I am nodejs',// 参数2 文件内容
  function(error){        // 参数3 回调函数 只接受error参数
    console.log(error || 'create file successfully')
  }
)