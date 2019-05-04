/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 角色组资源相关mock
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 14:20:12
 * @LastEditTime: 2019-05-04 22:44:26
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

// 操作菜单资源数据
Mock.mock(RegExp(`${apiPath.v1.role}/(.*?)/resource/all\\?type=type&value=0`), 'get', [
  {
    "id":"B1vO0x4mZ",
    "name":"article",
    "type":"0",
    "api":"",
    "parent_id":
    "SJlaslEXZ",
    "route_path":"article",
    "component_path":
    "article/index",
    "comments":"文档列表管理",
    "icon":"",
    "date":"2017-06-18T13:21:51.366Z",
    "sort_id":1,
    "is_show":true
  },{
    "id":"H1kjttNg-",
    "comments":"用户管理",
    "name":"adminUser",
    "parent_id":"SkFHdYElb",
    "type":"0",
    "api":"",
    "route_path":"adminUser",
    "component_path":"adminUser/index",
    "icon":"",
    "date":"2017-05-13T13:26:46.581Z",
    "sort_id":1,
    "is_show":true
  },{
    "id":"ryVxhlE7-",
    "name":"articleCategoryManage",
    "type":"0",
    "api":"",
    "parent_id":"SJlaslEXZ",
    "route_path":"articleCategory",
    "component_path":"articleCategory/index",
    "comments":"文档类别管理",
    "icon":"",
    "date":"2017-06-18T13:11:07.828Z",
    "sort_id":1,
    "is_show":true
  },{
    "id":"BJmnKKVlZ",
    "comments":"角色管理菜单",
    "name":"roleManager",
    "parent_id":"SkFHdYElb",
    "type":"0",
    "api":"",
    "route_path":"Role",
    "component_path":"Role/index",
    "icon":"",
    "date":"2017-05-13T13:27:07.469Z",
    "sort_id":2,
    "is_show":true
  },{
    "id":"rkI6YtEgW",
    "comments":"资源管理菜单",
    "name":"resourceManage",
    "parent_id":"SkFHdYElb",
    "type":"0",
    "route_path":"adminResource",
    "api":"",
    "component_path":"adminResource/index",
    "icon":"",
    "date":"2017-05-13T13:27:25.717Z",
    "sort_id":3,
    "is_show":true
  },{
    "id":"HJwby-4mW",
    "name":"editarticleFunction",
    "type":"0",
    "api":"",
    "parent_id":"SJlaslEXZ",
    "route_path":"editArticle/:id",
    "component_path":"article/ArticleForm",
    "comments":"文档编辑页面",
    "icon":"",
    "date":"2017-06-18T13:24:14.631Z",
    "sort_id":4,
    "is_show":false
  },{
    "id":"BJxHyZV7Z",
    "name":"tagManage",
    "type":"0",
    "api":"",
    "parent_id":"SJlaslEXZ",
    "route_path":"articleTags",
    "component_path":"articleTag/index",
    "comments":"标签内容管理和维护",
    "icon":"",
    "date":"2017-06-18T13:25:12.506Z",
    "sort_id":5,
    "is_show":true
  },{
    "id":"rJFILtEdb",
    "name":"dataBakManage",
    "type":"0",
    "api":"",
    "parent_id":"SkFHdYElb",
    "route_path":"backUpData",
    "icon":"",
    "component_path":"backUpData/index",
    "comments":"数据备份功能",
    "date":"2017-08-18T15:22:56.891Z",
    "sort_id":5,
    "is_show":true
  },{
    "id":"rJ4_1WEQb",
    "name":"articleMessageManage",
    "type":"0",
    "api":"",
    "parent_id":"SJlaslEXZ",
    "route_path":"articleMessages",
    "component_path":"articleMessage/index",
    "comments":"用户留言管理",
    "icon":"",
    "date":"2017-06-18T13:26:04.111Z",
    "sort_id":6,
    "is_show":true
  },{
    "id":"S1M5Vw6u-",
    "name":"sysTermLogsManage",
    "type":"0",
    "api":"",
    "parent_id":"SkFHdYElb",
    "route_path":"systemOptionLog",
    "icon":"",
    "component_path":"systemOptionLog/index",
    "comments":"系统操作日志管理",
    "date":"2017-08-25T08:49:14.356Z",
    "sort_id":6,
    "is_show":true
  },{
    "id":"SJRg1Fyqb",
    "name":"sysTermNoticeManage",
    "type":"0",
    "api":"",
    "parent_id":"SkFHdYElb",
    "route_path":"systemNotify",
    "icon":"",
    "component_path":"systemNotify/index",
    "comments":"消息管理设置",
    "date":"2017-09-08T02:22:45.585Z",
    "sort_id":7,
    "is_show":true
  },{
    "id":"H1CNCukcZ",
    "name":"announcementManage",
    "type":"0",
    "api":"",
    "parent_id":"SkFHdYElb",
    "route_path":"announce",
    "icon":"",
    "component_path":"announce/index",
    "comments":"公告管理功能",
    "date":"2017-09-08T02:19:33.911Z",
    "sort_id":8,
    "is_show":true
  },{
    "id":"HkOc66ucZ",
    "name":"adsManage",
    "type":"0",
    "api":"",
    "parent_id":"SkFHdYElb",
    "route_path":"ads",
    "icon":"",
    "component_path":"ads/index",
    "comments":"广告列表管理",
    "date":"2017-09-15T03:48:32.010Z",
    "sort_id":10,
    "is_show":true
  },{
    "id":"HJ0706u5W",
    "name":"editAdsFunction",
    "type":"0",
    "api":"",
    "parent_id":"SkFHdYElb",
    "route_path":"editAds/:id",
    "icon":"",
    "component_path":"ads/infoForm",
    "comments":"广告编辑功能",
    "date":"2017-09-15T03:51:02.224Z",
    "sort_id":11,
    "is_show":false
  },{
    "id":"r1fTSk65-",
    "name":"sysTemMain",
    "type":"0",
    "api":"",
    "parent_id":"SkFHdYElb",
    "route_path":"main",
    "icon":"",
    "component_path":"main/index",
    "comments":"系统主页",
    "date":"2017-09-18T06:20:42.270Z",
    "sort_id":14,
    "is_show":false
  },{
    "id":"BkcTBYrpf",
    "name":"templateManage",
    "type":"0",
    "api":"",
    "parent_id":"SkFHdYElb",
    "route_path":"articleTemp",
    "icon":"",
    "component_path":"articleTemp/index",
    "comments":"模板编辑",
    "date":"2018-05-01T06:14:26.362Z",
    "sort_id":20,
    "is_show":true
  },{
    "id":"HJcUeCU6G",
    "name":"templateConfig",
    "type":"0",
    "api":"",
    "parent_id":"SkFHdYElb",
    "route_path":"templateConfig",
    "icon":"",
    "component_path":"templateConfig/index",
    "comments":"模板配置",
    "date":"2018-05-02T05:44:50.025Z",
    "sort_id":22,
    "is_show":true
  },{
    "id":"SkFHdYElb",
    "comments":"系统管理",
    "name":"systemManage",
    "parent_id":"0",
    "type":"0",
    "component_path":"",
    "icon":"component",
    "route_path":"",
    "api":"",
    "date":"2017-05-13T13:21:04.780Z",
    "sort_id":1,
    "is_show":true
  },{
    "id":"SJlaslEXZ",
    "name":"articleManage",
    "type":"0",
    "api":"",
    "parent_id":"0",
    "route_path":"",
    "component_path":"",
    "comments":"文档信息管理",
    "icon":"documentation",
    "date":"2017-06-18T13:10:15.979Z",
    "sort_id":2,
    "is_show":true
  }
])

