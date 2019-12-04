<template>
  <div>
    <div class="wrap" v-for="item in list" :key="item.applyId">
      <div class="title">应聘职位{{item.post}}</div>
      <div class="info">
        <p>姓名:{{item.name}}</p>
        <p>联系方式:{{item.phone}}</p>
        <p>应聘地区:{{item.area}}</p>
        <p>理想薪资:{{item.range}}</p>
        <p>空余时间:{{item.fromTime | dateformat}} ---- {{item.toTime | dateformat}}</p>
      </div>
      <div class="footer">
        <div class="detail">
          <router-link
            :to="{path:'/applyDetail',query:{ studentId:item.studentId,applyId:item.applyId}}"
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
      let res = await this.$api.allApply();
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
</style>>
