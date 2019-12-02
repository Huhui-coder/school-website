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
            <p>公司名称：{{getCompanyInfo.info.companyName || ''}}</p>
            <p>公司简介：{{getCompanyInfo.info.introduction || ''}}</p>
            <el-button type="text" @click="open()">编辑公司资料</el-button>
          </div>
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
      <div class="wrap">
        <div class="title">
          我的人才记录
          <!-- <el-button type="text" @click="openNew()">发布新的岗位</el-button> -->
        </div>
        <div class="list">
          <!-- <post-list :list="getCompanyPost"></post-list> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import postList from "./postList";

export default {
  name: "company",
  components: {
    postList
  },
  data: () => ({}),
  mounted() {},
  computed: {
    ...mapGetters("companyInfo", {
      getCompanyInfo: "getCompanyInfo",
      getCompanyPost: "getCompanyPost"
    })
  },
  methods: {
    ...mapActions("companyInfo", ["asyncsetCompanyInfo"]),
    open() {
      this.$emit("openModel", "company");
    },
    openNew() {
      this.$emit("openNewModel", "company");
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
        }
      }
      .list {
        min-height: 100px;
      }
    }
  }
}
</style>
   