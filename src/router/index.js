import Vue from 'vue'
import Router from 'vue-router'
// import { component } from 'vue/types/umd';
import Login from '../pages/Login.vue';
import Home from '../pages/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'home'
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/config/login',
      name: 'Login',
      component:Login
    }
  ]
})
