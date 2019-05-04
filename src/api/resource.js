/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 权限操作资源相关请求
 * @Version: 1.0
 * @Date: 2018-12-25 13:40:02
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-04-21 20:50:41
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 获取所有资源
 * @return: 数据
 */
export function getAllResource() {
  return http({
    url: `${apiPath.v1.resource}/all`,
    method: 'get',
  })
}
