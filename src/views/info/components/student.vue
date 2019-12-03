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
        <el-button type="text" @click="toMarket()">去招聘市场</el-button>
        <my-post-list :list="data"></my-post-list>
        <div class="title">我的求职申请记录</div>
        <el-button type="text" @click="openNew()">发布求职申请</el-button>
        <div class="list">
          <apply-list :list="getUserApplyList"></apply-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import applyList from "./applyList";
import myPostList from './myPostList'
import { async } from 'q';

export default {
  name: "company",
  components: {
    applyList,
    myPostList
  },
  data: () => ({
    data:[]
  }),
  mounted() {
    this.fetch()
  },
  computed: {
    ...mapGetters("userInfo", {
      getUserApplyList: "getUserApplyList"
    }),
    studentId() {
      return this.getUserInfo.info.studentId;
    }
  },
  methods: {
    ...mapActions("userInfo", ["asyncsetUserInfo"]),
    toMarket (){
      this.$router.push({
          path: "/market"
        });
    },
    open() {
      this.$emit("openModel", "student");
    },
    openNew() {
      this.$emit("openNewModel", "student");
    },
    fetch : async function(){
      let obj = { studentId: this.studentId };  
      let res = await this.$api.myPostList(obj);
      let postIds = res.result.map((item)=>item.postId)
      let result = await this.$api.allPost(obj);
      result.result = [].concat.apply([],result.result)
      let r = []
      for (let index = 0; index < postIds.length; index++) {
       r.push(result.result.filter((item)=>item.postId === postIds[index]))
      }
      r = [].concat.apply([],r)
      this.data = r
      console.log(r)
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
 