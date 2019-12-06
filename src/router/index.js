import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    component: () => import('../views/App.vue')
  },
  {
    path: '/market',
    name: 'market',
    component: () => import('../views/market/Market.vue')
  },
  {
    path: '/marketDetail',
    name: 'marketDetail',
    component: () => import('../views/market/MarketDetail.vue')
  }, 
  {
    path: '/applyDetail',
    name: 'applyDetail',
    component: () => import('../views/market/applyDetail.vue')
  },
  {
    path: '/push',
    name: 'push',
    component: () => import('../views/push/index.vue')
  },
  {
    path: '/pushDetail',
    name: 'pushDetail',
    component: () => import('../views/push/detail.vue')
  },
  {
    path: '/complaint',
    name: 'complaint',
    component: () => import('../views/complaint/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/index.vue')
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    component: () => import('../views/info/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Login'
    },
    component: () =>
      import('../views/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: 'Register'
    },
    component: () =>
      import('../views/register/index.vue')
  },
  {
    path: '*',
    name: 'App',
    meta: {
      title: 'App'
    },
    component: () =>
      import('../views/App.vue')
  },
  {
    path: '/',
    redirect: '/App'
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
