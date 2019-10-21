/**
 * router.js 路由模块 
 *  处理路由
 * 
 * 该项目的静态前端是bootstrap上的一个模板
 */
var express = require('express')
var Student = require('./student')

// 创建路由容器
var router = express.Router()

/**
 * 首页重定向
 */
router.get('/', function (req, res) {
  res.redirect('/students')
})
/**
 *  /students首页
 */
router.get('/students', function (req, res) {
  //调用Students 里的方法 获取data里的学生数据 
  Student.getAll(function (err, stuArr) {
    if (err) return res.status(500).send('server error')
    // 渲染到页面
    res.render('index.html', {
      "students": stuArr
    })
  })
})


/**
 *  添加学生页面 
 */
router.get('/students/new', function (req, res) {
  res.render('students.html')
})


/**
 *  处理 新增学生 的post
 */
router.post('/new', function (req, res) {
  Student.add(req.body, function (err) {
    if (err) return res.status(500).send('server error')
  })
  res.redirect('/students')
})


/**
 * 修改学生对象的edit页面渲染
 */
router.get('/students/edit', function (req, res) {
  // 获取id
  var id = parseInt(req.query.id)
  // 根据id获取到对应学生对象 渲染到页面 input的value中
  Student.getStu(id, function (err, stuObj) {
    if (err)
      return res.status(500).sendStatus('server error')
    res.render('edit.html', stuObj)
  })
})


// 处理编辑post
router.post('/edit', function (req, res) {
  var stuObj = req.body
  console.log(stuObj)
  Student.edit(stuObj, function (err) {
    if (err)
      return res.status(500).sendStatus('server error')
    res.redirect('/students')
  })
})


// 处理删除请求
router.get('/delete', function (req, res) {
  var delId = parseInt(req.query.id)
  Student.del(delId, function (err) {
    if (err) return res.status(500).send('server error')
    res.redirect('/students')
  })
})






module.exports = router