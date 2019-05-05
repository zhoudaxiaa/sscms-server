/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: axios 请求封装
 * @Version: 1.0
 * @Date: 2018-12-19 16:09:11
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-05-05 22:35:09
 */

import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'

// 配置文件
import config from '@/config/'

// 根据环境获取配置

// 实例化axios
const server = axios.create({
  baseURL: config.baseURL, // api 的 base_url
  timeout: config.timeout, // api 的响应过期时间
})

// 请求拦截器
server.interceptors.request.use(
  config => {
    let token = null

    token = store.state.app.token
    // 每次请求携带token
    if (token) config.headers.Authorization = token

    return config
  },
  error => {
    Message.error('请求超时！')
    return Promise.reject(error)
  }
)

// 响应拦截器
server.interceptors.response.use(
  response => {
    let message

    const res = response.data //取到响应的数据

    // 如果返回的数据中code 字段，就数据该响应非正常响应，做相应处理
    if (res.code) {
      switch (res.code) {
        case 2002: message = '用户名或密码'; break
        case 403: message = '您的权限不足！'; break
      }

      Message.error({ message })
    } else {
      return res
    }

  },
  err => {
    let message

    switch (err.response.status) {
      case 404:
      case 504: message = '网络错误！'; break
      case 403: message = '权限不足,请联系管理员!'; break
      default: message = '未知错误!'
    }

    Message.error({ message })

    Promise.reject(err.response)
  }
)

const http = {
  post (url, data) {
    return server({
      url,
      method: 'POST',
      data,
    })
  },

  delete (url) {
    return server({
      url,
      method: 'DELETE',
    })
  },

  put (url, data) {
    return server({
      url,
      method: 'PUT',
      data,
    })
  },

  patch (url, data) {
    return server({
      url,
      method: 'PATCH',
      data,
    })
  },

  get (url) {
    return server({
      url,
      method: 'GET',
    })
  },
}

export default http
