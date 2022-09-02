export const state = () =>({
  token: '',
  userInfo: {},
  showLogin: false
})

export const mutations = {
  showLogin(state, value) {
    state.showLogin = value
  }
}
