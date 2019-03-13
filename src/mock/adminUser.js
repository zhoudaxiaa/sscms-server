/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 管理员相关mock 数据
 * @Version: 1.0
 * @Date: 2018-12-21 10:09:01
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-03-13 21:28:44
 */
import qs from 'qs'

import apiPath from '@/api/apiPath' //所有api 地址
const Mock = require('mockjs')

// 登录mock
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

// 根据管理员id获取管理员信息mock
// Mock.mock(apiPath.admin, 'get', {
//   'code': 0,
//   'data': {
//     'name': 'Super Admin',
//     'roles': 'admin',
//     'introduce': '超级管理员',
//     'avatar': 'https://www.html-js.cn/upload/images/defaultlogo.png'
//   },
//   'msg': ''
// })

// 获取管理员列表mock
Mock.mock(RegExp(apiPath.adminUser + '.*'), 'get', {
  'code': 0,
  'data|20': [
    {
      'id|10': '',
      'name': '@cname()',
      'avatar': '',
      'userName': 'sscms',
      'role': '超级管理员',
      'email': '@email()',
      'isActive|1-2': true,
      'introduce|5-20': ''
    }
  ],
  'msg': ''
})

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
