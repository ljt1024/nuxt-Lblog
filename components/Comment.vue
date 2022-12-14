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
              @keydown.native="keydown($event)"
              :autosize="{ minRows: 3, maxRows: 3}"/>
          </el-form-item>
          <div class="submit-btn" v-show="showBtn">
            <el-button type="primary" size="small" :disabled="disabled" @click="comment">发表评论</el-button>
            <span class="text">Ctrl + Enter</span>
          </div>
        </el-form>
      </div>
      <div class="comment-list" v-if="commentList.length > 0">
        <div class="tit">
          全部评论<span class="comment-total">{{commentList.length}}</span>
        </div>
        <div class="comment-item" v-for="(item, index) in commentList" :key="item.id">
          <div class="user-avatar">
            <img :src="item.userInfo.avatar||require('../static/images/user.svg')" alt="">
          </div>
          <div class="comment-info">
            <div class="user-info">
              <div class="username">{{item.userInfo.username}}</div>
              <div class="time">{{formatTime(item.createTime)}}</div>
            </div>
            <div class="content">{{item.commentContent}}</div>
            <div class="handle">
              <span @click="thumb(item, index)" :class="item.isLike?'isLike' : ''">
                <i class="icon iconfont icon-zan"></i>
                {{item.thumbs > 0 ? item.thumbs : '点赞'}}
              </span>
<!--              <span @click="replay"><i class="icon el-icon-chat-dot-square"></i>{{showReply?'取消回复':'回复'}}</span>-->
            </div>
<!--            <el-form class="form" v-show="showReply" >-->
<!--              <el-form-item >-->
<!--                <el-input-->
<!--                  type="textarea"-->
<!--                  v-model="replyForm.content"-->
<!--                  placeholder="回复ljt"-->
<!--                  resize="none"-->
<!--                  @focus="focus"-->
<!--                  ref="intDom"-->
<!--                  :autosize="{ minRows: 3, maxRows: 3}"/>-->
<!--              </el-form-item>-->
<!--              <div class="submit-btn">-->
<!--                <el-button type="primary" size="small" :disabled="replyDisabled">发表评论</el-button>-->
<!--                <span class="text">Ctrl + Enter</span>-->
<!--              </div>-->
<!--            </el-form>-->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { formatTime } from '@/utils'
let keyChache = new Map()
export default {
  props: {
    articleId: {
      type: String
    }
  },
  name: "Comment",
  data() {
    return {
      form: {
        content: ''
      },
      replyForm: {
        content: ''
      },
      userInfo: {},
      showBtn: false,
      disabled: true,
      replyDisabled: true,
      showReply: false,
      commentList: []
    }
  },
  watch: {
    'form.content'(value) {
      if (value.length > 0) {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    'replyForm.content'(value) {
      if (value.length > 0) {
        this.replyDisabled = false
      } else {
        this.replyDisabled = true
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
    this.getComment()
  },
  methods: {
    formatTime(value) {
      return formatTime(value)
    },
    async getComment() {
      const res  = await this.$axios.$get(`/api/commentList`, {params:{id:this.articleId}})
      this.commentList = res.data
    },
    focus() {
      if (!this.userInfo) {
        this.$store.commit('user/showLogin', true)
      } else {
          this.showBtn = true
      }
    },
    keydown(e) {
      if (e.key === 'Control') {
        keyChache.set('ctrlKey', true)
      } else {
        if (e.key === 'Enter' && keyChache.has('ctrlKey') && !this.disabled) {
          this.comment()
        } else {
          keyChache.delete('ctrlKey')
        }
      }
    },
    replay() {
      this.showReply = !this.showReply
      this.$nextTick(()=>{
        this.$refs.intDom.focus()
      })
    },
    async comment() {
      let parmas = {
        articleId: this.articleId,
        userInfo: this.userInfo,
        commentContent: this.form.content
      }
      const res = await this.$axios.$post('/api/sendComment', parmas)
      if (res.code === 200) {
        this.$message({
          message: '评论成功!',
          type: 'success'
        });
        this.form.content = ''
        this.$emit('getDetail', this.articleId)
        return this.getComment()
      }
    },
    async thumb(value, index) {
        await this.$axios.post('/api/comment/thumb',{ commentId: value._id, userId: this.userInfo.id })
        const contentChild = value
        value.isLike = !value.isLike
        if (value.isLike) {
          contentChild.thumbs++
        } else if(contentChild.thumbs > 0){
          contentChild.thumbs--
        }
        this.$set(this.commentList, index, contentChild)
    }
  }
}
</script>

<style scoped lang="scss">
.comment-wrap {
  margin-top: 20px;
  border-radius: 4px;
  background-color: var(--theme-bg-3);
  padding:2rem 2.67rem;
  .form {
    flex: 1;
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
  .tit {
    font-size: 18px;
    line-height: 30px;
    font-weight: 600;
    margin-bottom: 2rem;
    /*color: #252933;*/
    color: var(--color-font-8);
  }
  .comment-form {
    display: flex;
    ::v-deep .el-textarea__inner {
      background-color: var(--theme-bg-4);
      color: #8a919f;
    }
    img {
      width: 40px;
      height: 40px;
      margin-right: 16px;
      border-radius: 50%;
      display: inline-block;
    }
  }
  .comment-list {
    margin-top: 20px;
    .comment-total {
      margin-left: 6px;
    }
    .comment-item {
      display: flex;
      margin-bottom: 10px;
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
            color: var(--color-font-8);
            /*color: #252933;*/
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
          color: var(--color-font-9);
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
          margin-bottom: 8px;
          .isLike {
            color: #007fff;
          }
          .icon {
            font-size: 16px;
            margin-right: 4px;
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
