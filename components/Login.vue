<template>
    <div>
      <el-dialog
        title="登录"
        :visible.sync="loginVisible"
        :center="true"
        :modal-append-to-body="false"
        class="loginDialog"
      >
        <div>
          <el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="loginForm">
            <el-form-item label="用户名" prop="username">
              <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
        </div>
      <span slot="footer" class="dialog-footer">
         <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
         <el-button @click="loginVisible = false">取 消</el-button>
      </span>
      </el-dialog>
    </div>
</template>

<script>
  import { mapState } from "vuex"
  import md5 from 'js-md5'
  export default {
      name: "Login",
      // props: {
      //   loginVisible: {
      //     type: Boolean,
      //     default: false
      //   }
      // },
      data() {
        return {
          loginForm: {
            username: '',
            password: ''
          },
          loginVisibles: false,
          rules: {
            username: [
              { required: true, message: '请输入用户名', trigger: ['blur', 'change'] }
            ],
            password: [
              { required: true, message: '请输入密码', trigger: ['blur', 'change'] }
            ],
          },
          userInfo: {},
          loginVisible: false
        }
      },
      // watch: {
      //   loginVisible(value) {
      //     this.loginVisibles = value
      //   },
      //   loginVisibles(value) {
      //     if (!value) {
      //       this.$emit('changeLogin', value)
      //     }
      //   }
      // },
      watch: {
          '$store.state.user.showLogin'(value) {
            this.loginVisible = value
          },
           loginVisible(value) {
               if (!value) {
                 this.$store.commit('user/showLogin', false)
               }
           }
      },
      methods: {
        submitForm() {
          this.$refs['ruleForm'].validate((valid) => {
            if (valid) {
              this.$axios.$post(`/api/user/login`, {username:this.loginForm.username, password: md5(this.loginForm.password)}).then(res=>{
                console.log(res);
                this.$cookies.set('token', res.data.token)
                // localStorage.setItem('token', res.data.token)
                if (res.data.token) {
                  this.getUser(res.data.token)
                }
              })
            } else {
              return false;
            }
          });
        },
        getUser() {
          this.$axios.$get('/api/user/profile').then(res => {
            this.loginVisible = false
            this.$notify({
              title: '提示',
              message: '登录成功',
              type: 'success'
            });
            localStorage.setItem('userInfo', JSON.stringify(res.data.user))
            setTimeout(()=>{
              window.location.reload()
            }, 500)
          })
        },
      }
  }
</script>

<style scoped lang="scss">
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
</style>
