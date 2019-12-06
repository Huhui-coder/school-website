<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="main-about">
          <div class="backgroud-img">
            <div class="backgroud-wrap">
              <p hw-animate="fadeInLeft" class="me">关于我们</p>
              <p hw-animate="fadeInLeft delay-d5s" class="word">双向效能</p>
            </div>
          </div>
          <div class="content-wrap">
            <div class="text-wrap">
              <p hw-animate="fadeInUp" class="first">
                网站主要功能有：
                1.为商家提供便利招聘渠道的商家招聘功能。
                2.为学生提供更多机会的学生求职功能。
                3.为防止不良商家的投诉平台功能。
                4.保证学生安全的紧急报警功能。
                5.保证网站活跃用户的会员制功能。
              </p>
              <p
                hw-animate="fadeInUp delay-d5s"
                class="second"
              >集合商家招聘，学生求职，投诉平台，紧急报警，会员制，用户注册账号，记录相关信息的注册功能。对商家信誉进行测评的信誉测评功能。为保证学生利益的押金功能。</p>
            </div>
            <div class="icon-wrap" hw-animate="fadeInRight">
              <svg-icon :icon-class="'push'"></svg-icon>
            </div>
          </div>
        </div>
      </div>
    </layouts>
  </div>
</template>

<script>
import layouts from "@/components/layouts";
import { runAnimate } from "@/common/animate";

export default {
  name: "home",
  components: {
    layouts
  },
  data: () => ({}),
  mounted() {
    runAnimate();
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
  .main-about {
    .backgroud-img {
      height: 260px;
      background: url(../img/banner.png) no-repeat 50%;
      color: #fff;
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
    .content-wrap {
      width: 80%;
      margin: 0 auto;
      padding-top: 140px;
      padding-bottom: 140px;
      display: flex;
      flex-direction: row;
      .text-wrap {
        width: 50%;
        border-right: 1px solid #ccc;
        padding-right: 20px;
        font-size: 15px;
        font: caption;
        .first {
          margin-bottom: 60px;
        }
        .second {
          margin-bottom: 60px;
        }
      }
      .icon-wrap{
        flex: 1;
        text-align: center;
        padding-left: 20px;
      }
    }
  }
}
</style>
