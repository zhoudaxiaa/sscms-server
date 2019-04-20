/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 错误抛出
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-20 17:18:47
 * @LastEditTime: 2019-04-20 17:25:47
 */


/**
 * @description: 报错函数
 * @param {String} msg 错误信息
 * @param {Object} err 错误对象
 * @return: 
 */
export function error(msg, err = '') {
  throw(`SSCMS Error: ${msg} ${err}`)
}
