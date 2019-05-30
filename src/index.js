import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import './assets/styles/global.styl'
import createRoute from './config/router'

Vue.use(VueRouter)
const router = createRoute()
new Vue({
    router,
    el: '#root',
    components: {App},
    template: '<App/>'
})
