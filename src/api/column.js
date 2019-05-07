/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 专栏相关api
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-05-07 22:56:30
 * @LastEditTime: 2019-05-07 23:04:00
 */
import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 增加
 * @param: {Object} form 表单数据
 * @return: 
 */
export function addColumn(form) {
  return http.post(`${apiPath.v1.column}`, form)
}

/**
 * @description: 删除
 * @param {String} ids 数据id，可以是多个id，逗号隔开
 * @return: 
 */
export function deleteColumn(ids) {
  return http.delete(`${apiPath.v1.column}/${ids}`)
}

/**
 * @description: 更新
 * @param: {Object} from 表单数据
 * @param: {String} id 数据id
 * @return: 
 */
export function updateColumn(form, id) {
  return http.patch(`${apiPath.v1.column}/${id}`, form)
}

/**
 * @description: 获取所有
 * @return: 
 */
export function getAllColumn() {
  return http.get(`${apiPath.v1.column}/all`)
}