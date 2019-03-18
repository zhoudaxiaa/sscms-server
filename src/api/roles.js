/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 角色组资源相关请求
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 13:55:26
 * @LastEditTime: 2019-03-18 15:08:53
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 获取角色组列表
 * @param {number} offset 第几页
 * @param {number} limit 一页多少条数据
 * @return: 
 */
export function getRoles (offset = 1, limit = 10) {
  return http({
    url: `${apiPath.roles}?offset=${offset}&limit=${limit}`,
    method: 'get'
  })
}

/**
 * @description: 新增角色
 * @param {object} form 角色信息表 
 * @return: 
 */

export function addRole (form) {
  return http({
    url: apiPath.roles,
    method: 'post'
  })
}

/**
 * @description: 更新角色信息
 * @param {type} 
 * @return: 
 */

export function updateRole (form) {
  return http({
    url: apiPath.roles,
    method: 'put'
  })
}

/**
 * @description: 删除角色
 * @param {type} 
 * @return: 
 */
export function deleteRoles (ids) {
  return http({
    url: apiPath.roles,
    method: 'delete'
  })
}