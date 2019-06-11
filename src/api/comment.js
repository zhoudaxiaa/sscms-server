/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 评论相关api
 * @Version: 1.0
 * @Date: 2019-06-07 16:20:09
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-07 21:32:52
 */
import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 获取评论列表
 * @param {number} start 从第几条数据开始
 * @param {number} count 一页多少条数据
 * @return: 
 */
export function getComment (start = 0, count = 10) {
  return http.get(`${apiPath.v1.comment}?start=${start}&count=${count}`)
}

/**
 * @description: 获取最新评论列表
 * @param {number} start 从第几条数据开始
 * @param {number} count 一页多少条数据
 * @return: 
 */
export function getNewestComment (start = 0, count = 10) {
  return http.get(`${apiPath.v1.newestComment}?start=${start}&count=${count}`)
}