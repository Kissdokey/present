import Vue from 'vue'
import VueRouter from 'vue-router';
import LoginPage from '@/views/Login'
import HomePage from '@/views/Home'
Vue.use(VueRouter)
const routes=[
    {
        path:'/',
        name:'home',
        // redirect:'/home',
        component: HomePage,
    },
    {
      path:'/login',
      name:'login',
      component: LoginPage
    }
    
]
const router = new VueRouter({
    mode:'history',
    routes

})
export default router