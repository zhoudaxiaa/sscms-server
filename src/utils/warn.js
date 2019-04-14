/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 全局报错提示（仅开发环境）
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-11 22:08:11
 * @LastEditTime: 2019-04-11 22:12:10
 */

/**
 * @description: 报错函数
 * @param {any} err 错误对象
 * @return: 
 */ 
export default function(err) {
  if (process.env.NODE_ENV === 'development') {
    console.log(err)
  }
}