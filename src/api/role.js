/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 角色组资源相关请求
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 13:55:26
 * @LastEditTime: 2019-04-15 22:39:02
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 获取全部角色组列表
 * @return: 
 */
export function getAllRole () {
  return http({
    url: `${apiPath.v1.role}/all`,
    method: 'get'
  })
}

/**
 * @description: 部分获取角色组列表
 * @param {number} start 从第几条开始
 * @param {number} count 一次多少条数据
 * @return: 
 */
export function getRole (start = 0, count = 10) {
  return http({
    url: `${apiPath.v1.role}?start=${start}&count=${count}`,
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
    url: apiPath.v1.role,
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
    url: apiPath.v1.role,
    method: 'put'
  })
}

/**
 * @description: 删除角色
 * @param {type} 
 * @return: 
 */
export function deleteRole (ids) {
  return http({
    url: apiPath.v1.role,
    method: 'delete'
  })
}