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
            <p>昵称:{{getUserInfo.info.nickName || ''}}</p>
            <p>手机号码:{{getUserInfo.info.phone || ''}}</p>
            <p>理想岗位：{{getUserInfo.info.position || ''}}</p>
            <p>理想薪资：{{getUserInfo.info.salary || ''}}</p>
            <p>地区：{{getUserInfo.info.area || ''}}</p>
            <el-button type="text" @click="open()">编辑个人资料</el-button>
          </div>
        </div>
      </div>
      <div class="wrap">
        <div class="title">我的投递记录</div>
        <div class="list"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "company",
  data: () => ({}),
  mounted() {},
  computed: {
    ...mapGetters("userInfo", {
      getUserInfo: "getUserInfo"
    })
  },
  methods: {
    ...mapActions("userInfo", ["asyncsetUserInfo"]),
    open() {
      this.$emit("openModel", "student");
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
 