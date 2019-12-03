<template>
  <div>
    <div v-for="item in list" :key="item.applyId" class="wrap">
      <div class="item">
        <div class="content">
          <div class="title">姓名:{{item.name}}</div>
          <div class="desc">
            <p>联系方式:{{item.phone}}</p>
            <p>应聘职位:{{item.post}}</p>
            <p>应聘地区:{{item.area}}</p>
            <p>理想薪资:{{item.range}}</p>
            <p>空余时间:{{item.fromTime | dateformat}} ---- {{item.toTime | dateformat}}</p>
          </div>
        </div>
        <div class="detail">
          <p>发布时间:</p>
          <p>{{item.now}}</p>
          <div class="edit">
            <el-button type="text" @click="open(item.applyId)">编辑</el-button>
            <el-button type="text" @click="showdelModel(item.applyId)">删除</el-button>
          </div>
        </div>
      </div>
    </div>
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
        <el-button type="primary" @click="editApply()">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="删除提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>是否确定删除该条岗位信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="del()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "student",
  props: ["list"],
  data: () => ({
    NSdialogVisible: false,
    dialogVisible: false,
    currentApplyId: "",
    NSform: {
      title: "1",
      type: "2",
      post: "3",
      range: "4",
      number: "5",
      fromTime: "",
      toTime: "",
      location: "6",
      detail: "7"
    }
  }),
  computed: {
    studentId() {
      return this.getUserInfo.info.studentId;
    }
  },
  mounted() {},
  methods: {
    ...mapActions("userInfo", ["asyncsetUserInfo", "asyncsetStudentApply"]),

    showdelModel(id) {
      this.currentApplyId = id;
      this.dialogVisible = true;
    },
    del: async function() {
      let params = {
        studentId: this.studentId,
        applyId: this.currentApplyId
      };
      let res = await this.$api.delApply(params);
      this.getApplyList();
      this.dialogVisible = false;
      console.log("确定删除");
    },
    handleClose() {
      this.NCdialogVisible = false;
      this.dialogVisible = false;
    },
    open: async function(id) {
      this.currentApplyId = id;
      //获取单个岗位需求的详情
      let params = {
        studentId: this.studentId,
        applyId: id
      };
      let res = await this.$api.applyDetail(params);
      let result = res.result[0];
      this.NSform = { ...result };
      this.NSdialogVisible = true;
    },
    editApply: async function() {
      //编辑单个求职需求的详情
      let data = {
        studentId: this.studentId,
        applyId: this.currentApplyId,
        ...this.NSform
      };
      let res = await this.$api.editApply(data);
      this.getApplyList();
      this.NSdialogVisible = false;
    },
    getApplyList: async function() {
      let obj = { studentId: this.studentId };
      let res = await this.$api.getApplyList(obj);
      this.asyncsetStudentApply(res.result);
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  .item {
    display: flex;
    flex-direction: row;
    padding: 20px;
    .content {
      width: 60%;
      border-right: 1px solid #ddd;
      .title {
        font-size: 18px;
        font-weight: bolder;
      }
      .desc {
        font-size: 15px;
        color: #6d5d5d;
      }
    }
    .detail {
      padding-left: 20px;
      flex: 1;
      color: #6d5d5d;
      &:hover {
        .edit {
          display: block;
        }
      }
      .edit {
        display: none;
      }
    }
  }
}
</style>>