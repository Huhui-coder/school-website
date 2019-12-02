<template>
  <div>
    <div v-for="item in list" :key="item.postId">
      招聘信息标题:{{item.title}}
      兼职类型:{{item.type}}
      招聘职位:{{item.post}}
      薪资范围:{{item.range}}
      招聘人数:{{item.number}}
      工作时间:{{item.fromTime}} --- {{item.toTime}}
      工作地点:{{item.location}}
      工作详情:{{item.detail}}
    </div>
  </div>
</template>

<script>
export default {
  name: "company",
  props: ["list"],
  data: () => ({}),
  mounted() {}
};
</script>

<style>
</style>