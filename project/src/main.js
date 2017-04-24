// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from '@/store/'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    next()
})
/* eslint-disable no-new */
new Vue({
 store, 
 router ,
 template:'<App></App>',
 components:{App}

}).$mount('#app')