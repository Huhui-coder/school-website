<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="main-push">
          <div class="backgroud-img">
            <div class="backgroud-wrap">
              <p hw-animate="fadeInLeft" class="me">每日推送</p>
              <p hw-animate="fadeInLeft delay-d5s" class="word">了解最新资讯</p>
            </div>
          </div>
          <div class="context-wrap">
          <template v-if="isAdmin">
            <span style="font-size:13px;">您是管理员，您可以</span>
            <el-button type="text" @click="dialogVisible = true">发表新的推送</el-button>
          </template>
          <list :data="list" @del="onDel" />
          </div>
        </div>
      </div>
    </layouts>
    <el-dialog title="发表推送" :visible.sync="dialogVisible" width="70%" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="题目">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-input v-model="form.type"></el-input>
        </el-form-item>
        <el-form-item label="正文">
          <el-input type="textarea" v-model="form.text"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="add()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="删除提示" :visible.sync="NdialogVisible" width="30%" :before-close="handleClose">
      <span>是否确定删除该条推送消息吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="NdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="delPush()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import layouts from "@/components/layouts";
import list from "./components/list";
import { runAnimate } from "@/common/animate";


export default {
  name: "home",
  components: {
    layouts,
    list
  },
  data: () => ({
    list: [],
    form: {
      title: "",
      type: "",
      text: ""
    },
    dialogVisible: false,
    NdialogVisible: false,
    currentId: ""
  }),
  computed: {
    isAdmin() {
      let userName = JSON.parse(localStorage.getItem("userInfo")).info.userName;
      return userName === "admin";
    }
  },
  mounted() {
    this.fetch();
    runAnimate()
  },

  methods: {
    async delPush() {
      let params = {
        id: this.currentId
      };
      let res = await this.$api.delArticles(params);
      this.NdialogVisible = false;
      await this.fetch();
    },
    onDel(value) {
      this.NdialogVisible = true;
      this.currentId = value;
      console.log(value);
    },
    handleClose() {
      this.dialogVisible = false;
    },
    async add() {
      let params = this.form;
      let res = this.$api.addArticles(params);
      this.dialogVisible = false;
      this.$notify({
        title: "成功",
        message: "发表成功",
        type: "success"
      });
      this.fetch();
    },
    async fetch() {
      let res = await this.$api.fetchArticles();
      this.list = res.result;
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
  .main-push {
    .backgroud-img {
      height: 260px;
      background: url('../../img/banner-3.jpg') no-repeat 50%;
      background-size: cover;
      color: #fff;
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
    .context-wrap{
      width: 80%;
      margin: 0 auto;
    }
  }
}
</style>
