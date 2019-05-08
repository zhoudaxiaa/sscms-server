/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 公共请求
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-05-08 13:48:35
 * @LastEditTime: 2019-05-08 13:52:36
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 上传文件
 * @param: {Object} file 文件对象
 * @return: 
 */
export function uploadFile(file) {
  return http.post(`${apiPath.uploadFile}`, file)
}