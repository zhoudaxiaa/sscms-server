/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户相关请求
 * @Version: 1.0
 * @Date: 2018-12-24 22:01:36
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-03-13 14:47:39
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 用户名登录请求
 * @param {string} adminName 用户名
 * @param {string} passWord 密码
 * @return: 请求数据
 */
export function loginByAccount(loginForm) {
  return http({
    url: apiPath.login,
    method: 'post',
    data: {
      adminName: loginForm.adminName,
      passWord: loginForm.passWord
    }
  })
}

/**
 * @description: 
 * @param {type} 
 * @return: 
 */
export function getAdminUser(offset, limit) {
  return http({
    url: `${apiPath.adminUser}?offset=${offset}&limit=${limit}`,
    method: 'get'
  })
}