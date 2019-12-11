<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="main">
          <div class="context-wrap" hw-animate="fadeInUp">
            <el-form ref="form" :model="form" label-width="170px" :inline="true" style="margin-top:20px;">
              <el-form-item label="按照省份选择您的城市">
                <el-select v-model="form.city" placeholder="请选择您的城市">
                  <el-option label="重庆" value="cq"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="学校">
                <el-select v-model="form.school" placeholder="请选择学校">
                  <el-option label="长江师范学院" value="yznu"></el-option>
                  <el-option label="文理学院" value="wenli"></el-option>
                  <el-option label="重庆邮电大学" value="youdian"></el-option>
                  <el-option label="重庆大学" value="cq"></el-option>
                  <el-option label="四川美术学院" value="meishu"></el-option>
                  <el-option label="重庆理工大学" value="ligong"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div class="type-list">
              <div @click="active = 'recruitment'" :class="{active:active === 'recruitment'}">招聘</div>
              <div @click="active = 'apply'" :class="{active:active === 'apply'}">求职</div>
            </div>
            <div v-if="active === 'recruitment'" class="box-wrap">
              <market-list />
            </div>
            <div v-else class="box-wrap">
              <apply-list />
            </div>
          </div>
        </div>
      </div>
    </layouts>
    <div></div>
  </div>
</template>

<script>
import layouts from "@/components/layouts";
import { runAnimate } from "@/common/animate";
import marketList from "@/views/market/components/marketList";
import applyList from "@/views/market/components/applyList";

export default {
  name: "home",
  components: {
    layouts,
    marketList,
    applyList
  },
  data() {
    return {
      active: "recruitment",
      form:{
        city:'cq',
        school:''
      }
    };
  },
  methods: {},
  mounted() {
    runAnimate();
  }
};
</script>
<style lang="less" scoped>
.home {
  h2 {
    margin: 40px;
  }
  h5 {
    margin: 20px;
  }
  .index {
    .main {
      .context-wrap {
        width: 80%;
        margin: 0 auto;
        .type-list {
          display: flex;
          text-align: center;
          min-height: 60px;
          line-height: 60px;
          & > div {
            flex: 1;
          }
          .active {
            border-bottom: 2px solid blue;
          }
        }
        .box-wrap {
          min-height: 500px;
        }
      }
    }
  }
}
</style>
