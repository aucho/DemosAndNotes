var mysql = require('mysql')

// 创建连接
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db1'
})

// 连接数据库
connection.connect()

// 执行数据操作
// connection.query('INSERT INTO stuTable VALUES("0","JACK", "0") ', function(err, results, fields){
//   if (err) throw err;
//   console.log('the solution is ', results)
// })
connection.query('SELECT * FROM `stuTable`', function(err, results, fields){
  if (err) throw err;
  console.log('the solution is ', results)
})

// 关闭连接
connection.end()