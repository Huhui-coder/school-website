<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="main">
          <div class="backgroud-img">
            <div class="backgroud-wrap">
              <p hw-animate="fadeInLeft" class="me">人才市场</p>
              <p hw-animate="fadeInLeft delay-d5s" class="word">发掘你想要的，寻求你的千里马。</p>
            </div>
          </div>
          <div class="context-wrap" hw-animate="fadeInUp">
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
  </div>
</template>

<script>
import layouts from "@/components/layouts";
import marketList from "./components/marketList";
import applyList from "./components/applyList";
import { runAnimate } from "@/common/animate";


export default {
  name: "market",
  components: {
    layouts,
    marketList,
    applyList
  },
  data: () => ({
    active: "recruitment"
  }),
  mounted() {
    runAnimate()
  },

  methods: {}
};
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  margin: 0 auto;
  min-height: 300px;
  background-color: whitesmoke;
  .header {
    padding: 15px;
  }
  .main {
    .backgroud-img {
      height: 260px;
      background: url(../../img/banner-1.jpg) no-repeat 50%;
      color: #fff;
      background-size: cover;
      .backgroud-wrap {
        width: 80%;
        margin: 0 auto;
        .me {
          font-size: 38px;
          padding-top: 86px;
        }
        .word {
          font-size: 15px;
          padding-top: 20px;
        }
      }
    }
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
      .box-wrap{
        min-height: 500px;
      }
    }
  }
}
</style>
