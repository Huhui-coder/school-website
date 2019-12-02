<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="header">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/market' }">人才市场</el-breadcrumb-item>
            <el-breadcrumb-item>招聘详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="wrap" v-for="item in list" :key="item.postId">
          <div class="title">招聘信息标题{{item.title}}</div>
          <div class="info">
            <div>兼职类型:{{item.type}}</div>
            <div>招聘职位:{{item.post}}</div>
            <div>薪资范围:{{item.range}}</div>
            <div>招聘人数:{{item.number}}</div>
            <div>工作时间:{{item.fromTime | dateformat}}</div>
            <div>工作时间:{{item.toTime | dateformat}}</div>
            <div>工作地点:{{item.location}}</div>
          </div>
          <div class="main">
            详情:
            <p>{{item.detail}}</p>
          </div>
          <div class="footer">
            <div class="time">发布时间:{{item.now}}</div>
          </div>
        </div>
      </div>
    </layouts>
  </div>
</template>

<script>
import layouts from "@/components/layouts";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    layouts
  },
  data: () => ({
    list: []
  }),
  mounted() {
    this.fetch();
  },
  computed: {
    postId() {
      return this.$route.query.postId;
    },
    companyId() {
      return this.$route.query.companyId;
    }
  },

  methods: {
    fetch: async function() {
      //获取单个岗位需求的详情
      let params = {
        companyId: this.companyId,
        postId: this.postId
      };
      let res = await this.$api.postDetail(params);
      let result = res.result;
      this.list = result;
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
  .wrap {
    display: row;
    background-color: #fff;
    padding: 10px;
    .title {
      font-size: 19px;
      font-weight: bolder;
      color: #000;
      text-align: center;
    }
    .info {
      font-size: 16px;
      font-weight: bolder;
      color: gray;
    }
    .main {
      min-height: 300px;
    }
    .footer {
      font-size: 14px;
      font-weight: normal;
      color: gray;
      display: flex;
      justify-content: space-between;
      .detail {
      }
    }
  }
}
</style>
