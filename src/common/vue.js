import Vue from 'vue'
import { mapGetters, mapActions } from "vuex";


Vue.config.debug = false

Vue.mixin({
  data: function () {
    return {
    }
  },
  computed: {
    ...mapGetters("userInfo", {
      getUserInfo: "getUserInfo"
    }),
    ...mapGetters("companyInfo", {
      getCompanyInfo: "getCompanyInfo"
    })
  },
  methods: {
    ...mapActions("userInfo", [
      "asyncsetUserInfo" //userInfo.js文件中的actions里的方法
    ]),
    ...mapActions("companyInfo", [
      "asyncsetCompanyInfo" //userInfo.js文件中的actions里的方法
    ]),
  }
})

export default Vue
