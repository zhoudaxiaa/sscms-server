/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 角色组资源相关mock
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 14:20:12
 * @LastEditTime: 2019-03-14 14:23:31
 */

import apiPath from '@/api/apiPath' //所有api 地址
const Mock = require('mockjs')

// 获取角色组列表mock
Mock.mock(apiPath.roles, 'get', {
  'code': 0,
  'data|5': [
    {
      'id|10': '',
      'name': '超级管理员'
    }
  ],
  'msg': ''
})