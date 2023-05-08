import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        Authorization: window.localStorage.getItem('Authorization')===null?false:window.localStorage.getItem('Authorization'),
        message: '欢迎！',
        nameCount: 0,
        pswCount: 0
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
        },
        changeNameCount(state,i) {
            state.nameCount = i
        },
        changePswCount(state,i) {
            state.pswCount = i
        }
      }
}
)
export default store