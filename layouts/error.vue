<template>
  <div class="notPage">
    <div class="wrap">
      <img src="../static/images/404.svg" alt="">
      <div class="back-btn">
        <nuxt-link to="/"><el-button type="primary" icon="el-icon-back">返回首页</el-button></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
   .notPage {
     position: relative;
     height:100vh;
     width: 100vw;
     .wrap {
       position: absolute;
       top: 35%;
       left: 50%;
       transform: translate(-50%, -50%);
       .back-btn {
         text-align: center;
         a {
           color: #fff;
         }
       }
     }
   }
</style>
