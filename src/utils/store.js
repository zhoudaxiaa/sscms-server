/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 简化getters，mutations 操作
 * @Version: 1.0
 * @Date: 2019-01-09 15:12:07
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-01-19 15:30:58
 */

/**
 * @description: 简化store 的getters，防止刷新后清空了store，读取本地数据返回数据
 * @param {object} state store 的 state对象
 * @param {string} name 要获取的state 属性名
 * @return: 数据
 */
export function getter(state, name) {
  // 看state 中 name 属性值是否有值，有就取， 没有就去看localstorege有没有值，有就取，没有就去空字符串
  let data = null

  if (!state[name]) {
    // 没有值就从缓存中取值并存到state
    data = localStorage[name] || ''
    state[name] = data
  }

  return state[name] ? JSON.parse(state[name]) : ''
}

/**
 * @description: 简化store 的mutations，存数据时，也存到本地
 * @param {type}
 * @return:
 */
export function setMutation(state, name, data) {
  data = JSON.stringify(data)
  state[name] = data
  localStorage[name] = data
}

/**
 * @description: 简化store 的mutations，删数据时，也把本地的删除
 * @param {type}
 * @return:
 */
export function deleteMutation(state, name) {
  state[name] = ''
  localStorage.removeItem(name)
}
