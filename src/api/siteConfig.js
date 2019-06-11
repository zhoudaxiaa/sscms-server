/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 站点配置
 * @Version: 1.0
 * @Date: 2019-06-08 12:48:48
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-08 20:18:14
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 获取站点信息
 * @param {Number} start 从第几条数据开始
 * @param {Number} count 一页多少条数据
 * @return: 
 */
export function getSiteConfig () {
  return http.get(`${apiPath.v1.siteConfig}`)
}

/**
 * @description: 更新站点配置
 * @param {Object} form 表单
 * @return: 
 */
export function updateSiteConfig (form) {
  return http.put(`${apiPath.v1.siteConfig}`, form)
}