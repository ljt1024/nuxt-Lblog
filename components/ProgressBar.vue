<template>
  <div class="progress-bar" :style="{width}">
  </div>
</template>

<script>
    export default {
        name: "ProgressBar",
        data() {
          return {
            width: '0%'
          }
        },
        mounted() {
          window.onscroll = ()=> {
            this.width = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight ) * 100
            this.width = this.width > 100 ? '100%' : this.width + '%'
          }
        }
    }
</script>

<style scoped lang="scss">
.progress-bar {
  height: 3px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #409EFE;
}
</style>
