<template>
  <div>
    <div class="wrap">
      <div class="title">1）求职信息标题</div>
      <div class="info">
        <div>2）兼职类型</div>
        <div>（3）招聘职位</div>
        <div>4）薪资范围</div>
        <div>（5）招聘人数</div>
        <div>6）工作时间（</div>
        <div>7）工作地点</div>
      </div>
      <div class="footer">
        <div class="detail">
          <router-link to="/marketDetail">查看详情</router-link>
        </div>
        <div class="time">(8）发布时间</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "applyList"
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