// 根据角色id得到的所有资源的id
Mock.mock(RegExp(`${apiPath.v1.role}/(.*?)/resource/all/id`), 'get', [
  "BJ-cqKEe-",
  "BywRcKNxW",
  "rJFGsF4g-",
  "BycritEeW",
  "BkMrhYEe-",
  "BkrPnF4lW",
  "Hyg52FEgZ",
  "Syk2hFVlZ",
  "Sylk6YVgb",
  "Bk3DAtNgW",
  "H10KCFElW",
  "HJVnRK4e-",
  "SJ9MQFqEW",
  "rJKNXFqEb",
  "ryL_IYEuW",
  "BJpFItE_-",
  "r1PsLtEOb",
  "SyQ2NDaOW",
  "BJ-CNPTuW",
  "BkA1rw6dZ",
  "HydzyYJqW",
  "S1H4JK15W",
  "SJlUyK1cZ",
  "SypLAuJcW",
  "HkLdCu19-",
  "Syf00u19b",
  "SkS36pO5Z",
  "SJFyC6d9b",
  "r1-qApd5Z",
  "r1m2Aa_qW",
  "HJA6C6OqW",
  "SJfxkAOqZ",
  "ryQkU16cZ",
  "S1gbUKSpf",
  "HkRmuqH6f",
  "S1g6mjrpz",
  "BkdnGIdpf",
  "rJyAf8uaf",
  "SJIyQLOpz",
  "Hk6eXIOaf",
  "r15YxRI6f",
  "SyUyU-PpG",
  "HJe-LZP6M",
  "BJbII-v6M",
  "HyI7fq1NW",
  "SyUVmc14W",
  "BJ_dmcJ4W",
  "rkc6mqyNW",
  "rkGcQq1NW",
  "SyijQqJNZ",
  "HkAOd3ZDZ",
  "HJD3fqyE-",
  "HJoem914-",
  "SksJE9J4Z",
  "HkVbE5kN-",
  "HkyXNc14W",
  "B15E491V-",
  "SkSLEqJ4Z",
  "HJRDE9yVb",
  "BJHYE5kNZ",
  "Sk3mZRoOQ",
  "r1GLWAjum"
])
