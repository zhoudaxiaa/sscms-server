/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 权限操作资源相关请求
 * @Version: 1.0
 * @Date: 2018-12-25 13:40:02
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-04-08 00:38:53
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 根据管理员id获取角色资源
 * @param {string} id 管理员id
 * @return: 数据
 */
export function getResourceById(id) {
  return http({
    url: `${apiPath.v1.admin}/${id}/resource`,
    method: 'get',
  })
}
