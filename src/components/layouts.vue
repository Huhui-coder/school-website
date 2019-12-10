<template>
  <div class="wrap">
    <header class="header-wrap">
      <div class="icon" @click="toHome()">校园兼职网</div>
      <div class="link">
        <!-- <router-link to="/market">人才市场</router-link> -->
        <router-link to="/push">每日推送</router-link>
        <router-link to="/complaint">投诉平台</router-link>
        <router-link to="/about">关于我们</router-link>
      </div>
      <div class="user" v-if="role">
        <router-link to="/userInfo">个人中心</router-link>
        <span>您好({{getUserInfo.role?'学生':'商家'}})</span>
        <el-button type="text" @click="logout()">登出</el-button>
      </div>
      <div class="login" v-else>
        <router-link to="/login" style="margin:0">登录/</router-link>
        <router-link to="/register">注册</router-link>
      </div>
    </header>
    <main>
      <slot name="content" scope="props" />
    </main>
    <footer>
      <div class="footer-wrap">
        <router-link to="/advertising_services" tag="span">广告服务</router-link>
        <router-link to="/help_center" tag="span">帮助中心</router-link>
        <router-link to="/site_introduction" tag="span">站点简介</router-link>
        <router-link to="/contact_us" tag="span">联系我们</router-link>
        <router-link to="/user_agreement" tag="span">用户协议</router-link>
        <router-link to="/customer_feedback" tag="span">用户反馈</router-link>
        <router-link to="/security_center" tag="span">安全中心</router-link>
      </div>
      <p>校园兼职网免费提供兼职信息，如转载请保留校园兼职网版权</p>
    </footer>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "layouts",
  data: () => ({
    role: ""
  }),
  computed: {},
  mounted() {},
  mounted() {
    this.checkLogined();
  },
  methods: {
    toHome() {
      this.$router.push({
        path: "/"
      });
    },
    ...mapActions("userInfo", ["asyncsetUserInfo"]),
    ...mapActions("companyInfo", ["asyncsetCompanyInfo"]),
    checkLogined() {
      this.role = this.getUserInfo.role || this.getCompanyInfo.role;
      localStorage.setItem("role", this.role);
    },
    logout() {
      this.asyncsetUserInfo({ info: { studentId: "" } });
      this.asyncsetCompanyInfo({ info: { companyId: "" } });
      window.location.href = "/home";
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100%;
  header {
    margin: 0 auto;
    height: 50px;
    text-align: center;
  }
  .header-wrap {
    color: #fff;
    background-color: #011628;
    display: flex;
    justify-content: space-around;
    line-height: 50px;
    .router-link-active::after {
      content: "";
      position: absolute;
      display: block;
      border-bottom: 2px solid #fff;
      bottom: -3px;
      width: 100%;
      height: 2px;
      left: 0px;
    }
    a {
      color: #fff;
      margin: 0 40px 0 0;
      position: relative;
    }
  }
  main {
    margin: 0 auto;
    background-color: whitesmoke;
  }
  footer {
    text-align: center;
    color: #fff;
    margin: 0 auto;
    background-color: #25272e;
    min-height: 200px;
    .footer-wrap {
      padding: 30px;
      & > span {
        border-right: 1px solid #ddd;
        margin: 10px;
        padding-right: 10px;
      }
      & > .router-link-active {
        height: 0 !important;
      }
      & > span:last-child {
        border-right: none;
      }
      & > span:hover {
        color: rgb(107, 107, 240);
      }
    }
  }
}
</style>>
