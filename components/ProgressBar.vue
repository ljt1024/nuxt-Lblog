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
          document.body.addEventListener('scroll',()=> {
            this.width = document.body.scrollTop / (document.body.scrollHeight - document.body.clientHeight ) * 100
            this.width = this.width > 100 ? '100%' : this.width + '%'
          })
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
