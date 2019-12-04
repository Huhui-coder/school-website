<template>
  <div>
    <div class="main">
      <div class="wrap">
        <div class="title">我的个人信息</div>
        <div class="content">
          <div class="icon">
            <svg-icon :icon-class="'user'"></svg-icon>
          </div>
          <div class="text">
            <p>
              公司名称：{{getCompanyInfo.info.companyName || ''}}
              <svg-icon :icon-class="'VIP'" v-if="isVIP" class="vip"></svg-icon>
            </p>
            <p>公司简介：{{getCompanyInfo.info.introduction || ''}}</p>
            <el-button type="text" @click="beVIP()" v-if="!isVIP">成为VIP</el-button>
            <el-button type="text" @click="open()">编辑公司资料</el-button>
          </div>
        </div>
      </div>
      <div class="wrap">
        <div class="title">
          我的人才记录
          <el-button type="text" @click="toMarket()">去招聘市场</el-button>
        </div>
        <div class="list">
          <my-apply-list :list="data"></my-apply-list>
        </div>
      </div>
      <div class="wrap">
        <div class="title">
          我的招聘记录
          <el-button type="text" @click="openNew()">发布新的岗位</el-button>
        </div>
        <div class="list">
          <post-list :list="getCompanyPost"></post-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import postList from "./postList";
import myApplyList from "./myApplyList";

export default {
  name: "company",
  components: {
    postList,
    myApplyList
  },
  data: () => ({
    data: [],
    isVIP: true
  }),
  mounted() {
    this.fetch();
  },
  computed: {
    ...mapGetters("companyInfo", {
      getCompanyPost: "getCompanyPost"
    }),
    companyId() {
      return this.getCompanyInfo.info.companyId;
    }
  },
  methods: {
    ...mapActions("companyInfo", [
      "asyncsetCompanyInfo",
      "asyncsetCompanyPost"
    ]),
    toMarket() {
      this.$router.push({
        path: "/market"
      });
    },
    fetch: async function() {
      //获取所有投递过这个公司的学生Id
      let obj = { companyId: this.companyId };
      let res = await this.$api.myApplyList(obj);
      let studentIds = res.result.map(item => item.studentId);
      let r = [];
      //根据学生ID查详情
      for (let index = 0; index < studentIds.length; index++) {
        let result = await this.$api.getUserInfo({
          studentId: studentIds[index]
        });
        r.push(result.result.data.info);
        this.isVIP = result.result.data.info.isVIP
      }
      this.data = r;
    },
    open() {
      this.$emit("openModel", "company");
    },
    beVIP: async function() {
      let obj = { companyId: this.companyId };
      let result = await this.$api.beStudentVIP(obj);
      alert("确定成为会员？");
      this.isVIP = true;
    },
    openNew() {
      this.$emit("openNewModel", "company");
    },
    getPostList: async function() {
      let obj = { companyId: this.companyId };
      let res = await this.$api.getPostList(obj);
      this.asyncsetCompanyPost(res.result);
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
    .wrap {
      .title {
        font-size: 18px;
        padding: 15px;
      }
      .content {
        min-height: 100px;
        display: flex;
        flex-direction: row;
        .icon {
          padding-right: 10%;
          border-right: 1px solid #999;
        }
        .text {
          padding-left: 10%;
          .vip {
            width: 30px;
            height: 30px;
            padding-left: 30px;
          }
        }
      }
      .list {
        min-height: 100px;
        background-color: #fff;
      }
    }
  }
}
</style>
   