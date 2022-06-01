<template>
    <div>
      <PageHead :active="1"/>
      <div class="content">
        <div class="content-left">
          <div class="classify">
            <ul>
              <li class="active">推荐</li>
              <li>最新</li>
              <li>最热</li>
            </ul>
          </div>
          <div class="list">
            <ul>
              <li class="item" v-for="item in 10" :key="item" @click="turnDetail">
                  <div class="release-info">
                    <ul>
                      <li class="user">ljt</li>
                      <li class="date">1天前</li>
                      <li class="tag">前端</li>
                    </ul>
                  </div>
                  <div class="main">
                    <div class="content-main">
                      <div class="title">
                        JS数据类型转换
                      </div>
                      <div class="abstract">
                        JS数据类型转换 基本概念 基本数据类型转换 一. 转为数值类型(Number) Number():如果要转换的字符串中有一个不是数值的字符，返回NaN parseInt():如果要转换的字符串中有一
                      </div>
                      <div class="action-list">
                          <ul>
                            <li>
                              <i class="el-icon-view"></i>
                              <span>80</span>
                            </li>
                            <li>
                              <i class="el-icon-thumb"></i>
                              <span>22</span>
                            </li>
                              <li>
                              <i class="el-icon-chat-round"></i>
                              <span>8</span>
                            </li>
                          </ul>
                      </div>
                    </div>
                    <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/18613c4c23ec4d74bdaa034c8f9eae43~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?" alt="" class="lazy thumb">
                  </div>
              </li>
            </ul>
          </div>
        </div>
        <aside class="index-aside aside">
            <div class="time">
              <span class="date-tit">{{time}}!</span>
              <div class="date">{{date}}</div>
            </div>
            <div class="hot-tag">
              <div class="tag-tit">热门标签</div>
              <div class="tag-list">
                <el-tag size="small" effect="dark" class="tag-item">前端</el-tag>
                <el-tag type="success" size="small" effect="dark" class="tag-item">javascript</el-tag>
                <el-tag type="info" size="small" effect="dark" class="tag-item">vue</el-tag>
                <el-tag type="warning" size="small" effect="dark" class="tag-item">react</el-tag>
                <el-tag type="danger" size="small" effect="dark" class="tag-item">小程序</el-tag>
                <el-tag type="success" size="small" effect="dark" class="tag-item">node</el-tag>
                <el-tag type="warning" size="small" effect="dark" class="tag-item">后端</el-tag>
              </div>
            </div>
        </aside>
      </div>
    </div>
</template>

<script>
import PageHead from "@/components/PageHead";
import { timeFix } from '@/utils/index'
let timer
export default {
  name: "index",
  components: {
    PageHead
  },
  // async asyncData({ $axios }) {
  //   const result = await $axios.$get('localhost:3002/api/articleList')
  //   console.log(result);
  // },
  // async asyncData ({ route, $axios, error }) {
  //   const  myData  = await $axios.$get(`/api/articleList`)
  //   console.log(myData);
  // },
  mounted() {
    timer = setInterval(()=>{
      this.date = new Date().toLocaleString()
    }, 1000)
    this.time = timeFix()
    // let mode = localStorage.getItem('theme')
    // if (mode) {
    //   this.mode = localStorage.getItem('theme')
    // } else {
    //   localStorage.setItem('theme', this.mode)
    // }
  },
  destroyed() {
    clearInterval(timer)
  },
  data() {
    return {
      date: new Date().toLocaleString(),
      time: '',
      mode: 'light'
    }
  },
  methods: {
    turnDetail() {
      this.$router.push({path: '/article'})
    }
  }
}
</script>

<style scoped lang='scss'>
.content {
  padding: 1.3rem 1rem;
  max-width: 960px;
  margin: 60px auto 0 auto;
  display: flex;
  .content-left {
    margin-right: 10px;
    border-radius: 2px;
    width: 700px;
    background-color: var(--theme-bg-3);
  }
  .classify {
    padding: 1.3rem 1rem;
    border-bottom: 1px solid hsla(0,0%,59.2%,.1);
    ul {
      display: flex;
      li{
          padding: 0 1.2rem;
          font-size: 1.16rem;
          border-right: 1px solid hsla(0,0%,59.2%,.2);
          cursor: pointer;
          color: var(--color-font-1);
       }
       & .active {
         color: #007fff;
       }
       li:hover {
          color: #007fff;
       }
    }
  }
  .list {
    ul {
      .item {
        cursor: pointer;
        padding: 12px 20px 0;
        transition: all .3s ease-in;
        .release-info {
          ul {
            display: flex;
            align-items: center;
            color: #86909c;
            .user {
                display: flex;
                align-items: center;
                margin-right: 8px;
                max-width: 162px;
                font-size: 13px;
                line-height: 22px;
                color: var(--color-font-2);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-all;
            }
            .date {
                position: relative;
                padding: 0 10px;
                line-height: 22px;
                font-size: 13px;
                flex-shrink: 0;
            }
            .date::after {
              right: 0;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              display: block;
              width: 1px;
              height: 14px;
              background: #e5e6eb;
              content: " ";
            }
            .date::before {
              left: 0;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              display: block;
              width: 1px;
              height: 14px;
              background: #e5e6eb;
              content: " ";
            }
            .tag {
                position: relative;
                flex-shrink: 0;
                font-size: 13px;
                line-height: 22px;
                padding: 0 8px;
                color: #86909c;
            }
          }
        }
        .main {
          margin-top: 6px;
          padding-bottom: 12px;
          display: flex;
          border-bottom: 1px solid var(--theme-border-2);
          .title {
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            color: var(--color-font-3);
            width: 100%;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          .abstract {
            margin-bottom: 10px;
            color: var(--color-font-4);
            font-size: 13px;
            line-height: 22px;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          .action-list {
            ul {
              display: flex;
              align-items: center;
              li {
                position: relative;
                margin-right: 20px;
                font-size: 13px;
                line-height: 20px;
                color: var(--color-font-6);
                flex-shrink: 0;
                span {
                  margin-left: 4px;
                }
              }
            }
          }
          .thumb {
            flex: 0 0 auto;
            width: 120px;
            height: 80px;
            margin-left: 24px;
            background-color: #fff;
            border-radius: 2px;
          }
          .lazy {
            position: relative;
            -o-object-fit: cover;
            object-fit: cover;
          }
        }
      }
    }
    .item:hover {
      /*background: #fafafa;*/
      background: var(--theme-border-2);
      /*transform: scale(1.015);*/
      //box-shadow: 0 20px 30px hsl(0deg 0% 46% / 15%);
    }
  }
  .index-aside{
    width: 20rem;
    .time {
      width: 240px;
      height: 96px;
      margin-bottom: 16px;
      padding: 16px;
      background-color: var(--theme-bg-3);
      box-sizing: border-box;
      .date-tit {
        margin-top: 2px;
        color: var(--color-font-3);
        font-size: 18px;
        font-weight: 500;
      }
      .date {
        margin-top: 10px;
        color: var(--color-font-2);
        font-size: 14px;
        font-weight: 400;
      }
    }
    .hot-tag {
      padding: 16px;
      background-color: var(--theme-bg-3);
      box-sizing: border-box;
      .tag-tit {
        margin-top: 2px;
        color: var(--color-font-3);
        font-size: 18px;
        font-weight: 500;
      }
      .tag-list {
        margin-top: 10px;
        .tag-item {
          cursor: pointer;
          margin: 4px;
        }
      }
    }
  }
}
</style>
