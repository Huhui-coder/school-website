<template>
  <div id="app" v-cloak>
    <router-view/>
  </div>
</template>

<style lang="less">
[v-cloak] {
  display: none !important;
}
* {
  scroll-behavior: smooth;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:100%;
}
*{
  margin:0;
  padding:0;
}
html,body{
  width:100%;
  height:100%;
}
ul{list-style:none}
a{text-decoration: none;color:#000} 
img{vertical-align:top;border:none}
 
.clearf:after,
.clearf:before{
    content:"";
    display:block;
    clear:both;
}

</style>
