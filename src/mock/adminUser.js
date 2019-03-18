/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 管理员相关mock 数据
 * @Version: 1.0
 * @Date: 2018-12-21 10:09:01
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-03-18 13:34:24
 */
import qs from 'qs'

import apiPath from '@/api/apiPath' //所有api 地址
const Mock = require('mockjs')

// 登录
Mock.mock(apiPath.login, 'post', req => {
  req.body = qs.parse(req.body)
  const adminName = req.body.adminName
  const passWord = req.body.passWord

  if (adminName === 'admin' && passWord === 'admin') {
    return Mock.mock({
      code: 0,
      data: {
        'id': 'twsdgas',
        'name': 'admin',
        'avatar': 'https://www.html-js.cn/upload/images/defaultlogo.png'
      },
      'token|30': '',
      'msg': '登录成功'
    })
  }

  return {
    'code': 20002,
    'data': {},
    'msg': '用户名或密码错误'
  }
})

// 获取管理员列表
Mock.mock(RegExp(apiPath.adminUser + '.*'), 'get', {
  'code': 0,
  'data': {
    'list': [
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
    ],
    'total|1-50': 0,
  },
  'msg': ''
})

// 新增管理员
Mock.mock(apiPath.adminUser, 'post', {
  'code': 0,
  'msg': ''
})

// 更新管理员信息
Mock.mock(apiPath.adminUser, 'put', {
  'code': 0,
  'msg': ''
})

// 删除管理员信息
Mock.mock(apiPath.adminUser, 'delete', {
  'code': 0,
  'msg': ''
})