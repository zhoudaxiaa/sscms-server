/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 项目基础配置
 * @Version: 1.0
 * @Date: 2018-12-20 10:28:40
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-01-19 17:49:39
 */
// import imgBaseUrl from '@/assets'

const setting = {
  dev: {
    baseUrl: 'http://127.0.0.1:8080', //域名地址
    timeout: '2500' // axios请求响应超时时间
  },
  pro: {
    baseUrl: 'http://api.zhoudaxiaa.com',
    timeout: '2500'
  }
}

//根据环境导出相应配置
const config = process.env.NODE_ENV === 'production' ? setting.pro : setting.dev

export default config
