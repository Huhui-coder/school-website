import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
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
    component: () => import('../views/Push.vue')
  },
  {
    path: '/complaint',
    name: 'complaint',
    component: () => import('../views/Complaint.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
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
      import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: 'Register'
    },
    component: () =>
      import('../views/Register.vue')
  },
  {
    path: '*',
    name: 'home',
    meta: {
      title: 'Home'
    },
    component: () =>
      import('../views/Home.vue')
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
