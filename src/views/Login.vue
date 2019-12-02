<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="header">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>登录</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="main">
          <div class="card">
            <div class="type-list">
              <div @click="active = 'student'" :class="{active:active === 'student'}">学生</div>
              <div @click="active = 'business'" :class="{active:active === 'business'}">商家</div>
            </div>
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="账号" prop="account">
                <el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </layouts>
  </div>
</template>

<script>
import layouts from "@/components/layouts";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "register",
  components: {
    layouts
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validateAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      active: "student",
      ruleForm: {
        pass: "",
        account: ""
      },
      rules: {
        account: [{ validator: validateAccount, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapActions("userInfo", [
      "asyncsetUserInfo" //userInfo.js文件中的actions里的方法
    ]),
    ...mapActions("companyInfo", [
      "asyncsetCompanyInfo" //userInfo.js文件中的actions里的方法
    ]),
    login: async function() {
      const data = {
        userName: this.ruleForm.account,
        userPwd: this.$md5(this.ruleForm.pass)
      };
      let res;
      if (this.active === "student") {
        res = await this.$api.studentLogin(data);
        this.asyncsetUserInfo(res.result);
      } else {
        res = await this.$api.companyLogin(data);
        this.asyncsetCompanyInfo(res.result);
      }
      if (res.status == "0") {
        this.$notify({
          title: "成功",
          message: "登录成功",
          type: "success"
        });
        this.$router.push({
          path: "/home"
        });
      } else {
        this.$notify.error({
          title: "失败",
          message: res.msg
        });
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.login();
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less" scoped>
.index {
  text-align: center;
  width: 80%;
  margin: 0 auto;
  min-height: 300px;
  background-color: whitesmoke;
  .header {
    padding: 15px;
  }
  .main {
    .type-list {
      display: flex;
      text-align: center;
      & > div {
        flex: 1;
      }
      .active {
        border-bottom: 2px solid blue;
      }
    }
    .card {
      width: 60%;
      margin: 0 auto;
      .type-list {
        margin: 20px;
        .active {
          border-bottom: 1px solid blue;
        }
      }
    }
  }
}
</style>
