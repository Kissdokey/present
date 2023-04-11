import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        Authorization: false
      },
      mutations: {
        changeState() {
            this.state.Authorization = !this.state.Authorization;

        }
      }
}
)
export default store