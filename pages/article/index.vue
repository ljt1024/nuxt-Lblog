<template>
  <div>
    <PageHead/>
    <div class="main">
      <div class="wrap">
        <h1 class="tit">{{article.title}}</h1>
        <div class="author">
          <a href="#">
            <img src="../../static/images/logo.png" alt=""/>
          </a>
          <div>
            <a href="" class="username">
              ljt
            </a>
            <div class="btm">
              <span class="time">{{article.creatTime}}</span>
              <span class="">阅读数：{{article.readNum}}</span>
            </div>
          </div>
        </div>
        <div style="white-space:pre-wrap">{{article.content}}</div>
      </div>
      <Comment :articleId="article.id"/>
    </div>
  </div>
</template>

<script>
  import PageHead from "@/components/PageHead";
  import Comment from "@/components/Comment";
  export default {
    name: "index",
    components: {
      PageHead,
      Comment
    },
    data() {
      return {
        article: {}
      }
    },
    async asyncData ({ route, $axios, error }) {
      const myData  = await $axios.$get(`/api/articleList/?id=${route.query.id}`)
      return  {
          article:myData.data[0]
        }
    },
  }
</script>

<style scoped lang="scss">
  .main {
    padding: 1.3rem 1rem;
    max-width: 960px;
    margin: 60px auto 0 auto;
    .wrap {
      background-color: var(--theme-bg-3);
      padding: 2.667rem 2rem 3.33rem;
      color: var(--color-font-7);
      font-size: 15px;
      border-radius: 4px;
      font-family: -apple-system,system-ui,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
      background-image: linear-gradient(90deg,rgba(60,10,30,.04) 3%,transparent 0),linear-gradient(1turn,rgba(60,10,30,.04) 3%,transparent 0);
      background-size: 20px 20px;
      background-position: 50%;
    }
    .tit {
      margin: 0 0 1.667rem;
      font-size: 2.667rem;
      font-weight: 600;
      line-height: 1.31;
      color: var(--color-font-8);
    }
    .author {
      display: flex;
      align-items: center;
      margin-bottom: 1.667rem;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .username {
        font-size: 1.333rem;
        font-weight: 500;
        color: var(--color-font-9);
        line-height: 2rem;
      }
      .btm {
        font-size: 1.167rem;
        color: var(--color-font-10);
        margin-top: 2px;
        line-height: 22px;
      }
    }
  }
</style>
