<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="header">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/market' }">人才市场</el-breadcrumb-item>
            <el-breadcrumb-item>求职详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="wrap" v-for="item in list" :key="item.applyId">
          <div class="title">姓名{{item.name}}</div>
          <div class="info">
             <p>联系方式:{{item.phone}}</p>
            <p>应聘职位:{{item.post}}</p>
            <p>应聘地区:{{item.area}}</p>
            <p>理想薪资:{{item.range}}</p>
            <p>空余时间:{{item.fromTime | dateformat}} ---- {{item.toTime | dateformat}}</p>
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
    applyId() {
      return this.$route.query.applyId;
    },
    studentId() {
      return this.$route.query.studentId;
    }
  },

  methods: {
    fetch: async function() {
      //获取单个岗位需求的详情
      let params = {
        studentId: this.studentId,
        applyId: this.applyId
      };
      let res = await this.$api.applyDetail(params);
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
