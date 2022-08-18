<template>
  <div>
    <PageHead :active="4"/>
      <div class="page-main">
        <div class="online">
          当前在线人数：{{count}}
        </div>
        <transition name="slide-fade">
          <div class="tip" v-show="time">{{tip}}</div>
        </transition>
         <div class="chart-wrap" >
           <div :class="item.sendId === userInfo.id ?['chart-right', 'chart-info'] : ['chart-left', 'chart-info']" v-for="(item, index) in chartList" :key="item.id">
             <template v-if="item.sendId === userInfo.id">
               <div class="chart-content-wrap">
                 <div class="username">{{item.username}}</div>
                 <div class="chart-content">{{item.content}}</div>
               </div>
               <img :src="item.avatar || 'https://img0.baidu.com/it/u=4191846993,2864527902&fm=253&fmt=auto&app=120&f=JPEG?w=360&h=360'" alt="" class="user-avatar">
             </template>
             <template v-else>
               <img :src="item.avatar || 'https://img0.baidu.com/it/u=4191846993,2864527902&fm=253&fmt=auto&app=120&f=JPEG?w=360&h=360'" alt="" class="user-avatar">
               <div class="chart-content-wrap">
                 <div class="username">{{item.username}}</div>
                 <div class="chart-content">{{item.content}}</div>
               </div>
             </template>
           </div>
         </div>
        <div class="chart-input">
          <el-input
            type="textarea"
            autosize
            resize="none"
            placeholder="请输入内容"
            :autosize="{ minRows: 4, maxRows: 4}"
            v-model="content"
            @keyup.enter.native="submit">
          </el-input>
          <el-button type="primary" class="submit" @click="submit">发送</el-button>
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
        content: '',
        socket: null,
        chartList: null,
        userInfo: null,
        count: 0,
        tip: '',
        time: 3,
      }
    },

    mounted() {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.getChartList()
      this.scrollBtm()
      if (!this.socket) {
        this.socket = new WebSocket("ws://localhost:3002/socketTest");
        this.socket.addEventListener("open", (event)=> {
          console.log("socket is open")
          this.socket.send(JSON.stringify({ type:0,username: this.userInfo.username }))
        });
        this.socket.addEventListener("message",  (event)=> {
          console.log("接收到服务端发送的消息了", JSON.parse(event.data))
          if (JSON.parse(event.data).code === 200) {
            this.getChartList()
          }
          if (JSON.parse(event.data).code === 100) {
            this.time = 3
            if (this.count > JSON.parse(event.data).count) {
              this.tip = `${JSON.parse(event.data).username}离开了群聊`
            } else {
              this.tip = `${JSON.parse(event.data).username}加入了群聊`
            }
            this.count = JSON.parse(event.data).count
            let timer = setInterval(()=>{
              if (this.time > 0 ) {
                console.log(this.time);
                this.time--
              } else {
                clearInterval(timer)
              }
            },1000)
          }
        });
      }
    },
    beforeDestroy() {
      this.socket.close()
    },
    methods: {
      scrollBtm() {
        const chartWrap = document.querySelector('.chart-wrap')
        chartWrap.scrollTop = chartWrap.scrollHeight
      },
      submit() {
        let msg = {
          sendId: this.userInfo.id,
          avatar: this.userInfo.avatar,
          username: this.userInfo.username,
          content: this.content,
          type: 1
        }
        this.socket.send(JSON.stringify(msg))
        this.content = ''
      },
      async getChartList() {
        const result = await this.$axios.$get('/api/chartList')
        this.chartList = result.data
        setTimeout(()=> {
          this.scrollBtm()
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .page-main {
    height: calc(100vh - 120px);
    box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.2);
    margin-top: 80px;
    border-radius: 20px;
    background-color: var(--theme-bg-3);
    position: relative;
    .online {
      text-align: center;
      color: var(--color-font-1);
    }
    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
      /* .slide-fade-leave-active for below version 2.1.8 */ {
      transform: translateY(-10px);
      opacity: 0;
    }
    .tip {
      text-align: center;
      color: #007fff;
      margin-top: 4px;
      position: absolute;
      left: 0;
      width: 100%;
    }
    .chart-wrap {
      height: calc(100% - 140px);
      overflow-y: auto;
      padding: 12px;
      color: var(--color-font-1);
      display: flex;
      flex-direction: column;
      .user-avatar {
        width: 40px;
        height: 40px;
      }
      .chart-info {
        display: flex;
        align-items: center;
      }
      .chart-left {
        margin-bottom: 30px;
        .chart-content-wrap {
          margin-left: 10px;
        }
        .chart-content {
          margin-top: 4px;
          padding: 6px 8px;
          border-radius: 10px;
          position: relative;
          color: var(--theme-bg-3);
          background-color: var(--color-font-7);
          text-align: center;
          line-height: 25px;
          display: inline-block;
          /*color: #333;*/
          font-size: 15px;
        }
        .chart-content::after {
          content: "";
          position: absolute;
          border: 5px solid transparent;
          border-right-color: var(--color-font-7);
          top: 30%;
          left: -10px;
        }
      }

      .chart-right {
        display: flex;
        align-self: flex-end;
        margin-bottom: 30px;
        .chart-content-wrap {
          margin-right: 10px;
        }
        .username {
          text-align: right;
        }
        .chart-content {
          border-radius: 10px;
          margin-top: 4px;
          padding: 6px 8px;
          position: relative;
          background-color: #409EFE;
          text-align: center;
          line-height: 25px;
          display: inline-block;
          color: #fff;
          font-size: 15px;
        }
        .chart-content::after {
          content: "";
          position: absolute;
          border: 5px solid transparent;
          border-left-color: #409EFE;
          top: 30%;
          right: -10px;
        }
      }
    }
    .chart-input {
      position: relative;
      margin-top: 10px;
      .submit {
        position: absolute;
        right: 4px;
        bottom: 4px;
      }
      ::v-deep .el-textarea__inner {
        background-color: var(--theme-bg-3);
        color: var(--color-font-1);
      }
    }
  }
</style>
