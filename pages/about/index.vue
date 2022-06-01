<template>
  <div>
    <PageHead :active="3"/>
    <div class="page-main">
      <div v-html="text2" class="content">
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
        text1: '返璞归真，仿掘金风格，支持主题切换，前端：nuxt + elementUI，后端：express + mongodb,<a href="https://github.com/ljt1024/nuxt-Lblog">github地址</a>',
        text2: '',
        timer: null
      }
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    mounted() {
      let index = 0
      this.timer = setInterval(()=> {
          if(this.text1[index] === '<') {
            this.text2 += `<a href="https://github.com/ljt1024/nuxt-Lblog" style="color: #007fff;">github地址</a>`
            clearInterval(this.timer)
            return
          }
          if (index < this.text1.length) {
            this.text2 += this.text1[index]
            index++
          }
      },100)
    }
  }
</script>

<style scoped lang="scss">
  .page-main {
    .content {
      font-size: 18px;
      padding-top: 80px;
      color: var(--color-font-1);
    }
  }
</style>
