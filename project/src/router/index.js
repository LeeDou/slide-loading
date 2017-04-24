import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import index from '@/components/index'
import login from '@/components/login'
import Hello from '@/components/Hello'

// import signout from '@/components/signout'
// import components from '@/components/'


Vue.use(Router)


export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'index',
//       component: index
      
//     },
//     {
//       path:'/login',
//       name:'login',
//       component:login
//     }

//   ]
// })
	routes:[
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/login', //登录
                meta: { auth: false },
                component: login
            },         
            {
                path: '/index', //个人主页
                component: index
            },
            {
                path: '*', //其他页面，强制跳转到登录页面
                redirect: '/login'
            }
        ]
    }
	]
})




