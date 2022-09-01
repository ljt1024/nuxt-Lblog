<template>
    <div class="comment-wrap">
      <div class="tit">评论</div>
      <div class="comment-form">
        <img src="../static/images/user.svg" alt="">
        <el-form class="form">
          <el-form-item >
            <el-input type="textarea" v-model="form.content" placeholder="输入评论(Enter换行, Ctrl + Enter发送)" resize="none"></el-input>
          </el-form-item>
        </el-form>
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
            }
          }
        }
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
    }
  }
}
</style>
