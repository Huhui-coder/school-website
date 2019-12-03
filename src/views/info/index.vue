<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="header">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>个人中心</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <component :is="active" @openModel="onOpenModel" @openNewModel="onOpenNewModel" />
      </div>
    </layouts>
    <el-dialog
      title="编辑个人资料"
      :visible.sync="SdialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="昵称">
          <el-input v-model="form.nickName"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input type="number" v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="理想岗位">
          <el-input v-model="form.position"></el-input>
        </el-form-item>
        <el-form-item label="理想薪资">
          <el-input type="number" v-model="form.salary"></el-input>
        </el-form-item>
        <el-form-item label="地区">
          <el-input v-model="form.area"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="SdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUserInfo()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="编辑公司资料"
      :visible.sync="CdialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="公司名称">
          <el-input v-model="Cform.companyName"></el-input>
        </el-form-item>
        <el-form-item label="公司简介">
          <el-input type="textarea" v-model="Cform.introduction"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="CdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="CeditUserInfo()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="编辑岗位需求"
      :visible.sync="NCdialogVisible"
      width="70%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="NCform" label-width="100px">
        <el-form-item label="招聘信息标题">
          <el-input v-model="NCform.title"></el-input>
        </el-form-item>
        <el-form-item label="兼职类型">
          <el-input v-model="NCform.type"></el-input>
        </el-form-item>
        <el-form-item label="招聘职位">
          <el-input v-model="NCform.post"></el-input>
        </el-form-item>
        <el-form-item label="薪资范围">
          <el-input v-model="NCform.range"></el-input>
        </el-form-item>
        <el-form-item label="招聘人数">
          <el-input v-model="NCform.number"></el-input>
        </el-form-item>
        <el-form-item label="工作时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="NCform.fromTime"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2" style="text-align:center">-</el-col>
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="NCform.toTime"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="工作地点">
          <el-input v-model="NCform.location"></el-input>
        </el-form-item>
        <el-form-item label="工作详情">
          <el-input type="textarea" v-model="NCform.detail"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="NCdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addPost()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="编辑求职申请"
      :visible.sync="NSdialogVisible"
      width="70%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="NSform" label-width="100px">
        <el-form-item label="姓名">
          <el-input v-model="NSform.name"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="NSform.phone"></el-input>
        </el-form-item>
        <el-form-item label="应聘职位">
          <el-input v-model="NSform.post"></el-input>
        </el-form-item>
        <el-form-item label="应聘地区">
          <el-input v-model="NSform.area"></el-input>
        </el-form-item>
        <el-form-item label="理想薪资">
          <el-input v-model="NSform.range"></el-input>
        </el-form-item>
        <el-form-item label="空余时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="NSform.fromTime"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2" style="text-align:center">-</el-col>
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="NSform.toTime"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="NSdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addApply()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import layouts from "@/components/layouts";
import company from "./components/company";
import student from "./components/student";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    layouts,
    company,
    student
  },
  data: () => ({
    form: {
      nickName: "s",
      phone: 1,
      position: "s",
      salary: 1,
      area: "s"
    },
    Cform: {
      companyName: "pi",
      introduction: "pi"
    },
    NCform: {
      title: "1",
      type: "2",
      post: "3",
      range: "4",
      number: "5",
      fromTime: "",
      toTime: "",
      location: "6",
      detail: "7"
    },
    NSform: {
      name: "1",
      phone: "1",
      post: "1",
      area: "1",
      range: "1",
      fromTime: "",
      toTime: ""
    },
    SdialogVisible: false,
    CdialogVisible: false,
    NCdialogVisible: false,
    NSdialogVisible: false,
    role: localStorage.getItem("role")
  }),
  mounted() {
    this.getPostList();
    this.getApplyList()
  },
  computed: {
    active() {
      return this.getCompanyInfo.role || this.getUserInfo.role;
    },
    studentId() {
      return this.getUserInfo.info.studentId;
    },
    companyId() {
      return this.getCompanyInfo.info.companyId;
    }
  },
  methods: {
    ...mapActions("userInfo", ["asyncsetUserInfo","asyncsetStudentApply"]),
    ...mapActions("companyInfo", [
      "asyncsetCompanyInfo",
      "asyncsetCompanyPost"
    ]),
    onOpenModel(value) {
      if (value === "company") {
        this.CdialogVisible = true;
      } else {
        this.SdialogVisible = true;
      }
    },
    onOpenNewModel(value) {
      if (value === "company") {
        this.NCdialogVisible = true;
      } else {
        this.NSdialogVisible = true;
      }
    },
    addPost: async function() {
      let params = Object.assign(this.NCform, {
        companyId: this.companyId
      });
      let res = await this.$api.addPost(params);
      this.getPostList();
      this.NCdialogVisible = false;
    },
    addApply: async function() {
      let params = Object.assign(this.NSform, {
        studentId: this.studentId
      });
      let res = await this.$api.addApply(params);
      this.getApplyList();
      this.NSdialogVisible = false;
    },
    getPostList: async function() {
      if (this.role === "company") {
        let obj = { companyId: this.companyId };
        let res = await this.$api.getPostList(obj);
        this.asyncsetCompanyPost(res.result);
      }
    },
    getApplyList: async function() {
      if (this.role === "student") {
        let obj = { studentId: this.studentId };
        let res = await this.$api.getApplyList(obj);
        this.asyncsetStudentApply(res.result);
      }
    },
    editUserInfo: async function() {
      let params = Object.assign(this.form, {
        studentId: this.studentId
      });
      let res = await this.$api.editUserInfo(params);
      let obj = { studentId: this.studentId };
      let playload = await this.$api.getUserInfo(obj);
      this.asyncsetUserInfo(playload.result.data);
      this.SdialogVisible = false;
    },
    CeditUserInfo: async function() {
      let params = Object.assign(this.Cform, {
        companyId: this.companyId
      });
      let res = await this.$api.editCompanyInfo(params);
      let obj = { companyId: this.companyId };
      let playload = await this.$api.getCompanyInfo(obj);
      this.asyncsetCompanyInfo(playload.result.data);
      this.CdialogVisible = false;
    },
    handleClose() {
      this.SdialogVisible = false;
      this.CdialogVisible = false;
      this.NCdialogVisible = false;
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
    .wrap {
      .title {
        font-size: 18px;
        padding: 15px;
      }
      .content {
        min-height: 100px;
        display: flex;
        flex-direction: row;
        .icon {
          padding-right: 10%;
          border-right: 1px solid #999;
        }
        .text {
          padding-left: 10%;
        }
      }
      .list {
        min-height: 100px;
      }
    }
  }
}
</style>
