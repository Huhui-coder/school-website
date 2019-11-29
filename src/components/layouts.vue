<template>
  <div class="wrap">
    <header class="header-wrap">
      <div class="icon">长师之家</div>
      <div class="link">
        <router-link to="/about">商家天地</router-link>
        <router-link to="/about">学校天地</router-link>
        <router-link to="/about">每日推送</router-link>
        <router-link to="/about">投诉平台</router-link>
        <router-link to="/about">关于我们</router-link>
      </div>
      <div class="user" v-if="userInfo"></div>
      <div class="login">
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
      </div>
    </header>
    <main>
      <slot name="content" scope="props" />
    </main>
    <footer>长江师范学院@版权所有</footer>
  </div>
</template>

<script>
export default {
  name: "layouts",
  data: () => ({
    userInfo: false
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
    width: 1280px;
    margin: 0 auto;
    height: 50px;
  }
  .header-wrap {
    display: flex;
    justify-content: space-around;
    line-height: 50px;
  }
  main {
    width: 1280px;
    margin: 0 auto;
    background-color: whitesmoke;
  }
  footer {
    width: 1280px;
    margin: 0 auto;
    background-color: orange;
    height: 300px;
  }
}
</style>>
