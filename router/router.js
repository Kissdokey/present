import Vue from 'vue'
import VueRouter from 'vue-router';
import LoginPage from '@/views/Login'
import HomePage from '@/views/Home'
import ChatRecord from '@/views/Chat'
import LetterPage from '@/views/Letter'
import PicturePage from '@/views/Picture'
import LargeLetter from '@/views/large-letter'
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
    },{
        path:'/chatRecord',
        name: 'chatRecord',
        component: ChatRecord
    },{
        path:'/letter',
        name: 'letter',
        component: LetterPage
    },{
        path:'/picture',
        name: 'picture',
        component: PicturePage
    },{
        path: '/largeLetter',
        name: 'largeLetter',
        component: LargeLetter
    }
    
    
]
const router = new VueRouter({
    mode:'history',
    routes

})
export default router