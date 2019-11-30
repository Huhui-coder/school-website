<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="header">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>个人中心</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="main">
          <div class="wrap">
            <div class="title">我的个人信息</div>
            <div class="content"></div>
          </div>
          <div class="wrap">
            <div class="title">我的投递记录</div>
            <div class="list"></div>
          </div>
        </div>
      </div>
    </layouts>
  </div>
</template>

<script>
import layouts from "@/components/layouts";

export default {
  name: "home",
  components: {
    layouts
  },
  data: () => ({}),
  mounted() {},

  methods: {}
};
</script>
<style lang="less" scoped>
.index {
  width: 80%;
  margin: 0 auto;
  min-height: 300px;
  background-color: whitesmoke;
  .header {
    padding: 15px;
  }
  .main {
    .wrap{
      .title{
        font-size: 18px;
        padding: 15px;
      }
      .content{
        min-height: 100px;
      }
      .list{
        min-height: 100px;
      }
    }
  }
}
</style>
