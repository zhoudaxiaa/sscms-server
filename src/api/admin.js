/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户相关请求
 * @Version: 1.0
 * @Date: 2018-12-24 22:01:36
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-01-10 12:49:59
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @msg: 通过管理员名获取管理员信息
 * @param {string} 管理员名
 * @return: 请求数据
 */
export function getInfoByAdminName(userName) {
  return http({
    url: apiPath.admin + '/' + userName,
    method: 'get'
  })
}

/**
 * @msg: 用户名登录请求
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
