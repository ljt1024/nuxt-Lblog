<template>
  <div>
    <PageHead/>
    <div class="main">
      <div class="wrap">
        文章详情
      </div>
    </div>
  </div>
</template>

<script>
  import PageHead from "@/components/PageHead";
  export default {
    name: "index",
    components: {
      PageHead
    },
  }
</script>

<style scoped lang="scss">
  .main {
    padding: 1.3rem 1rem;
    max-width: 960px;
    margin: 60px auto 0 auto;
    .wrap {
      background-color: #fff;
      padding: 10px;
    }
  }
</style>
