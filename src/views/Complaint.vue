<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="header">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>投诉平台</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="main">
          <p class="description">
            兼职网站不免出现一些虚假兼职广告以及一些不良商家欺骗学生，为减少学生在选择兼职时上当受骗的可能性。我们将采用让学生投诉的方式，
            加强对虚假广告和不良商家的管理，以防学生的利益受到损失。
          </p>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="公司名称" props="name">
              <el-select v-model="form.name" placeholder="请选择公司名称">
                <el-option v-for="item in allCompanyList" :key="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="投诉类型" props="type">
              <el-select v-model="form.type" placeholder="请选择投诉类型">
                <el-option label="虚假广告" value="fake"></el-option>
                <el-option label="诈骗" value="scam"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="详细说明" props="desc">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button @click="cancel()">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </layouts>
  </div>
</template>

<script>
import layouts from "@/components/layouts";
import { async } from "q";

export default {
  name: "complaint",
  components: {
    layouts
  },
  data() {
    return {
      form: {
        name: "",
        type: [],
        desc: ""
      },
      allCompanyList: []
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch: async function() {
      let res = await this.$api.allCompanyList();
      let result = [];
      result = res.result.map(item => item.companyName);
      result = result.filter(item => item !== undefined && item !== "");
      this.allCompanyList = result;
    },
    onSubmit() {
      setTimeout(() => {
        this.$notify({
          title: "成功",
          message: "举报成功",
          type: "success"
        });
      }, 300);
    },
    cancel() {
      //强制重置，因为 this.$refs['form'].resetFields() 没生效
      this.form = {}
    }
  }
};
</script>
<style lang="less" scoped>
.index {
  width: 80%;
  margin: 0 auto;
  min-height: 300px;
  background-color: whitesmoke;
  .header {
    padding: 15px;
  }
  .main {
    .description {
      font-size: 13px;
      color: gray;
    }
  }
}
</style>
