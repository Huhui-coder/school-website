<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="main">
          <div class="backgroud-img">
            <div class="backgroud-wrap">
              <p hw-animate="fadeInLeft" class="me">广告服务</p>
              <p hw-animate="fadeInLeft delay-d5s" class="word">承接广告服务。</p>
            </div>
          </div>
          <div class="context-wrap" hw-animate="fadeInUp">
            <p>*广告业务咨询合作，请直接联系QQ客服 332674305 加QQ时注明（广告咨询）</p>
            <p>工作时间：周一至周五 9:00--12:00 13:00-17:30 不在工作时间内的，可以QQ留言</p>
            <p>说明：广告到期，本站自动拿下，不主动去问是否续租广告，如要续费，请提前与管理员联系</p>
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
      p{
          font-size: 17px;
          padding:10px;
      }
    }
  }
}
</style>
