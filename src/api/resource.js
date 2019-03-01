/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 权限操作资源相关请求
 * @Version: 1.0
 * @Date: 2018-12-25 13:40:02
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-02-26 16:03:48
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 通过管理员帐号获取角色资源
 * @param {string} account 管理员帐号
 * @return: 数据
 */
export function getResourceByToken(token) {
  return http({
    url: apiPath.resource,
    method: 'post',
    data: token
  })
}
