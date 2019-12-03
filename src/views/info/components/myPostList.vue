<template>
  <div class="home">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myPostLoist",
  props: ["list"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: row;
  background-color: #fff;

  .wrap {
    width: 30%;
    padding: 10px;
    border: 1px solid #ddd;
  }
}
</style>>
