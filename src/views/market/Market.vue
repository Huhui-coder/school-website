<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="header">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>人才市场</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="main">
          <div class="type-list">
            <div @click="active = 'recruitment'" :class="{active:active === 'recruitment'}">招聘</div>
            <div @click="active = 'apply'" :class="{active:active === 'apply'}">求职</div>
          </div>
          <div v-if="active === 'recruitment'">
          <market-list />
          </div>
          <div v-else>
            <apply-list/>
          </div>
        </div>
      </div>
    </layouts>
  </div>
</template>

<script>
import layouts from "@/components/layouts";
import marketList from "./components/marketList";
import applyList from "./components/applyList";

export default {
  name: "home",
  components: {
    layouts,
    marketList,
    applyList
  },
  data: () => ({
    active:'recruitment'
    
  }),
  mounted(){
  },

  methods: {
    
    
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
  .main{
    .type-list{
      display: flex;
      text-align: center;
      &>div{
        flex:1;
      }
      .active{
        border-bottom: 2px solid blue;
      }
    }
  }
}
</style>
