/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 广告分类
 * @Version: 1.0
 * @Date: 2019-06-06 13:48:49
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-09 12:21:12
 */
import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 增加广告分类
 * @param {Object} form 信息表 
 * @return: 
 */
export function addAdsCategory (form) {
  return http.post(`${apiPath.v1.adsCategory}`, form)
}

/**
 * @description: 删除广告分类
 * @param {String} idList 删除的id，多个id 用逗号隔开 
 * @return: 
 */
export function deleteAdsCategory (idList) {
  return http.delete(`${apiPath.v1.adsCategory}/${idList}`)
}

/**
 * @description: 更新广告分类
 * @param {Object} form 管理员信息表 
 * @param {String} id 当前数据id
 * @return: 
 */
export function updateAdsCategory (form, id) {
  return http.patch(`${apiPath.v1.adsCategory}/${id}`, form)
}

/**
 * @description: 获取广告分类列表
 * @param {Number} start 从第几条数据开始
 * @param {Number} count 一页多少条数据
 * @return: 
 */
export function getAdsCategory (start = 0, count = 10) {
  return http.get(`${apiPath.v1.adsCategory}?start=${start}&count=${count}`)
}

/**
 * @description: 获取单个广告分类
 * @param {String} id 从第几条数据开始
 * @return: 
 */
export function getOneAdsCategory (id) {
  return http.get(`${apiPath.v1.adsCategory}/${id}`)
}