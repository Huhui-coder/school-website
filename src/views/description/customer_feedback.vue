<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="main">
          <div class="backgroud-img">
            <div class="backgroud-wrap">
              <p hw-animate="fadeInLeft" class="me">用户反馈</p>
              <p hw-animate="fadeInLeft delay-d5s" class="word">您的每一次反馈，都是我们前进的方向。</p>
            </div>
          </div>
          <div class="context-wrap" hw-animate="fadeInUp">
            <el-form ref="form" :model="form" label-width="180px">
              <el-form-item label="*您的Email:">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="*问题描述::">
                <el-input type="textarea" v-model="form.problem"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即反馈</el-button>
                <el-button @click="form = {}">取消</el-button>
              </el-form-item>
            </el-form>
            <p style="margin-left:90px">
              您提交的信息是被信赖和重视的，将仅用于不断完善我们的产品。
              信息被删除，建议先查看
              <router-link to="/help_center" tag="a" style="color:blue">帮助中心</router-link>和
              <router-link to="/user_agreement" tag="a" style="color:blue">用户协议</router-link>。
              感谢您的支持！在您的帮助下，校园兼职网会日趋完善。
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
    return {
      form: {
        email: "",
        problem: ""
      }
    };
  },
  mounted() {
    runAnimate();
  },
  methods: {
    onSubmit() {
      if (this.form.email && this.form.problem) {
        setTimeout(() => {
          this.$notify({
            title: "成功",
            message: "反馈成功",
            type: "success"
          });
          this.form = {};
        }, 300);
      } else {
        this.$notify({
          title: "失败",
          message: "表单元素不能为空",
          type: "error"
        });
      }
    }
  }
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
      .description {
        font-size: 13px;
        color: gray;
        padding-bottom: 30px;
      }
    }
  }
}
</style>
