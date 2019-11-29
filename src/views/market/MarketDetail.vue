<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <div class="header">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/market' }">人才市场</el-breadcrumb-item>
            <el-breadcrumb-item>招聘详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="wrap">
          <div class="title">1）招聘信息标题</div>
          <div class="info">
            <div>2）兼职类型</div>
            <div>（3）招聘职位</div>
            <div>4）薪资范围</div>
            <div>（5）招聘人数</div>
            <div>6）工作时间（</div>
            <div>7）工作地点</div>
          </div>
          <div class="main">
              详情
          </div>
          <div class="footer">
            <div class="time">(8）发布时间</div>
          </div>
        </div>
      </div>
    </layouts>
  </div>
</template>

<script>
import layouts from "@/components/layouts";

export default {
  name: "home",
  components: {
    layouts
  },
  data: () => ({
    
  }),
  mounted(){
  },

  methods: {
    
    
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
  .wrap {
  display: row;
  background-color: #fff;
  padding: 10px;
  margin: 10px;
  .title {
    font-size: 19px;
    font-weight: bolder;
    color: #000;
  }
  .info {
    font-size: 16px;
    font-weight: bolder;
    color: gray;
  }
  .footer {
    font-size: 14px;
    font-weight: normal;
    color: gray;
    display: flex;
    justify-content: space-between;
    .detail {
    }
  }
}
}
</style>
