//Vue in webpack 
import Vue from 'vue'

//导入的Vue 功能不完整 只提供 runtime-only的方式 没有像网页中的那种方式

//import时 查找顺序
//查找项目根目录中 有没有 node_modules 文件夹
//查找 vue文件夹
//查找 vue文件夹中 package.json 中的 main 属性 指定作为包的入口文件

//可以改node_module/vue/package.json 的main 改为 vue.js （原来的为vue.runtime.common.js）
//或者import Vue from '../node_modules/vue/dist/vue.js'
//或者在config里面 配置 resolve
// var user = {
//     template:"<h1>component</h1>"
// }
import user from './user.vue'
import test, {jack} from './test.js'
//webpack cannot pack .vue file
//we need vue-loader vue-template-compiler -D


console.log(test)
console.log(jack)
var vm = new Vue({
    el: '#app',
    data: {
        msg: 'hello i am vue'
    },
    render: c => c(user)
    //stand for ---- render : function(createElements){ return createElement(user) }
    //render可以实现组件渲染 components 不行

    // components:{
    //     user
    // }
})


//webpack 使用 vue : cnpm i vue -S
//webpack 中推荐使用 .vue 组件模板定义组件，需 安装能解析这种文件的loader 
//webpack.config.js 添加loader和 vue-loader/lib/plugin
//cnpm i vue-loader vue-template-compiler -D
//import Vue from 'vue'
//import 组件 （vue文件）
//创建vm 实例， render渲染组件
//
