<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="main">
          <div class="backgroud-img">
            <div class="backgroud-wrap">
              <p hw-animate="fadeInLeft" class="me">站点简介</p>
              <p hw-animate="fadeInLeft delay-d5s" class="word">本站功能简介</p>
            </div>
          </div>
          <div class="context-wrap" hw-animate="fadeInUp">
            <p> 就目前的情况而言，大学生获得兼职信息的渠道非常有限，存在大量不可靠因素。</p>
            <p>因此，随着大学生分配制度的改革,就业形势的日益严峻,知识经济时代的到来,各院校均涌现出不计其数的校园兼职者。</p>
            <p>他们除完成学习任务之外,还在校外兼职打工。</p>
            <p>并且由于人才市场的涌动一些刚出校门的毕业生应无工作经验找工作也成了一大问题。</p>
            <p>这也就促使我们建立这个网站的想法,就是要建立一个兼职网。</p>
            <p>本网站是由一支关注通过兼职提升自我并且可以赚钱的年轻团队建立,旨在把时下最新最好的兼职赚钱资讯,免费提供给在校大学生。</p>
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
          font-size: 16px;
          padding:10px;
      }
    }
  }
}
</style>
