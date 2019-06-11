/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户相关api
 * @Version: 1.0
 * @Date: 2019-06-07 16:18:07
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-07 23:06:37
 */
import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 获取用户列表
 * @param {number} start 从第几条数据开始
 * @param {number} count 一页多少条数据
 * @return: 
 */
export function getUser (start = 0, count = 10) {
  return http.get(`${apiPath.v1.user}?start=${start}&count=${count}`)
}

/**
 * @description: 获最新取用户列表
 * @param {number} start 从第几条数据开始
 * @param {number} count 一页多少条数据
 * @return: 
 */
export function getNewestUser (start = 0, count = 10) {
  return http.get(`${apiPath.v1.newestUser}?start=${start}&count=${count}`)
}