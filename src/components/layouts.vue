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
      <div class="user" v-if="userInfo">
        <router-link to="/userInfo">个人中心</router-link>
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
export default {
  name: "layouts",
  data: () => ({
    userInfo: true
  }),
  mounted() {},

  methods: {}
};
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100%;
  header {
    margin: 0 auto;
    height: 50px;
  }
  .header-wrap {
    color: #fff;
    background-color: #011628;
    display: flex;
    justify-content: space-around;
    line-height: 50px;
    a {
      color: #fff;
      padding: 0 10px 0 0;
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
