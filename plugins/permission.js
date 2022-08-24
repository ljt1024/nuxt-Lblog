import { Message } from 'element-ui'
export default ({ app }) => {
  // 客户端环境
  if (process.client ){
    app.router.beforeEach((to, from, next) => {
      // 设置条件
      const userInfo = window.localStorage.getItem('userInfo')
      if (to.name === 'chart' && !userInfo ) {
        return Message.warning('请登录后操作!')
      }
      next()
    })
  }
}
