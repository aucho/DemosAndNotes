/**
 * 执行异步编程的时候 为了保证异步操作的顺序 会按照顺序，将异步操作放在回调函数中
 * 回调嵌套多了会形成callback hell
 * 看起来很难受，难以维护
 */

var fs = require('fs')

// Es6 API Promise
// Promise 是一个构造函数  promise内部是异步任务 里面的任务会立即执行
var p1 = new Promise(function (resolve, reject) {
  // 异步任务
  fs.readFile('./a.txt', 'utf-8', function (err, data) {
    if (err) { // 承诺容器中的任务失败了
      reject(err)
    }
    else { // 承诺容器中的任务成功了
      resolve(data)
    }
  })
})

// 在创建一个promise
var p2 = new Promise(function (resolve, reject) {
  // 异步任务
  fs.readFile('./b.txt', 'utf-8', function (err, data) {
    if (err) { // 承诺容器中的任务失败了
      reject(err)
    }
    else { // 承诺容器中的任务成功了
      resolve(data)
    }
  })
})

// 再创建一个promise
var p3 = new Promise(function (resolve, reject) {
  // 异步任务
  fs.readFile('./c.txt', 'utf-8', function (err, data) {
    if (err) { // 承诺容器中的任务失败了
      reject(err)
    }
    else { // 承诺容器中的任务成功了
      resolve(data)
    }
  })
})



p1
  .then(
    // resolve函数
    function (data) {
      console.log(data)
      // return 的结果会在后面then的function中接收到
      // return 'aaa'

      // 当return一个promise对象的时候 后续的then 中的方法的第一个参数会作为p2的resolve函数
      // 同样第二个参数 就是reject参数
      return p2
    },
    // reject函数
    function (err) {
      console.log('a读取失败')
    }
  )
  .then(
    function(data){
      console.log(data)
      return p3
    },
    function(err){
      console.log('b 读取失败')
    }
  )
  .then(
    function(data){
      console.log(data)
    },
    function(err){
      console.log('c 读取失败')
    }
  )
