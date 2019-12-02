import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animated from 'animate.css'
import moment from 'moment' //引入moment 时间格式化插件
import md5 from "js-md5";
import api from "./http/index";
Vue.use(api);

import { Button, Select, Carousel, CarouselItem, Breadcrumb, BreadcrumbItem,Form,FormItem, Input,InputNumber,Option,Notification,Dialog,DatePicker,Col} from 'element-ui';
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
Vue.use(Notification)
Vue.use(Option) 
Vue.use(DatePicker) 
Vue.use(Dialog)  
Vue.use(Col)  






Vue.config.productionTip = false
Vue.prototype.$moment = moment; //挂载到原型链上，直接通过this._moment()使用
Vue.prototype.$md5 = md5;
Vue.prototype.$notify = Notification;

Vue.filter("dateformat", function(dataStr, pattern = "YYYY-MM-DD hh:mm:ss") {
  //将moment注册为全局过滤器
  if (dataStr) {
    return moment(dataStr).format(pattern);
  } else {
    return dataStr;
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
