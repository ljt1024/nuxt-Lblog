<template>
  <div>
    <PageHead/>
    <div class="main">
      <div class="wrap" v-if="article">
        <div v-html="article.content"></div>
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
    data() {
      return {
        article: {}
      }
    },
    async asyncData ({ route, $axios, error }) {
      if (process.server) {
        const myData  = await $axios.$get(`/api/articleList`)
        return  {
          article:myData[0]
        }
      }
    },
    async mounted() {
      const myData = await this.$axios.$get(`/api/articleList`)
      this.article = myData[0]
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
