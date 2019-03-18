/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 角色组资源相关mock
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 14:20:12
 * @LastEditTime: 2019-03-18 15:07:57
 */

import apiPath from '@/api/apiPath' //所有api 地址
const Mock = require('mockjs')

// 获取角色组列表mock
Mock.mock(RegExp(apiPath.roles + '.*'), 'get', {
  'code': 0,
  'data': {
    'list': [
      {
        'id': 'zdxzdxzdx',
        'name': '超级管理员',
        'introduce|20': ''
      },
      {
        'id|10': '',
        'name': '编辑',
        'introduce|20': ''
      }
    ]
  },
  'msg': ''
})

// 新增角色
Mock.mock(apiPath.roles, 'post', {
  'code': 0,
  'msg': ''
})

// 更新角色信息
Mock.mock(apiPath.roles, 'put', {
  'code': 0,
  'msg': ''
})

// 删除角色
Mock.mock(apiPath.roles, 'delete', {
  'code': 0,
  'msg': ''
})