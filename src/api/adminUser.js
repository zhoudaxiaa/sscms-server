/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户相关请求
 * @Version: 1.0
 * @Date: 2018-12-24 22:01:36
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-03-13 21:26:18
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 用户名登录请求
 * @param {string} adminName 用户名
 * @param {string} passWord 密码
 * @return: 请求数据
 */
export function loginByAccount (loginForm) {
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
 * @description: 获取管理员列表
 * @param {number} offset 第几页
 * @param {number} limit 一页多少条数据
 * @return: 
 */
export function getAdminUser (offset, limit) {
  return http({
    url: `${apiPath.adminUser}?offset=${offset}&limit=${limit}`,
    method: 'get'
  })
}

/**
 * @description: 获取角色组列表
 * @param {type} 
 * @return: 
 */

export function getRoles () {
  return http({
    url: apiPath.roles,
    method: 'get'
  })
}
