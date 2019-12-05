<template>
  <div style="background-color:#fff;">
    <div class="wrap" v-for="(item,index) in data" :key="item._id" @click="toDetail(item._id)">
        <div class="my-icon" v-if="isAdmin" @click.stop="del(item._id)" >
        <svg-icon :icon-class="'deleted'" style="width:30px;height:30px"></svg-icon>
        </div>
      <div class="img"> 
        <svg-icon :icon-class="'icon-'+index" class="icon"></svg-icon>
      </div>
      <div class="text">
        <div class="title">{{item.title}}</div>
        <div class="type">{{item.type}}</div>
        <div class="desc" v-html="item.text"></div>
        <div class="time">发表日期:{{item.time | dateformat}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        data:{
            type:Array,
            required:true
        }
    },
    computed: {
    isAdmin() {
      let userName = JSON.parse(localStorage.getItem("userInfo")).info.userName;
      return userName === "admin";
    }
  },
  methods: {
    toDetail(id) {
      this.$router.push({ path: "/pushDetail", query: { id: id } });
    },
    del(id){
      this.$emit("del", id);

    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  transition: all 0.7s;
  align-items: center;
  position: relative;
  &:hover > .img > .icon {
    transform: scale(1.2);
  }
  &:hover > .text > .title {
    color: cornflowerblue;
  }
  &:hover >.my-icon{
      display: block;
  }
  .my-icon{
      position: absolute;
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      display: none;
      cursor: pointer;
  }

  .img {
    width: 160px;
    height: 60px;
    .icon {
      width: 160px;
      height: 60px;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    .title {
      font-weight: 700;
      font-size: 20px;
      color: #1c1f21;
      line-height: 24px;
      text-align: left;
      margin-bottom: 12px;
      margin-top: 4px;
    }
    .type {
      font-size: 14px;
      color: #545c63;
      font-weight: 600;
      line-height: 14px;
      text-align: left;
      margin-bottom: 18px;
      display: inline-block;
      max-width: 350px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .desc {
      display: inline-block;
      font-size: 12px;
      color: #545c63;
      text-align: left;
      line-height: 16px;
      width: 459px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: middle;
      max-height: 50px;
    }
    .time {
      font-size: 12px;
      text-align: left;
      line-height: 36px;
    }
  }
}
</style>>
