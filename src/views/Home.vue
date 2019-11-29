<template>
  <div class="home">
    <layouts>
      <div slot="content" class="index">
        <p>我是内容区域 
           <el-button>默认按钮</el-button> </p>
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
  }
};
</script>
