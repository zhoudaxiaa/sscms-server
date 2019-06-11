/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 开发环境错误检测函数
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-11 22:08:11
 * @LastEditTime: 2019-06-11 22:03:36
 */

/**
 * @description: 警告函数
 * @param {String} msg 错误信息
 * @param {Object} err 错误对象
 * @return: 
 */ 
export function warn (msg, err = '') {
  let say = 'console.log'
  if (process.env.NODE_ENV !== 'production') {
    [say] (`[SSCMS warn]: ${msg}${err}`)
  }
}
