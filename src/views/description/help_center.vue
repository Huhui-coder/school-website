<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="main">
          <div class="backgroud-img">
            <div class="backgroud-wrap">
              <p hw-animate="fadeInLeft" class="me">帮助中心</p>
              <p hw-animate="fadeInLeft delay-d5s" class="word">解答您的疑惑</p>
            </div>
          </div>
          <div class="context-wrap" hw-animate="fadeInUp">
            <p class="problem">
              <i class="el-icon-question" style="color:#409eff;font-size: 20px"></i>
              1.为什么发布信息很快被删除了？
            </p>
            <p class="answer">由于内容违法或重复过多或明显不符合版规的信息的情况下进行的删除，同时检查有没通过营业执照的认证。</p>
            <p class="problem">
              <i class="el-icon-question" style="color:#409eff;font-size: 20px"></i>
              2.为什么我发布的信息处于审核状态？
            </p>

            <p
              class="answer"
            >新发布或修改后的信息都要审核后才能显示。如果您的信息不是中介、网赚、重复、虚假信息等不受欢迎的信息，那么请耐心等待很快就会审核通过的，同时检查有没通过执照的认证，我们非常欢迎优质的信息。</p>
            <p class="problem">
              <i class="el-icon-question" style="color:#409eff;font-size: 20px"></i>
              3.是否可以发布内容相同的重复信息？
            </p>
            <p
              class="answer"
            >不用重复发布，只需登录到个人中心，进行免费刷新就变成当前时间的信息了。如果发布重复信息，系统会自动识别为垃圾信息，可能导致全部被删除及被屏蔽。</p>
            <p class="problem">
              <i class="el-icon-question" style="color:#409eff;font-size: 20px"></i>
              4.我可以异地发布信息？
            </p>
            <p class="answer">拒绝异地（非同城）发布信息。</p>
            <p class="problem">
              <i class="el-icon-question" style="color:#409eff;font-size: 20px"></i>
              5.职介是否可以冒充非职介招聘？
            </p>
            <p class="answer">职介冒充非职介，一经发现，坚决处理，并删除其以往所有信息，列入监控黑名单。</p>
            <p class="problem">
              <i class="el-icon-question" style="color:#409eff;font-size: 20px"></i>
              6.如何修改、删除已发布的信息？
            </p>

            <p class="answer">在网站上部，点击"个人中心"栏目，进入即可看到具体的操作。如果没登录会提示先登录。</p>
            <p class="problem">
              <i class="el-icon-question" style="color:#409eff;font-size: 20px"></i>
              7.是否可以注册多个帐号发布信息？
            </p>
            <p class="answer">不可以，建议拥有一个用户帐号，一个人或一个单位仅可以拥有不超过1个用户帐号。</p>
            <p class="problem">
              <i class="el-icon-question" style="color:#409eff;font-size: 20px"></i>
              8.招聘信息多久会自动被删除？
            </p>
            <p class="answer">为了保证招聘信息的新鲜有效，招聘信息一般60天后会被标识为过期并进行删除。</p>
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
      .problem{
          font-size: 19px;
          color: #000;
          padding:10px;
      }
      .answer{
          font-size: 16px;
          text-indent: 2em;
          padding:10px;

      }
    }
  }
}
</style>
