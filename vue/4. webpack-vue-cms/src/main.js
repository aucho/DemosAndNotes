//entry
import Vue from 'vue'
import app from './app.vue'
import { Header } from 'mint-ui'
import vueRouter from 'vue-router'

Vue.use(vueRouter);

Vue.component(Header.name, Header);

new Vue({
    el:'#app',
    render: h => h(app)
})