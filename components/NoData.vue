<template>
  <div>
     <div class="no-data">
       <span class="text">我是有底线的!</span>
     </div>
  </div>
</template>

<script>
    export default {
        name: "NoData"
    }
</script>

<style scoped lang="scss">
.no-data {
  text-align: center;
  padding: 10px 0;
  color: var(--color-font-4);;
  .text::after ,::before {
    content: '';
    width: 80px;
    height: 1px;
    display: inline-block;
    vertical-align: middle;
    margin: 0 2px;
    background-color: var(--color-font-4);
  }
}
</style>
