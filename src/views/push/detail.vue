<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="header">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/push' }">每日推送</el-breadcrumb-item>
            <el-breadcrumb-item>详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="main">
          <div class="title">{{data.title}}</div>
          <div class="content">
            <span class="type">类型:{{data.type}}</span>
            <span class="time">时间:{{data.time | dateformat}}</span>
          </div>
          <div class="text" v-html="data.text"></div>
        </div>
      </div>
    </layouts>
  </div>
</template>

<script>
import layouts from "@/components/layouts";

export default {
  name: "detail",
  components: {
    layouts
  },
  data: () => ({
      data:{}
  }),
  mounted() {
      this.fetch()
  },
  computed: {
    id() {
      return this.$route.query.id;
    }
  },

  methods: {
    async fetch() {
      let res = await this.$api.detailArticles({ id: this.id });
      this.data = res.result
    }
  }
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
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    min-height: 600px;
    padding:30px;
    .title {
      font-weight: 700;
      font-size: 20px;
      color: #1c1f21;
      line-height: 24px;
      text-align: left;
      margin-bottom: 12px;
      margin-top: 4px;
      text-align: center;
    }
    .content {
      font-size: 14px;
      color: #545c63;
      font-weight: 600;
      line-height: 14px;
      text-align: center;
      .type {
        padding-right: 10px;
      }
      .time {
      }
    }
    .text {
      text-indent: 2em;
      padding-top: 20px;
    }
  }
}
</style>
