/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 角色组资源相关mock
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 14:20:12
 * @LastEditTime: 2019-04-13 17:42:44
 */

import apiPath from '@/api/apiPath' //所有api 地址
const Mock = require('mockjs')

// 获取全部角色组列表mock
Mock.mock(RegExp(`${apiPath.v1.role}/all`), 'get', {
  'start': 0,
  'count': 10,
  'total': 3,
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
})

// 获取部分角色组列表mock
Mock.mock(RegExp(`${apiPath.v1.role}\\?start=(.*?)&count=(.*?)`), 'get', {
  'start': 0,
  'count': 10,
  'total': 3,
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
})

// 新增角色
Mock.mock(apiPath.v1.role, 'post', {
  'code': 0,
  'msg': ''
})

// 更新角色信息
Mock.mock(apiPath.v1.role, 'put', {
  'code': 0,
  'msg': ''
})

// 删除角色
Mock.mock(apiPath.v1.role, 'delete', {
  'code': 0,
  'msg': ''
})