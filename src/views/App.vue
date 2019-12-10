<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="main">
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
    <div>
    </div>
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
  data(){
    return {
      active: "recruitment"
    }
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
    .main{
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
}
</style>
