
export default function({req, res, app}) {
  const token = app.$cookies.get('token')
  if (token) {
    app.$axios.defaults.headers['Authorization'] = token
  }

}
