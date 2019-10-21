import vueRouter from 'vue-router'
import account from './main/account.vue'
import goodsList from './main/goodsList.vue'
import login from './subcomp/login.vue'

var router = new vueRouter({
    routes: [
        {
            path: '/account', component: account,
            children: [
                { path: 'login', component: login }
        ]
        },
        { path: '/goods', component: goodsList }
    ]
})

export default router