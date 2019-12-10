import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'App',
    meta: {
      title: '校园兼职平台'
    },
    component: () => import('../views/App.vue')
  },
  {
    path: '/market',
    name: 'market',
    meta: {
      title: '人才市场'
    },
    component: () => import('../views/market/Market.vue')
  },
  {
    path: '/marketDetail',
    name: 'marketDetail',
    meta: {
      title: '详情'
    },
    component: () => import('../views/market/MarketDetail.vue')
  },
  {
    path: '/applyDetail',
    name: 'applyDetail',
    meta: {
      title: '详情'
    },
    component: () => import('../views/market/applyDetail.vue')
  },
  {
    path: '/push',
    name: 'push',
    meta: {
      title: '推送中心'
    },
    component: () => import('../views/push/index.vue')
  },
  {
    path: '/pushDetail',
    name: 'pushDetail',
    meta: {
      title: '详情'
    },
    component: () => import('../views/push/detail.vue')
  },
  {
    path: '/complaint',
    name: 'complaint',
    meta: {
      title: '投诉平台'
    },
    component: () => import('../views/complaint/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于我们'
    },
    component: () => import('../views/about/index.vue')
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    meta: {
      title: '个人中心'
    },
    component: () => import('../views/info/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () =>
      import('../views/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '注册'
    },
    component: () =>
      import('../views/register/index.vue')
  },
  {
    path: '/advertising_services',
    name: 'advertising_services',
    meta: {
      title: '广告服务'
    },
    component: () =>
      import('../views/description/advertising_services.vue')
  },
  {
    path: '/contact_us',
    name: 'contact_us',
    meta: {
      title: '联系我们'
    },
    component: () =>
      import('../views/description/contact_us.vue')
  },
  {
    path: '/customer_feedback',
    name: 'customer_feedback',
    meta: {
      title: '客户反馈'
    },
    component: () =>
      import('../views/description/customer_feedback.vue')
  },
  {
    path: '/help_center',
    name: 'help_center',
    meta: {
      title: '帮助中心'
    },
    component: () =>
      import('../views/description/help_center.vue')
  },
  {
    path: '/security_center',
    name: 'security_center',
    meta: {
      title: '安全中心'
    },
    component: () =>
      import('../views/description/security_center.vue')
  },
  {
    path: '/site_introduction',
    name: 'site_introduction',
    meta: {
      title: '网站简介'
    },
    component: () =>
      import('../views/description/site_introduction.vue')
  },
  {
    path: '/user_agreement',
    name: 'site_introduction',
    meta: {
      title: '客户须知'
    },
    component: () =>
      import('../views/description/user_agreement.vue')
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
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
})
router.afterEach((to, form, next) => {
  window.scrollTo(0, 0)
})

export default router
