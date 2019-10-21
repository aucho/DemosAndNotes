import Vue from 'vue'
import app from './App.vue'
import vueRouter from 'vue-router'
import router from './router.js'

Vue.use(vueRouter)

var vm = new Vue({
    el: '#app',
    render(h) {
        return h(app)
    },
    router
})