<template>
  <div class="home">
    <div v-for="item in list" :key="item.postId" class="wrap">
      <div class="item">
        <div class="content">
          <div class="title">姓名:{{item.nickName}}</div>
          <div class="desc">
            <p>联系方式:{{item.phone}}</p>
            <p>应聘职位:{{item.position}}</p>
            <p>应聘地区:{{item.area}}</p>
            <p>理想薪资:{{item.salary}}</p>
          </div>
        </div>
        <div class="detail"></div>
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
