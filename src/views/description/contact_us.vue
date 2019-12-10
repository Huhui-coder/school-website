<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="main">
          <div class="backgroud-img">
            <div class="backgroud-wrap">
              <p hw-animate="fadeInLeft" class="me">联系我们</p>
              <p hw-animate="fadeInLeft delay-d5s" class="word">提供联系我们的方式</p>
            </div>
          </div>
          <div class="context-wrap" hw-animate="fadeInUp">
            <p class="title">1、信息审核发布、执照认证审核</p>
            <p class="text">
              QQ：332674305
              Email：332674305@qq.com
              注：请提供登录名咨询
            </p>
            <p class="title">2、 商家线下合作、校园合作、地推</p>
            <p class="text">
              QQ：112493682
              Email：vip@xiaoyuan.com
              需要快速招聘兼职人员,请进入 兼职团队
            </p>
            <p class="title">3、 投诉客服、网站合作</p>
            <p class="text">
              QQ：112493682
              Email：vip@xiaoyuan.com
            </p>
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
  name: "complaint",
  components: {
    layouts
  },
  data() {
    return {};
  },
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
  .main {
    .backgroud-img {
      height: 260px;
      background: url(../../img/banner-2.jpg) no-repeat 50%;
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
      padding-top: 80px;
      min-height: 600px;
      .title {
        padding: 10px;
        font-size: 17px;
      }
      .text::after {
        content: "";
        position: absolute;
        display: block;
        border-bottom: 2px solid #ddd;
        bottom: -3px;
        width: 100%;
        height: 2px;
        left: 0px;
      }
      .text {
        padding: 10px;
        position: relative;
      }
    }
  }
}
</style>
