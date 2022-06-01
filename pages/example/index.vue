<template>
  <div>
    <PageHead :active="2"/>
    <div class="page-main">
      <ul class="gird">
        <li v-for="item in 9" :key="item" class="gird-item" @click="turn">
          <div id="d1">
            <div id="d2"></div>
            <div id="d4"></div>
            {{item}}
            <div id="d3"></div>
            <div id="d5"></div>
          </div>
        </li>
      </ul>
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
    methods: {
      turn() {
        this.$router.push({path: '/example/timecount'})
      }
    }
  }
</script>

<style scoped lang="scss">
.gird {
  display: flex;
  flex-wrap: wrap;
  background-color: var(--theme-bg-2);
  .gird-item {
    width: 32%;
    margin:10px 1%;
    text-align: center;
    cursor: pointer;
    #d1{
      width: 100%;
      padding: 100px 0;
      background: dodgerblue;
      transition: 1s all linear;
      text-align: center;
      /*line-height: 100px;*/
      color: white;
      position: relative;
      font-size: 32px;
      font-weight: bold;
    }
    #d2{
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 10px;
      transition: 1s;
    }
    #d3{
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0;
      height: 10px;
      transition: 1s;
    }
    #d4{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 10px;
      height: 0;
      transition: 1s 1s;
    }
    #d5{
      position: absolute;
      right: 0;
      top: 0;
      width: 10px;
      height: 0;
      transition: 1s 1s;
    }
    #d1:hover{
      background: transparent;
      color:dodgerblue ;
    }
    #d1:hover #d2,#d1:hover #d3{
      width:100%;
      background:dodgerblue;
    }
    #d1:hover #d4,#d1:hover #d5{
      background:dodgerblue;
      height: 100%;
    }
  }
  .gird-item:nth-child(3n-2) {
    margin-left: 0;
  }
  .gird-item:nth-child(3n) {
    margin-right: 0;
  }
}
</style>
