/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 管理员相关mock 数据
 * @Version: 1.0
 * @Date: 2018-12-21 10:09:01
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-04-13 20:27:48
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
      'name': 'admin',
      'avatar': 'https://www.html-js.cn/upload/images/defaultlogo.png',
      'token|30': '',
    })
  }

})

// 管理员操作菜单资源数据
Mock.mock(RegExp(`${apiPath.v1.admin}/(.*?)/resource\\?type=0`), 'get', [
  {
    "_id":"B1vO0x4mZ",
    "name":"content",
    "type":"0",
    "api":"",
    "parentId":
    "SJlaslEXZ",
    "routePath":"content",
    "componentPath":
    "content/index",
    "comments":"文档列表管理",
    "icon":"",
    "date":"2017-06-18T13:21:51.366Z",
    "sortId":1,
    "isActive":true
  },{
    "_id":"H1kjttNg-",
    "comments":"用户管理",
    "name":"adminUser",
    "parentId":"SkFHdYElb",
    "type":"0",
    "api":"",
    "routePath":"adminUser",
    "componentPath":"adminUser/index",
    "icon":"",
    "date":"2017-05-13T13:26:46.581Z",
    "sortId":1,
    "isActive":true
  },{
    "_id":"ryVxhlE7-",
    "name":"contentCategoryManage",
    "type":"0",
    "api":"",
    "parentId":"SJlaslEXZ",
    "routePath":"contentCategory",
    "componentPath":"contentCategory/index",
    "comments":"文档类别管理",
    "icon":"",
    "date":"2017-06-18T13:11:07.828Z",
    "sortId":1,
    "isActive":true
  },{
    "_id":"BJmnKKVlZ",
    "comments":"角色管理菜单",
    "name":"roleManager",
    "parentId":"SkFHdYElb",
    "type":"0",
    "api":"",
    "routePath":"Role",
    "componentPath":"Role/index",
    "icon":"",
    "date":"2017-05-13T13:27:07.469Z",
    "sortId":2,
    "isActive":true
  },{
    "_id":"rkI6YtEgW",
    "comments":"资源管理菜单",
    "name":"resourceManage",
    "parentId":"SkFHdYElb",
    "type":"0",
    "routePath":"adminResource",
    "api":"",
    "componentPath":"adminResource/index",
    "icon":"",
    "date":"2017-05-13T13:27:25.717Z",
    "sortId":3,
    "isActive":true
  },{
    "_id":"HJwby-4mW",
    "name":"editContentFunction",
    "type":"0",
    "api":"",
    "parentId":"SJlaslEXZ",
    "routePath":"editContent/:id",
    "componentPath":"content/contentForm",
    "comments":"文档编辑页面",
    "icon":"",
    "date":"2017-06-18T13:24:14.631Z",
    "sortId":4,
    "isActive":false
  },{
    "_id":"BJxHyZV7Z",
    "name":"tagManage",
    "type":"0",
    "api":"",
    "parentId":"SJlaslEXZ",
    "routePath":"contentTags",
    "componentPath":"contentTag/index",
    "comments":"标签内容管理和维护",
    "icon":"",
    "date":"2017-06-18T13:25:12.506Z",
    "sortId":5,
    "isActive":true
  },{
    "_id":"rJFILtEdb",
    "name":"dataBakManage",
    "type":"0",
    "api":"",
    "parentId":"SkFHdYElb",
    "routePath":"backUpData",
    "icon":"",
    "componentPath":"backUpData/index",
    "comments":"数据备份功能",
    "date":"2017-08-18T15:22:56.891Z",
    "sortId":5,
    "isActive":true
  },{
    "_id":"rJ4_1WEQb",
    "name":"contentMessageManage",
    "type":"0",
    "api":"",
    "parentId":"SJlaslEXZ",
    "routePath":"contentMessages",
    "componentPath":"contentMessage/index",
    "comments":"用户留言管理",
    "icon":"",
    "date":"2017-06-18T13:26:04.111Z",
    "sortId":6,
    "isActive":true
  },{
    "_id":"S1M5Vw6u-",
    "name":"sysTermLogsManage",
    "type":"0",
    "api":"",
    "parentId":"SkFHdYElb",
    "routePath":"systemOptionLog",
    "icon":"",
    "componentPath":"systemOptionLog/index",
    "comments":"系统操作日志管理",
    "date":"2017-08-25T08:49:14.356Z",
    "sortId":6,
    "isActive":true
  },{
    "_id":"SJRg1Fyqb",
    "name":"sysTermNoticeManage",
    "type":"0",
    "api":"",
    "parentId":"SkFHdYElb",
    "routePath":"systemNotify",
    "icon":"",
    "componentPath":"systemNotify/index",
    "comments":"消息管理设置",
    "date":"2017-09-08T02:22:45.585Z",
    "sortId":7,
    "isActive":true
  },{
    "_id":"H1CNCukcZ",
    "name":"announcementManage",
    "type":"0",
    "api":"",
    "parentId":"SkFHdYElb",
    "routePath":"announce",
    "icon":"",
    "componentPath":"announce/index",
    "comments":"公告管理功能",
    "date":"2017-09-08T02:19:33.911Z",
    "sortId":8,
    "isActive":true
  },{
    "_id":"HkOc66ucZ",
    "name":"adsManage",
    "type":"0",
    "api":"",
    "parentId":"SkFHdYElb",
    "routePath":"ads",
    "icon":"",
    "componentPath":"ads/index",
    "comments":"广告列表管理",
    "date":"2017-09-15T03:48:32.010Z",
    "sortId":10,
    "isActive":true
  },{
    "_id":"HJ0706u5W",
    "name":"editAdsFunction",
    "type":"0",
    "api":"",
    "parentId":"SkFHdYElb",
    "routePath":"editAds/:id",
    "icon":"",
    "componentPath":"ads/infoForm",
    "comments":"广告编辑功能",
    "date":"2017-09-15T03:51:02.224Z",
    "sortId":11,
    "isActive":false
  },{
    "_id":"r1fTSk65-",
    "name":"sysTemMain",
    "type":"0",
    "api":"",
    "parentId":"SkFHdYElb",
    "routePath":"main",
    "icon":"",
    "componentPath":"main/index",
    "comments":"系统主页",
    "date":"2017-09-18T06:20:42.270Z",
    "sortId":14,
    "isActive":false
  },{
    "_id":"BkcTBYrpf",
    "name":"templateManage",
    "type":"0",
    "api":"",
    "parentId":"SkFHdYElb",
    "routePath":"contentTemp",
    "icon":"",
    "componentPath":"contentTemp/index",
    "comments":"模板编辑",
    "date":"2018-05-01T06:14:26.362Z",
    "sortId":20,
    "isActive":true
  },{
    "_id":"HJcUeCU6G",
    "name":"templateConfig",
    "type":"0",
    "api":"",
    "parentId":"SkFHdYElb",
    "routePath":"templateConfig",
    "icon":"",
    "componentPath":"templateConfig/index",
    "comments":"模板配置",
    "date":"2018-05-02T05:44:50.025Z",
    "sortId":22,
    "isActive":true
  },{
    "_id":"SkFHdYElb",
    "comments":"系统管理",
    "name":"systemManage",
    "parentId":"0",
    "type":"0",
    "componentPath":"",
    "icon":"component",
    "routePath":"",
    "api":"",
    "date":"2017-05-13T13:21:04.780Z",
    "sortId":1,
    "isActive":true
  },{
    "_id":"SJlaslEXZ",
    "name":"contentManage",
    "type":"0",
    "api":"",
    "parentId":"0",
    "routePath":"",
    "componentPath":"",
    "comments":"文档信息管理",
    "icon":"documentation",
    "date":"2017-06-18T13:10:15.979Z",
    "sortId":2,
    "isActive":true
  }
])

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