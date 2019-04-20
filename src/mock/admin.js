/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 管理员相关mock 数据
 * @Version: 1.0
 * @Date: 2018-12-21 10:09:01
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-04-20 18:56:47
 */
import qs from 'qs'

import apiPath from '@/api/apiPath' //所有api 地址
const Mock = require('mockjs')
// 登录
Mock.mock(`${apiPath.v1.admin}/login`, 'post', req => {

  req.body = qs.parse(req.body)
  const username = req.body.username
  const password = req.body.password

  if (username === 'admin' && password === 'admin') {
    return Mock.mock({
      'id': 'twsdgas',
      'role_id|10': '',
      'name': 'admin',
      'avatar': 'https://www.html-js.cn/upload/images/defaultlogo.png',
      'token|30': '',
    })
  }

})

// 获取管理员列表
Mock.mock(RegExp(`${apiPath.v1.admin}\\?start=(.*?)&count=(.*?)`), 'get', {
  start: 0,
  count: 10,
  total: 3,
  list: [
    {
      'id': 'tttttt',
      'name': '@cname()',
      'avatar': '',
      'username': 'sscms',
      'role_id': 'zdxzdxzdx',
      'role_name': '超级管理员',
      'email': '@email()',
      'is_active|1-2': true,
      'introduce|5-20': ''
    },
    {
      'id|10': '',
      'name': '@cname()',
      'avatar': '',
      'username': 'sscms',
      'role_id|10': '',
      'role_name': '@cname()',
      'email': '@email()',
      'is_active|1-2': true,
      'introduce|5-20': ''
    },
  ]
})

// 新增管理员
Mock.mock(apiPath.v1.admin, 'post', {
  'msg': 'ok'
})

// 更新管理员信息
Mock.mock(apiPath.v1.admin, 'put', {
  'msg': 'ok'
})

// 删除管理员信息
Mock.mock(apiPath.v1.admin, 'delete', {
  'msg': 'ok'
})