import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        Authorization: window.localStorage.getItem('Authorization')===null?false:window.localStorage.getItem('Authorization'),
        message: '欢迎！'
      },
      mutations: {
        changeState(state) {
            window.localStorage.setItem('Authorization','true')
            state.Authorization = !this.state.Authorization;

        },
        changeMessage(state,msg) {
            state.message = msg;
        },
        logOut(state) {
            window.localStorage.removeItem('Authorization')
            state.Authorization=false
        }
      }
}
)
export default store