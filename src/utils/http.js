/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: axios 请求封装
 * @Version: 1.0
 * @Date: 2018-12-19 16:09:11
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-04-15 13:38:47
 */

import axios from 'axios'
import store from '@/store'
import qs from 'qs' // 序列化序列化模块
import { Message } from 'element-ui'
import router from '@/router/index'

import * as types from '@/store/mutation-types'

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

    token = store.getters.token
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
    const res = response.data //取到响应的数据

    // 判断响应数据里有没有token 字段，表示是否更新和 登录成功token
    if (res.token) {
      // 登录成功
      store.commit(types.SET_TOKEN, res.token) // 更新store 和 本地的token

    }

    return res
  },
  err => {
    let message = '未知错误！'

    switch (err.response.status) {
      case 400: 
        switch (err.response.data.code) {
          case 2002: 
            message = '用户名或密码错误！'
            break
          case 6005:
            message = '登录超时，请重新登录！'
            localStorage.clear()
            setTimeout(() => {
              router.replace('/login')
            })
            break
          default: message = '请求错误！'
        }
        break;
      case 404:
      case 504: message = '网络错误！'; break
      case 403: message = '权限不足,请联系管理员!'; break
      default: message = '未知错误!'
    }

    Message.error({ message })

    return Promise.reject(err.response)
  }
)

export default server
