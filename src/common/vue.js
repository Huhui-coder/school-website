import Vue from 'vue'
import { mapGetters } from "vuex";


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
  }
})

export default Vue
