/**
 * student.js 
 * 数据操作模块
 * 只处理数据 不关心业务逻辑
 */

//  
/**用mysql数据库代替json文件进行存储
 * 数据操作只需要用sql语句进行
 * 与数据库建立的连接不断开
 */
var mysql = require('mysql')

// 创建连接
connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db1' // 数据库名为db1，  MySQL port 默认3306
})
// 连接开始
connection.connect()

var stuId = 0 //学生id

/**
 *  获取所有学生 返回  callback 第一个参数err  第二个 包含所有学生对象的数组
 */
var getAll = function (callback) {
  // 执行sql语句
  connection.query('SELECT * from `stutable`', function (err, results, field) {
    if (err) callback(err)
    callback(null , results)
  })
}

// 添加学生
var add = function (stuObj, callback) {
  // 语句
  sql = `INSERT INTO stutable VALUES(NULL,
    "${stuObj.name}",
    "${stuObj.age}",
    "${stuObj.gender}",
    "${stuObj.hobbies}" )`
  // 执行语句 
  connection.query(sql, function(err, results, field){
    if (err) return callback(err)
  })
}

// 根据 id 获取学生对象
// 回调函数参数 err， stuObj（学生对象
var getStu = function (id, calback) {
  // 语句
  sql = `SELECT * FROM stutable where id = ${id}`
  // 执行语句 通过回调函数返回值
  connection.query(sql, function(err, results, field){
    if (err) return callback(err)
    calback(null, results[0])
  })
}

// 传入新对象 更新学生
// 回调函数参数 err
var edit = function (stuObj, callback) {
  sql = `UPDATE stutable 
  SET name = "${stuObj.name}",
  age = "${stuObj.age}",
  gender = "${stuObj.gender}",
  hobbies = "${stuObj.hobbies}"
  where id = ${stuObj.id}`

  // 执行sql语句
  connection.query(sql, function(err, results, field){
    if (err) return callback(err)
    callback(null)
  })
}

// 删除学生
// 回调函数 一个参数err
var del = function (delId, callback) {
  sql = `DELETE FROM stutable WHERE id = ${delId}`
  connection.query(sql, function(err, results, field){
    if (err) return callback(err)
    console.log('删除成功')
    callback(null)
  })
}

module.exports = {
  "getAll": getAll,
  "getStu": getStu,
  "add": add,
  "edit": edit,
  "del": del
}
