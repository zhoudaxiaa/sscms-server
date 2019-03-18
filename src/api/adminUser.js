/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户相关请求
 * @Version: 1.0
 * @Date: 2018-12-24 22:01:36
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-03-18 11:34:16
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
export function getAdminUser (offset = 1, limit = 10) {
  return http({
    url: `${apiPath.adminUser}?offset=${offset}&limit=${limit}`,
    method: 'get'
  })
}

/**
 * @description: 新增管理员
 * @param {object} form 管理员信息表 
 * @return: 
 */

export function addAdminUser (form) {
  return http({
    url: apiPath.adminUser,
    method: 'post'
  })
}

/**
 * @description: 更新管理员信息
 * @param {type} 
 * @return: 
 */

export function updateAdminUser (form) {
  return http({
    url: apiPath.adminUser,
    method: 'put'
  })
}

/**
 * @description: 删除管理员
 * @param {type} 
 * @return: 
 */

export function deleteAdminUser (idList) {
  return http({
    url: apiPath.adminUser,
    method: 'delete'
  })
}