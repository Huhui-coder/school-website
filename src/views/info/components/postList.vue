<template>
  <div>
    <div v-for="item in list" :key="item.postId" class="wrap">
      <div class="item">
        <div class="content">
          <div class="title">招聘信息标题:{{item.title}}</div>
          <div class="desc">
            <p>兼职类型:{{item.type}}</p>
            <p>招聘职位:{{item.post}}</p>
            <p>薪资范围:{{item.range}}</p>
            <p>招聘人数:{{item.number}}</p>
            <p>工作时间:{{item.fromTime | dateformat}} ---- {{item.toTime | dateformat}}</p>
            <p>工作地点:{{item.location}}</p>
          </div>
        </div>
        <div class="detail">
          <p>工作详情:</p>
          <p>{{item.detail}}</p>
          <p>发布时间:</p>
          <p>{{item.now}}</p>
          <div class="edit">
            <el-button type="text" @click="open(item.postId)">编辑</el-button>
            <el-button type="text" @click="showdelModel(item.postId)">删除</el-button>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="编辑岗位需求"
      :visible.sync="NCdialogVisible"
      width="70%"
      :before-close="handleClose"
    >
      <p style="margin:10px">*发表成功后，便不可修改细节，只能更改标题</p>
      <el-form ref="form" :model="NCform" label-width="100px">
        <el-form-item label="招聘信息标题">
          <el-input v-model="NCform.title"></el-input>
        </el-form-item>
        <el-form-item label="兼职类型">
          <el-input v-model="NCform.type" disabled></el-input>
        </el-form-item>
        <el-form-item label="招聘职位">
          <el-input v-model="NCform.post" disabled></el-input>
        </el-form-item>
        <el-form-item label="薪资范围">
          <el-input v-model="NCform.range" disabled></el-input>
        </el-form-item>
        <el-form-item label="招聘人数">
          <el-input v-model="NCform.number" disabled></el-input>
        </el-form-item>
        <el-form-item label="工作时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="NCform.fromTime"
              style="width: 100%;"
              disabled
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2" style="text-align:center">-</el-col>
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="NCform.toTime"
              style="width: 100%;"
              disabled
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="工作地点">
          <el-input v-model="NCform.location" disabled></el-input>
        </el-form-item>
        <el-form-item label="工作详情">
          <el-input type="textarea" v-model="NCform.detail" disabled></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="NCdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editPost()">确 定</el-button>
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
  name: "company",
  props: ["list"],
  data: () => ({
    NCdialogVisible: false,
    dialogVisible: false,
    currentPostId: "",
    NCform: {
      title: "",
      type: "",
      post: "",
      range: "",
      number: "",
      fromTime: "",
      toTime: "",
      location: "",
      detail: ""
    }
  }),
  computed: {
    companyId() {
      return this.getCompanyInfo.info.companyId;
    }
  },
  mounted() {},
  methods: {
    ...mapActions("companyInfo", [
      "asyncsetCompanyInfo",
      "asyncsetCompanyPost"
    ]),
    showdelModel(id) {
      this.currentPostId = id;
      this.dialogVisible = true;
    },
    del: async function() {
      let params = {
        companyId: this.companyId,
        postId: this.currentPostId
      };
      let res = await this.$api.delPost(params);
      this.getPostList();
      this.dialogVisible = false;
    },
    handleClose() {
      this.NCdialogVisible = false;
      this.dialogVisible = false;
    },
    open: async function(id) {
      this.currentPostId = id;
      //获取单个岗位需求的详情
      let params = {
        companyId: this.companyId,
        postId: id
      };
      let res = await this.$api.postDetail(params);
      let result = res.result[0];
      this.NCform = { ...result };
      this.NCdialogVisible = true;
    },
    editPost: async function() {
      //编辑单个岗位需求的详情
      let data = {
        companyId: this.companyId,
        postId: this.currentPostId,
        ...this.NCform
      };
      let res = await this.$api.editPost(data);
      this.getPostList();
      this.NCdialogVisible = false;
    },
    getPostList: async function() {
      let obj = { companyId: this.companyId };
      let res = await this.$api.getPostList(obj);
      this.asyncsetCompanyPost(res.result);
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