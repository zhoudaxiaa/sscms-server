/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 权限操作资源相关请求
 * @Version: 1.0
 * @Date: 2018-12-25 13:40:02
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-05-06 22:10:05
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 增加资源
 * @param: {Object} form 表单数据
 * @return: 数据
 */
export function addResource(form) {
  return http.post(`${apiPath.v1.resource}`, form)
}

/**
 * @description: 删除资源
 * @param {String} ids 数据id，可以是多个id，逗号隔开
 * @return: 数据
 */
export function deleteResource(ids) {
  return http.get(`${apiPath.v1.resource}/${ids}`)
}

/**
 * @description: 更新资源
 * @param {String} id 数据id
 * @param: {Object} from 表单数据
 * @return: 数据
 */
export function updateResource(id, form) {
  return http.get(`${apiPath.v1.resource}/${id}`, form)
}

/**
 * @description: 获取所有资源
 * @return: 数据
 */
export function getAllResource() {
  return http.get(`${apiPath.v1.resource}/all`)
}
