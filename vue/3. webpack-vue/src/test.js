var person = {
  name: 'Jack',
  age: 200
}

export default person
export var jack = {
  name: 'notJack',
  age: null
}

//Es6中使用import和import from 导入模块
// export 和 export default 向外暴露成员 
//一个模块中仅允许export default一次
//但是允许同时使用export  :按需导出  用{原名 as 别名}的形式接收,或者不加别名，可export多次

//Node中 使用 var name = require('')
//module.export 和 export 暴露成员