//模块作用域, 内部不能直接访问外部，外部也不能直接访问内部
var a = 'a is a'

console.log('a start')
var b= require('./7.2--b.js')
console.log('a end')
//访问bexports的内容
b.foo()