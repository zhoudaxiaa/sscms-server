/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 角色组资源相关请求
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 13:55:26
 * @LastEditTime: 2019-03-14 13:56:30
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 获取角色组列表
 * @param {type} 
 * @return: 
 */

export function getRoles () {
  return http({
    url: apiPath.roles,
    method: 'get'
  })
}