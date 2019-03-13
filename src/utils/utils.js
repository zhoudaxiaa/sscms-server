/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 公用的工具函数
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-13 21:36:25
 * @LastEditTime: 2019-03-13 21:37:21
 */

/**
 * @description: 深拷贝
 * @param {object} arr 要拷贝的对象
 * @return: 
 */
export function deepCopy(arr) {
  var obj = arr instanceof Array ? [] : {}
  for (var item in arr) {
      if (typeof arr[item] === "object") {
          obj[item] = deepCopy(arr[item]);
      } else {
          obj[item] = arr[item];
      }
  }
  return obj;
}
