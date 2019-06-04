import Vue from 'vue'
import App from './app.vue'
import Vuex from 'vuex'

import './assets/styles/global.styl'
import createStore from './store/store'
import router from './router'
Vue.use(Vuex)
const store = createStore()
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#root')
