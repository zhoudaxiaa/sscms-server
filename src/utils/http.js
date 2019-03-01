/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: axios 请求封装
 * @Version: 1.0
 * @Date: 2018-12-19 16:09:11
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-02-27 13:14:43
 */

import axios from 'axios'
import store from '@/store'
import qs from 'qs' // 序列化序列化模块
import { Message } from 'element-ui'
import router from '@/router/'

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
    if (localStorage.time && localStorage.time < new Date().getTime()) {
      Message.error('登录超时！请重新登录！')

      router.replace('/login') // 超时重新登录登录
    }

    // 给发送的数据序列化
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
      config.data = qs.stringify(config.data)
    }

    // 每次请求携带token
    if (store.getters.token) config.headers.Authorization = store.getters.getToken

    return config
  },
  error => {
    Message.error('请求超时！')
    Promise.reject(error)
  }
)

// 响应拦截器
server.interceptors.response.use(
  response => {
    response = response.data //取到响应的数据

    // 判断token 是否过期 或 无效
    if (response.code === 10010 || response.code === 10011) {
      store.commit('DELETE_TOKEN') // 清除store 和本地的token

      router.replace('/login') // 重新登录
    }

    // 判断响应数据里有没有token 字段，表示是否更新和 登录成功token
    if (response.token) {
      // 登录成功
      store.commit(types.SET_TOKEN, response.token) // 更新store 和 本地的token

      localStorage.time = new Date().getTime() + 86400000 //设置本地数据过期时间(1 天)
    }

    return response
  },
  err => {
    console.log(err)
    if (err.response.status == 504 || err.response.status == 404) {
      router.push('/404')
    } else if (err.response.status == 403) {
      Message.error({ message: '权限不足,请联系管理员!' })
    } else {
      Message.error({ message: '未知错误!' })
    }
    return Promise.resolve(err)
  }
)

export default server
