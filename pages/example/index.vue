<template>
  <div>
    <PageHead :active="2"/>
    <div class="page-main">
      <ul class="gird">
        <li v-for="item in examples" :key="item.id" class="gird-item" @click="turn(item.path)">
          <div id="d1">
            <div id="d2"></div>
            <div id="d4"></div>
            {{item.label}}
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
    data() {
      return {
        examples: [
          {
            id: 1,
            label: '购物车案例',
            path: 'car'
          },
          {
            id: 2,
            label: '倒计时',
            path: 'timecount'
          },
          {
            id: 3,
            label: '倒计时',
            path: 'timecount'
          },
          {
            id: 4,
            label: '倒计时',
            path: 'timecount'
          },
          {
            id: 5,
            label: '倒计时',
            path: 'timecount'
          },
          {
            id: 6,
            label: '倒计时',
            path: 'timecount'
          },
          {
            id: 7,
            label: '倒计时',
            path: 'timecount'
          },
          {
            id: 8,
            label: '倒计时',
            path: 'timecount'
          },
          {
            id: 9,
            label: '倒计时',
            path: 'timecount'
          }
        ]
      }
    },
    methods: {
      turn(path) {
        this.$router.push({path: `/example/${path}`})
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
