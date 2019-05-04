/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: axios 请求封装
 * @Version: 1.0
 * @Date: 2018-12-19 16:09:11
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-05-04 22:00:03
 */

import axios from 'axios'
import store from '@/store'
import qs from 'qs' // 序列化序列化模块
import { Message } from 'element-ui'

// 配置文件
import config from '@/config/'

// 根据环境获取配置

// 实例化axios
const server = axios.create({
  baseURL: config.baseURL, // api 的 base_url
  timeout: config.timeout, // api 的响应过期时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

// 请求拦截器
server.interceptors.request.use(
  config => {
    let token = null

    // 给发送的数据序列化
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
      config.data = qs.stringify(config.data)
    }

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

export default server
