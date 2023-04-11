import Vue from 'vue'
import App from './App.vue'
import store from '../store/store'
import router from '../router/router'
Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
  let token = store.state.Authorization
  if(!token && to.name !== 'login') {
    // console.log("123+token",token)
    next({name:'login'})
  } 
  else if (token&&to.name === 'login') {
    // console.log("456+token",token)
    next({name:'home'})
  } 
  else {
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
