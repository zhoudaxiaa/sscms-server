/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 头像上传mock
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 14:24:08
 * @LastEditTime: 2019-04-10 22:10:51
 */

import apiPath from '@/api/apiPath' //所有api 地址
const Mock = require('mockjs')

Mock.mock(apiPath.v1.avatar, 'post', {
  'code': 0,
  'data': {
    'url': 'https://www.html-js.cn/upload/images/defaultlogo.png'
  },
  'msg': ''
})