// //entrance of our project
// import $ from 'jquery'

// $(function(){
//     $('li:odd').css('backgroudColor','red')
//     $('li:event').css('backgroudColor',function(){
//         return '#' + 'e49a8b';
//     })
// })
import './css/style.css'
alert('hello');
document.getElementById('study').innerText = 'aaa';

class Student{
    //static 关键字， 可以定义静态属性
    //静态竖向，就是可以直接通过类名 直接访问的属性
    //实例属性 只能通过类的实例 来访问的 属性
    static info = {name : 'jack', age : "200"}
}

var Jason = new Student()
console.log(Jason)
//webpack中只能处理一部分的webpack语法， 更高的es6甚至es7语法，需要借助第三方loader
//babel 
//两套包 安装babel相关loader功能
//cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
//cnpm i babel-preset-env babel-preset-stage-0 -D

//匹配规则 {test : /\.js$/, use: 'babel-loader', exclude:/node_modules/}
//必须排除node_modules 不然babel会把其中所有的js 文档全部打包编译
//.babelrc配置必须符合 JASON语法规范 不能写注释 字符串必须用双引号
// {
//     "presets":["env","stage-0"], //预设,语法
//     "plugins":["transform-runtime"]
// }