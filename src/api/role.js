/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 角色组资源相关请求
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 13:55:26
 * @LastEditTime: 2019-05-05 19:22:33
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 获取全部角色组列表
 * @return: 
 */
export function getAllRole () {
  return http.get(`${apiPath.v1.role}/all`)
}

/**
 * @description: 部分获取角色组列表
 * @param {number} start 从第几条开始
 * @param {number} count 一次多少条数据
 * @return: 
 */
export function getRole (start = 0, count = 10) {
  return http.get(`${apiPath.v1.role}?start=${start}&count=${count}`)
}

/**
 * @description: 根据角色id获取操作菜单
 * @param {string} id 角色id
 * @return: 数据
 */
export function getRoleOpResource(id) {
  return http.get(`${apiPath.v1.role}/${id}/resource/all?type=type&value=0`)
}

/**
 * @description: 根据角色id获取所有操作资源的id
 * @param {string} id 角色id 
 * @param {type} 
 * @return: 
 */
export function getRoleAllResourceId(id) {
  return http.get(`${apiPath.v1.role}/${id}/resource/all/id`)
}

/**
 * @description: 新增角色
 * @param {object} form 角色信息表 
 * @return: 
 */
export function addRole (form) {
  return http.post(apiPath.role)
}

/**
 * @description: 更新角色信息
 * @param {type} 
 * @return: 
 */

export function updateRole (form) {
  return http.patch(apiPath.role)
}

/**
 * @description: 删除角色
 * @param {type} 
 * @return: 
 */
export function deleteRole (ids) {
  return http.delete(apiPath.role)
}