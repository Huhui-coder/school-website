import Vue from 'vue';
import Vuex from 'vuex';
import userInfo from './modules/userInfo'
import companyInfo from './modules/companyInfo'
import file from './modules/file'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        userInfo,
        companyInfo,
        file
    }
});
