/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 开发环境错误检测函数
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-11 22:08:11
 * @LastEditTime: 2019-04-20 17:28:43
 */

/**
 * @description: 警告函数
 * @param {String} msg 错误信息
 * @param {Object} err 错误对象
 * @return: 
 */ 
export function warn (msg, err = '') {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[SSCMS warn]: ${msg}${err}`)
  }
}
