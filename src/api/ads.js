/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 广告相关api
 * @Version: 1.0
 * @Date: 2019-05-27 19:14:07
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-11 22:01:57
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 新增广告
 * @param {Object} form 管理员信息表 
 * @return: 
 */
export function addAds (form) {
  return http.post(apiPath.v1.ads, form)
}

/**
 * @description: 删除广告
 * @param {String} idList 删除的id，多个id 用逗号隔开 
 * @return: 
 */
export function deleteAds (idList) {
  return http.delete(`${apiPath.v1.ads}/${idList}`)
}

/**
 * @description: 更新广告
 * @param {Object} form 管理员信息表 
 * @param {String} id 当前数据id
 * @return: 
 */
export function updateAds (form, id) {
  return http.patch(`${apiPath.v1.ads}/${id}`, form)
}

/**
 * @description: 获取所有广告列表
 * @param {String} type 查询字段
 * @param {Number} value 查询字段值
 * @param {String} sortBy 排序字段
 * @return: 
 */
export function getAllAds (type, value, sortBy) {
  return http.get(`${apiPath.v1.ads}/all?type=${type}&value=${value}&sortBy=${sortBy}`)
}

/**
 * @description: 获取部分广告列表
 * @param {Number} start 从第几条数据开始
 * @param {Number} count 一页多少条数据
 * @param {String} type 查询字段
 * @param {Number} value 查询字段值
 * @param {String} sortBy 排序字段
 * @return: 
 */
export function getAds (start = 0, count = 10, type, value, sortBy) {
  return http.get(`${apiPath.v1.ads}?start=${start}&count=${count}&type=${type}&value=${value}&sortBy=${sortBy}`)
}

/**
 * @description: 获取单个广告
 * @param {String} id 从第几条数据开始
 * @return: 
 */
export function getOneAds (id) {
  return http.get(`${apiPath.v1.ads}/${id}`)
}
