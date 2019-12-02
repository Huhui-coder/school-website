<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="header">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>每日推送</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="main"></div>
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
  }
}
</style>
