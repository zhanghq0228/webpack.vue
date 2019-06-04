import Vue from 'vue'
import App from './app.vue'
import Vuex from 'vuex'

import './assets/styles/global.styl'
import createStore from './store/store'
import router from './router'
Vue.use(Vuex)
const store = createStore()
// store.registerModule('c', {
//   text: 3
// })
store.watch((state) => state.count + 1, (newCount) => {
  console.log(newCount)
})
// store.subscribe(handler)

router.beforeEach((to, from, next) => {
  // if (to.fullPath == '/app') {
  console.log('before EACH')
  //   next('/login')
  // } else {
  //   next()
  // }
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('before beforeResolve')
  next()
})
// router.afterEach((to, form) => {
//   console.log(afterEach)
// })
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#root')
