<template>
  <div class="container">
    <div class="header">
        <div class="logo">
          <img src="../static/images/logo.png" alt="">
          <span class="logo-txt">LBlog</span>
        </div>
        <div class="nav">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"  active-text-color="#007fff">
            <el-menu-item index="1"><nuxt-link to="/">首页</nuxt-link></el-menu-item>
            <el-menu-item index="2"><nuxt-link :to="{name:'example'}">案例</nuxt-link></el-menu-item>
            <el-menu-item index="3"><nuxt-link :to="{name:'about'}">关于</nuxt-link></el-menu-item>
            <el-menu-item index="4"><nuxt-link to="/">收藏</nuxt-link></el-menu-item>
            <el-menu-item index="5"><nuxt-link :to="{name:'timeLine'}">时间轴</nuxt-link></el-menu-item>
          </el-menu>
        </div>
        <div class="search">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="key">
            </el-input>
        </div>
        <div class="login">
          <el-button type="primary" size='small'>写文章</el-button>
          <el-button type="primary" size='small' @click="login">登录</el-button>
          <div class="mode">
            <i class="el-icon-sunny theme" @click="changeTheme('dark')" v-if="mode === 'light'"></i>
            <i class="el-icon-moon theme" @click="changeTheme('light')" v-if="mode === 'dark'"></i>
          </div>
        </div>
    </div>
    <el-dialog
      title="登录"
      :visible.sync="loginVisible"
      :center="true"
      :modal-append-to-body="false"
      class="loginDialog"
    >
      <div>
        <el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="60px" class="loginForm">
          <el-form-item label="用户名" prop="pass">
            <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="checkPass">
            <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
         <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
         <el-button @click="loginVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <el-backtop :bottom="100"></el-backtop>
  </div>
</template>

<script>
import { setTheme } from '@/utils/theme'
export default {
    name: "PageHead",
    props: {
      active: {
        type: [String, Number],
        default: '0',
      },
    },
    data() {
      return {
        activeIndex: this.active + '',
        key: '',
        value: true,
        mode: 'light',
        loginVisible: false,
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ],
        }
      }
    },
  mounted() {
    let mode = localStorage.getItem('theme')
    if (mode) {
      this.mode = localStorage.getItem('theme')
    } else {
      localStorage.setItem('theme', this.mode)
    }
    setTheme(this.mode)
  },
  methods: {
      handleSelect(index) {
        this.activeIndex = index
      },
      changeTheme(mode) {
        this.mode = mode
        localStorage.setItem('theme', mode)
        setTheme(this.mode)
      },
      login() {
        this.loginVisible = true
      },
      submitForm() {

      }
    }
}
</script>

<style scoped lang="scss">
  .container {
    background-color: var(--theme-bg);
    border-bottom: 1px solid var(--theme-border-3);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    overflow: hidden;
    .header {
      background-color: var(--theme-bg);
      display: flex;
      align-items: center;
      max-width: 1080px;
      margin: auto;
      .logo {
        display: flex;
        align-items: center;
        background-color: var(--theme-bg);
        img {
          width: 50px;
          height: 50px;
        }
        .logo-txt {
          font-size: 20px;
          font-weight: bold;
          color: var(--theme-color);
        }
      }
      .nav {
        margin-left: 50px;
        .el-menu-item {
          padding: 0 !important;
        }
        .el-menu-demo {
          background-color: var(--theme-bg);
        }
        ::v-deep .el-menu.el-menu--horizontal {
          border-bottom: none !important;
          >.el-menu-item {
            color: var(--color-font-1);
          }
          >.el-menu-item:hover {
            background-color: var(--theme-file-1) !important;
          }
        }
        a {
          display: inline-block;
          padding: 0 20px;
        }
      }
      .search {
        margin-left: 50px;
        margin-right: 50px;
        ::v-deep .el-input__inner {
          background-color: var(--theme-file-1);
          border-color: var(--theme-border-1);
        }
      }
      .login {
        display: flex;
        .mode {
          display: flex;
          align-items: center;
          margin-left: 10px;
          .theme {
            color: var(--theme-bg-1);
            font-size: 20px;
            cursor: pointer;
          }
        }
      }
    }
    .loginDialog {
      width: 700px;
      margin: 0 auto;
    }
    ::v-deep .el-dialog__body {
      .loginForm {
        width: 100%;
        .loginBtn {
        }
      }
    }
  }
</style>
