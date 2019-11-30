import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'
import moment from 'moment' //引入moment 时间格式化插件
import { Button, Select, Carousel, CarouselItem, Breadcrumb, BreadcrumbItem,Form,FormItem, Input,InputNumber,Option,} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import './icons/index' //引入icon图标
Vue.use(animated)
Vue.use(Button)
Vue.use(Select)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(InputNumber)
Vue.use(Option)





Vue.config.productionTip = false
Vue.prototype.$moment = moment; //挂载到原型链上，直接通过this._moment()使用


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
