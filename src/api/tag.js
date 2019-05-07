/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 标签相关api
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-05-07 22:56:47
 * @LastEditTime: 2019-05-07 23:04:08
 */
import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 增加
 * @param: {Object} form 表单数据
 * @return: 
 */
export function addTag(form) {
  return http.post(`${apiPath.v1.tag}`, form)
}

/**
 * @description: 删除
 * @param {String} ids 数据id，可以是多个id，逗号隔开
 * @return: 
 */
export function deleteTag(ids) {
  return http.delete(`${apiPath.v1.tag}/${ids}`)
}

/**
 * @description: 更新
 * @param: {Object} from 表单数据
 * @param: {String} id 数据id
 * @return: 
 */
export function updateTag(form, id) {
  return http.patch(`${apiPath.v1.tag}/${id}`, form)
}

/**
 * @description: 获取所有
 * @return: 
 */
export function getAllTag() {
  return http.get(`${apiPath.v1.tag}/all`)
}