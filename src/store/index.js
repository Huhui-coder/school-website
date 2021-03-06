import Vue from 'vue';
import Vuex from 'vuex';
import userInfo from './modules/userInfo'
import companyInfo from './modules/companyInfo'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        userInfo,
        companyInfo
    }
});
