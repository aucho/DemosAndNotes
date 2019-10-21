/**
 * student.js 
 * 数据操作模块
 * 只处理数据 不关心业务逻辑
 */
var fs = require('fs')

var stuId = 0 //学生id

//  获取所有学生 返回
var getAll = function (callback) {
  // 学生数据存储在一个json文件中
  // 读取文件
  fs.readFile('data.json', 'utf-8', function (err, file) {
    if (err) return callback(err)
    var student = JSON.parse(file).Student

    //异步操作中 通过回调函数 向调用方传值
    callback(null, student)
  })
}

// 添加学生
var add = function (stuObj, callback) {
  fs.readFile('data.json', 'utf-8', function(err, file){
    if (err)  return callback(err)
    var stuArr = JSON.parse(file).Student

    // 获取存储在文件的ID +1  形成新同学的id
    var newId = JSON.parse(file).ID + 1 
    stuObj.id = newId

    // 将新同学添加到学生数组中
    stuArr.push(stuObj)

    // 写文件 覆盖原文件
    fs.writeFile('data.json',  JSON.stringify({ "ID": newId, "Student" : stuArr }), function( err ){
      if (err) callback(err)
      console.log('  add student successfully')
      callback(null)
    })
  })
}

// 根据 id 获取学生对象
// 回调函数参数 err stuObj（学生对象
var getStu = function( id, calback ){
  fs.readFile('data.json', function(err, file){
    if (err) return callback(err)
    // data中的学生数组 
    var stuArr = JSON.parse(file).Student
    // 根据id 获取学生  find是 ES6 语法
    var stuObj = stuArr.find(function(item) {
      return item.id === id
    })
    calback(null, stuObj)
  })
} 


// 传入新对象 更新学生
// 回调函数参数 err
var edit = function (stuObj, callback) {
  fs.readFile('data.json', function(err, file){
    if (err) return callback(err)
    // data中的学生数组 重写会覆盖文件 保留ID值 将ID提取出来
    var stuArr = JSON.parse(file).Student
    var id = JSON.parse(file).ID

    // stuObj的id为字符串类型
    stuObj = parseInt(stuObj.id) 

    // 遍历stuArr中的stu对象
    stuArr.forEach( function(stu){
      if (stu.id === parseInt(stuObj.id))
      // 遍历替换编辑对象（对应id的对象）的属性
        for (var key in stuObj){
          stu[key] = stuObj[key]
          console.log('adasd')
        }
    })
    // 更新后的数组写到json文件中
    fs.writeFile('data.json', JSON.stringify( {"ID" : id , "Student" : stuArr} ),function(){
      if (err) return callback(err)
    })
    callback(null)
  })
}

// 删除学生
// 回调函数 一个参数err
var del = function (delId , callback) {
  fs.readFile('data.json', function(err, file){
    if (err) 
      return callback(err)
    var stuArr = JSON.parse(file).Student
    var id = JSON.parse(file).ID
    // findIndex Es6语法 返回满足条件数组元素的index
    var delIndex = stuArr.findIndex(function(item){
      return item.id === delId
    })
    console.log(delIndex)
    stuArr.splice(delIndex, 1)

    // 更新后的数组写到json文件中
    fs.writeFile('data.json', JSON.stringify( {"ID" : id , "Student" : stuArr} ),function(){
      if (err) return callback(err)
    })
    callback(null)
  })
}

module.exports = {
  "getAll": getAll,
  "getStu" : getStu,
  "add": add,
  "edit": edit,
  "del": del
}
