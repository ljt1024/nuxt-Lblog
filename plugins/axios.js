import { Message } from 'element-ui'
export default function({ $axios, redirect, app }) {
  // request interceptor
  $axios.interceptors.request.use(
    config => {
      // do something before request is sent

      const token = app.$cookies.get('token')
      if (token) {
        config.headers['Authorization'] = token
      }
      return config
    },
    error => {
      // do something with request error
      return Promise.reject(error)
    }
  )
  $axios.onRequest(config => {

  })

  // response interceptor
  $axios.interceptors.response.use(
    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      const res = response.data
      if (res.code === 200) {
        return response
      } else if (res.code === 205){
        Message.error(response.data.msg)
        app.$cookies.remove('token')
        // localStorage.removeItem('token')
        localStorage.removeItem('userInfo')
        setTimeout(()=>{
          window.location.reload()
        },500)
        // if the custom code is not 200, it is judged as an error.
      } else {
        Message.error(response.data.msg)
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    },
    error => {
      console.log('err' + error) // for debug
      return Promise.reject(error)
    }
  )

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/404')
    } else if (code === 500) {
      redirect('/500')
    }
  })
}
