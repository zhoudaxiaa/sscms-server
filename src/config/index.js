/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 项目基础配置
 * @Version: 1.0
 * @Date: 2018-12-20 10:28:40
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-04-11 19:21:50
 */
// import imgBaseUrl from '@/assets'

const setting = {
  dev: {
    baseURL: '', //域名地址
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
