/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 文章相关mock数据
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-21 21:52:55
 * @LastEditTime: 2019-04-22 21:51:00
 */

import apiPath from '@/api/apiPath' //所有api 地址
const Mock = require('mockjs')
// 登录
Mock.mock(RegExp(`${apiPath.v1.article}\\?start=(.*?)&count=(.*?)`), 'get', {
  'start': 0,
  'count': 10,
  'total': 8,
  'list': [
    {
      'aid': 'sagsag',
      'form': 0,
      'author': {
        'id|10': '',
        'name|10': '',
        'avatar|10': ''
      },
      'category': [
        {
          'id|10': '',
          'name|10': ''
        }
      ],
      'title': '水电费吉林省',
      'is_show': true,
      'is_top': false,
      'image': 'asgasgsg',
      'introduce': '固定方式',
      'like_num': 999,
      'comment_num': 999,
      'view_num': 999,
      'publish_time': '5674567'
    }
  ]
})