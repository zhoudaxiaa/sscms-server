/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 导航菜单
 * @Version: 1.0
 * @Date: 2019-06-08 17:11:39
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-11 08:35:39
 */
import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 增加
 * @param: {Object} form 表单数据
 * @return: 
 */
export function addNav(form) {
  return http.post(`${apiPath.v1.nav}`, form)
}

/**
 * @description: 删除
 * @param {String} ids 数据id，可以是多个id，逗号隔开
 * @return: 
 */
export function deleteNav(ids) {
  return http.delete(`${apiPath.v1.nav}/${ids}`)
}

/**
 * @description: 更新
 * @param: {Object} from 表单数据
 * @param: {String} id 数据id
 * @return: 
 */
export function updateNav(form, id) {
  return http.patch(`${apiPath.v1.nav}/${id}`, form)
}

/**
 * @description: 获取所有
 * @return: 
 */
export function getAllNav() {
  return http.get(`${apiPath.v1.nav}/all`)
}
