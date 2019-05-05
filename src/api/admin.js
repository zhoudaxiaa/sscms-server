/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户相关请求
 * @Version: 1.0
 * @Date: 2018-12-24 22:01:36
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-05-05 22:23:41
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 用户名登录请求
 * @param {Object} loginForm 登录表单
 * @return: 请求数据
 */
export function login (loginForm) {
  return http.post(`${apiPath.v1.admin}/login`, loginForm)
}

/**
 * @description: 新增管理员
 * @param {object} form 管理员信息表 
 * @return: 
 */
export function addAdminUser (form) {
  return http.post(apiPath.v1.admin, form)
}

/**
 * @description: 删除管理员
 * @param {String} idList 删除的id，多个id 用逗号隔开 
 * @return: 
 */
export function deleteAdminUser (idList) {
  return http.delete(`${apiPath.v1.admin}/${idList}`)
}

/**
 * @description: 更新管理员信息
 * @param {Object} form 管理员信息表 
 * @param {String} id 当前数据id
 * @return: 
 */
export function updateAdminUser (form, id) {
  return http.patch(`${apiPath.v1.admin}/${id}`, form)
}

/**
 * @description: 获取管理员列表
 * @param {number} start 从第几条数据开始
 * @param {number} count 一页多少条数据
 * @return: 
 */
export function getAdminUser (start = 0, count = 10) {
  return http.get(`${apiPath.v1.admin}?start=${start}&count=${count}`)
}