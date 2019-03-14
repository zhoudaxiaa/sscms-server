/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 关于数据的过滤器
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 12:19:01
 * @LastEditTime: 2019-03-14 12:38:14
 */

export function filterTableData (data, filterData) {
  let newData = []
  data.forEach((obj, i) => {
    newData[i] = {}
    for(let key in obj) {
      if(filterData.indexOf(key) > -1) {
        newData[i][key] = obj[key]
      }
    }
  })

  return newData
}