<template>
  <div>
    <div class="wrap" v-for="item in list" :key="item._id">
      <div class="title">{{item.title}}</div>
      <div class="info">
        <div class="left">
          <div>兼职类型：{{item.type}}</div>
          <div>招聘职位：{{item.post}}</div>
          <div>薪资范围：{{item.range}}</div>
          <div>招聘人数：{{item.number}}</div>
          <div>工作时间：{{item.fromTime | dateformat}}</div>
          <div>工作时间：{{item.toTime | dateformat}}</div>
        </div>
        <div class="right">
          <div>
            <i class="el-icon-location" style="color:#409eff"></i>
            工作地点：{{item.location}}
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="detail">
          <router-link
            :to="{path:'/marketDetail',query:{ companyId:item.companyId,postId:item.postId}}"
          >查看详情</router-link>
        </div>
        <div class="time">发布时间:{{item.now}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "marketList",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch: async function() {
      let res = await this.$api.allPost();
      res.result = [].concat.apply([], res.result);
      this.list = res.result.filter(item => item !== null);
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  display: row;
  background-color: #fff;
  padding: 10px;
  .title {
    font-size: 19px;
    font-weight: bolder;
    color: #000;
  }
  .info {
    font-size: 16px;
    font-weight: bolder;
    color: gray;
    display: flex;
    justify-content: space-between;
    .left {
    }
    .right {
    }
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
</style>>
