<template>
  <div class="wrap">
    <header class="header-wrap">
      <div class="icon">家</div>
      <div class="link">
        <router-link to="/market">人才市场</router-link>
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
        <router-link to="/login">登录/</router-link>
        <router-link to="/register">注册</router-link>
      </div>
    </header>
    <main>
      <slot name="content" scope="props" />
    </main>
    <footer>@版权所有</footer>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "layouts",
  data: () => ({
    role: ""
  }),
  computed: {
  },
  mounted() {},
  mounted() {
    this.checkLogined();
  },
  methods: {
    ...mapActions("userInfo", ["asyncsetUserInfo"]),
    ...mapActions("companyInfo", ["asyncsetCompanyInfo"]),
    checkLogined() {
      this.role = this.getUserInfo.role || this.getCompanyInfo.role;
      localStorage.setItem('role',this.role)
    },
    logout() {
      this.asyncsetUserInfo({info:{studentId:''}});
      this.asyncsetCompanyInfo({info:{studentId:''}});
      window.location.href = "/home";
    }
  }
};
</script>

<style lang="less" scoped>
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
    margin: 0 auto;
    background-color: whitesmoke;
  }
}
</style>>
