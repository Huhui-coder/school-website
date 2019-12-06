<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="header">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>注册</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="main" hw-animate="fadeInUp">
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
              <el-form-item label="昵称" prop="name">
                <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="账号" prop="account">
                <el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
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
import { runAnimate } from "@/common/animate";


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
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入昵称"));
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
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      active: "student",
      ruleForm: {
        pass: "",
        checkPass: "",
        name: "",
        account: ""
      },
      rules: {
        name: [{ validator: validateName, trigger: "blur" }],
        account: [{ validator: validateAccount, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  mounted() {
    runAnimate();
  },
  methods: {
    resgist: async function() {
      const data = {
        userName: this.ruleForm.account,
        userPwd: this.$md5(this.ruleForm.pass)
      };
      let res;
      if (this.active === "student") {
        res = await this.$api.studentRegister(data);
      } else {
        res = await this.$api.companyRegister(data);
      }
      if (res.status == "0") {
        this.$notify({
          title: "成功",
          message: "注册成功",
          type: "success"
        });
        this.$router.push({
          path: "/login"
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
          this.resgist();
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
    min-height: 600px;
    padding-top: 100px;
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
