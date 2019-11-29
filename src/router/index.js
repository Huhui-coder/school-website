import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Login'
    },
    component: () =>
      import( /* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: 'Register'
    },
    component: () =>
      import( /* webpackChunkName: "Login" */ '../views/Register.vue')
  },
  {
    path: '*',
    name: 'home',
    meta: {
      title: 'Home'
    },
    component: () =>
      import( /* webpackChunkName: "Login" */ '../views/Home.vue')
  },
  {
    path: '/',
    redirect: '/home'
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
