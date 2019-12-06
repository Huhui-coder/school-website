<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="first-wrap">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in imgList" :key="item">
              <h3 class="medium">{{ item }}</h3>
              <!-- <div class="'banner-'+index"> -->
              <!-- </div> -->
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="seconde-wrap">
          <h2 hw-animate="fadeIn">平台综合能力</h2>
          <h5 hw-animate="fadeIn delay-d1s">集一体</h5>
          <div class="item-wrap">
            <div hw-animate="fadeInUp" class="item">
              <div class="icon">
                <svg-icon :icon-class="'complaint'"></svg-icon>
              </div>
              <div class="text">商家能力扩展</div>
            </div>
            <div hw-animate="fadeInUp delay-d1s" class="item">
              <div class="icon">
                <svg-icon :icon-class="'student'"></svg-icon>
              </div>
              <div class="text">商家能力扩展</div>
            </div>
            <div hw-animate="fadeInUp delay-d2s" class="item">
              <div class="icon">
                <svg-icon :icon-class="'push'"></svg-icon>
              </div>
              <div class="text">商家能力扩展</div>
            </div>
          </div>
        </div>
        <div class="third-wrap">
          <h2 hw-animate="fadeIn">平台特色</h2>
          <h5 hw-animate="fadeIn">全心全意</h5>
          <div class="item-wrap">
            <div class="item-content">
              <div
                hw-animate="fadeInUp"
                name="c1"
              >双向效能Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eos unde esse fugiat culpa ipsum veniam! Quas ad earum magnam. Dolorem saepe labore mollitia praesentium dolore ab repellat officia sed.</div>
              <div
                hw-animate="fadeInUp"
                name="c2"
              >会员制Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eos unde esse fugiat culpa ipsum veniam! Quas ad earum magnam. Dolorem saepe labore mollitia praesentium dolore ab repellat officia sed.</div>
              <div
                hw-animate="fadeInUp"
                name="c3"
              >信誉评测Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eos unde esse fugiat culpa ipsum veniam! Quas ad earum magnam. Dolorem saepe labore mollitia praesentium dolore ab repellat officia sed.</div>
              <div
                hw-animate="fadeInUp"
                name="c4"
              >紧急报警Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eos unde esse fugiat culpa ipsum veniam! Quas ad earum magnam. Dolorem saepe labore mollitia praesentium dolore ab repellat officia sed.</div>
            </div>
            <div class="item-list">
              <a hw-animate="fadeIn" href="#C1">双向效能</a>
              <a hw-animate="fadeIn" href="#C2">会员制</a>
              <a hw-animate="fadeIn" href="#C3">信誉评测</a>
              <a hw-animate="fadeIn" href="#C4">紧急报警</a>
            </div>
          </div>
        </div>
        <div class="last-wrap">
          <h2 hw-animate="fadeIn">平台特色</h2>
          <h5 hw-animate="fadeIn">全心全意</h5>
          <div class="item-wrap">
            <div class="item-content">
              <div
                hw-animate="fadeInUp"
                name="c1"
              >双向效能Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eos unde esse fugiat culpa ipsum veniam! Quas ad earum magnam. Dolorem saepe labore mollitia praesentium dolore ab repellat officia sed.</div>
              <div
                hw-animate="fadeInUp"
                name="c2"
              >会员制Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eos unde esse fugiat culpa ipsum veniam! Quas ad earum magnam. Dolorem saepe labore mollitia praesentium dolore ab repellat officia sed.</div>
              <div
                hw-animate="fadeInUp"
                name="c3"
              >信誉评测Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eos unde esse fugiat culpa ipsum veniam! Quas ad earum magnam. Dolorem saepe labore mollitia praesentium dolore ab repellat officia sed.</div>
              <div
                hw-animate="fadeInUp"
                name="c4"
              >紧急报警Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eos unde esse fugiat culpa ipsum veniam! Quas ad earum magnam. Dolorem saepe labore mollitia praesentium dolore ab repellat officia sed.</div>
            </div>
            <div class="item-list">
              <a hw-animate="fadeIn" href="#C1">双向效能</a>
              <a hw-animate="fadeIn" href="#C2">会员制</a>
              <a hw-animate="fadeIn" href="#C3">信誉评测</a>
              <a hw-animate="fadeIn" href="#C4">紧急报警</a>
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

export default {
  name: "home",
  components: {
    layouts
  },
  data(){
    return {
      imgList:['../img/banner-4.jpg','../img/banner-4.jpg','../img/banner-4.jpg','../img/banner-4.jpg','../img/banner-4.jpg']
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
  text-align: center;
  h2 {
    margin: 40px;
  }
  h5 {
    margin: 20px;
  }
  .index {
    .first-wrap {
      padding: 30px;
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
      }
      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }
      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
    }
    .seconde-wrap {
      background-color: #fff;
      padding: 30px;
      .item-wrap {
        display: flex;
        justify-content: center;
        .item {
          flex: 1;
          position: relative;
          transition: all 0.3s;
          &:hover {
            transform: translateY(-10px);
          }
          .icon {
            margin-bottom: 20px;
          }
          .text {
            padding: 30px;
          }
        }
      }
    }
    .third-wrap {
      padding: 30px;
      .item-wrap {
        .item-list {
          display: flex;
          & > a {
            flex: 1;
          }
        }
        .item-content {
          display: flex;
          flex: 1;
          position: relative;
          & > div {
            padding: 15px;
            transition: all 0.3s;
          }
          & > div:hover {
            transform: translateY(-10px);
          }
        }
      }
    }
    .last-wrap {
      background-color: #fff;
      padding: 30px;
      .item-wrap {
        .item-list {
          display: flex;
          & > a {
            flex: 1;
          }
        }
        .item-content {
          display: flex;
          flex: 1;
          position: relative;

          & > div {
            padding: 15px;
            transition: all 0.3s;
          }
          & > div:hover {
            transform: translateY(-10px);
          }
        }
      }
    }
  }
}
</style>
