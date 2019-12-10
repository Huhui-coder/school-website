<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="main">
          <div class="backgroud-img">
            <div class="backgroud-wrap">
              <p hw-animate="fadeInLeft" class="me">安全中心</p>
              <p hw-animate="fadeInLeft delay-d5s" class="word">全程保障您的安全</p>
            </div>
          </div>
          <div class="context-wrap" hw-animate="fadeInUp">
            <p>紧急联系人 行程分享</p>
            <p>位置保护 实时监控</p>
            <p>录音功能 全程录音监督</p>
            <p>账号保护 账号加密</p>
            <p style="color:red;">报警 110</p>
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
          padding:10px;
      }
    }
  }
}
</style>
