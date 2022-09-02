<template>
    <div class="comment-wrap">
      <div class="tit">评论</div>
      <div class="comment-form">
        <img :src="userInfo?userInfo.avatar:require('../static/images/user.svg')" alt="">
        <el-form class="form"  id="form">
          <el-form-item >
            <el-input
              type="textarea"
              v-model="form.content"
              placeholder="输入评论(Enter换行, Ctrl + Enter发送)"
              resize="none"
              @focus="focus"
              :autosize="{ minRows: 3, maxRows: 3}"/>
          </el-form-item>
          <div class="submit-btn" v-show="showBtn">
            <el-button type="primary" size="small" :disabled="disabled">发表评论</el-button>
            <span class="text">Ctrl + Enter</span>
          </div>
        </el-form>
      </div>
      <div class="comment-list">
        <div class="tit">
          全部评论<span class="comment-total">1</span>
        </div>
        <div class="comment-item">
          <div class="user-avatar">
            <img src="../static/images/user.svg" alt="">
          </div>
          <div class="comment-info">
            <div class="user-info">
              <div class="username">ljt</div>
              <div class="time">8小时前</div>
            </div>
            <div class="content">666</div>
            <div class="handle">
              <span><i class="icon el-icon-thumb"></i>点赞</span>
              <span><i class="icon el-icon-chat-dot-square"></i>回复</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Comment",
  data() {
    return {
      form: {
        content: ''
      },
      userInfo: {},
      showBtn: false,
      disabled: true
    }
  },
  methods: {
    focus() {
      if (!this.userInfo) {
        this.$store.commit('user/showLogin', true)
      } else {
          this.showBtn = true
      }
    },
  },
  watch: {
    'form.content'(value) {
      if (value.length > 0) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    }
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const form = document.querySelector('#form')
    window.addEventListener('click', ()=>{
      if(this.showBtn) {
        this.showBtn = false
      }
    })
    form.addEventListener('click', (e)=> {
      event.stopPropagation()
    })
  },
}
</script>

<style scoped lang="scss">
.comment-wrap {
  margin-top: 20px;
  border-radius: 4px;
  background-color: #fff;
  padding:2rem 2.67rem;
  .tit {
    font-size: 18px;
    line-height: 30px;
    font-weight: 600;
    margin-bottom: 2rem;
    color: #252933;
  }
  .comment-form {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      margin-right: 16px;
      border-radius: 50%;
      display: inline-block;
    }
    .form {
      flex: 1;
      ::v-deep .el-textarea__inner {
        background-color: #f2f3f5;
        color: #8a919f;
      }
      ::v-deep .el-form-item {
        margin-bottom: 10px;
      }
      .submit-btn {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        .text {
          font-size: 14px;
          line-height: 22px;
          letter-spacing: .2px;
          color: #86909c;
          margin-right: 16px;
        }
      }
    }

  }
  .comment-list {
    margin-top: 20px;
    .comment-total {
      margin-left: 6px;
    }
    .comment-item {
      display: flex;
      .user-avatar {
        img {
          width: 40px;
          height: 40px;
          margin-right: 16px;
          border-radius: 50%;
        }
      }
      .comment-info {
        flex: 1;
        .user-info {
          display: flex;
          justify-content: space-between;
          .username {
            font-weight: 500;
            font-size: 15px;
            color: #252933;
            max-width: 90px;
            line-height: 26px;
          }
          .time {
            font-size: 14px;
            color: #8a919f;
            line-height: 22px;
          }
        }
        .content {
          font-weight: 400;
          font-size: 14px;
          line-height: 2rem;
          color: #515767;
          margin-top: 8px;
          -webkit-line-clamp: 6;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        }
        .handle {
          display: flex;
          margin-top: 8px;
          icon {
            font-size: 16px;
          }
          span {
            margin-right: 16px;
            line-height: 22px;
            font-size: 14px;
            cursor: pointer;
            color: #8a919f;
          }
          span:hover {
            color: #1171ee;
          }
        }
      }
    }
  }
}
</style>
