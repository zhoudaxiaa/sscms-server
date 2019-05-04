/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 文章相关api
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-21 21:52:46
 * @LastEditTime: 2019-04-21 21:55:37
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 获取文章列表
 * @param {number} start 从第几条数据开始
 * @param {number} count 一页多少条数据
 * @return: 
 */
export function getArticle (start = 0, count = 10) {
  return http({
    url: `${apiPath.v1.article}?start=${start}&count=${count}`,
    method: 'get'
  })
}