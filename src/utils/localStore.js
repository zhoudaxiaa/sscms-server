/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 简化getters，mutations 操作
 * @Version: 1.0
 * @Date: 2019-01-09 15:12:07
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-04-13 20:14:01
 */

/**
 * @description: 封装store 的getters，防止刷新后清空了store，读取本地数据返回数据
 * @param {object} state store 的 state对象
 * @param {string} name 要获取的state 属性名
 * @param {string} value state 的属性为对象时，该对象的属性名
 * @return: null 或者数据
 */
export function getter(state, name, value) {
  let data, // 从本地获取的值
      result // 反序列化后得到的结果

  // 直接从本地中取值
  data = localStorage[name]

  // 判断本地有没有值
  if (data) {
    // 有值就反序列化后存储
    result = JSON.parse(data)

    state[name] = result
  }

  if (state[name] === null) {
    return null
  }
  
  // 本地没值，或者有值存储到了state后，返回state值
  return state[name][value] !== undefined ? state[name][value] : state[name]
  
}

/**
 * @description: 封装带存储的store 的mutations，存数据时，也存到本地
 * @param {object} state store 的 state 对象
 * @param {any} date 传进来的数据，可以是任何类型值
 * @param {string} name 要存储的state 属性名 
 * @param {string} value 要存储的state 属性是一个对象，该对象的属性名 
 * @return: 
 */
export function setMutation(state, data, name, value) {

  if (data === undefined) return

  let localData = null

  // 当存储的name 属性是个对象时
  if (value) {
    state[name][value] = data
  } else {
    state[name] = data
  }

  // 不管是不是对象，本地只能存储（state[name]） 序列化化后的值
  localData = JSON.stringify(state[name])

  localStorage[name] = localData
}

/**
 * @description: 简化store 的mutations，删数据时，也把本地的删除
 * @param {object} state store 的 state对象
 * @param {string} name 要删除的state 属性名
 * @param {string} value 要删除的state 属性是一个对象，该对象的属性名
 * @return: 
 */
export function deleteMutation(state, name, value) {
  
  // 判断属性是个对象时
  if (state[name][value] !== undefined) {
    state[name][value] = null

    // 保存删除对象属性值的对象（即本地删除了对象属性值）
    localStorage[name] = JSON.stringify(state[name])
  } else {
    state[name] = null
    localStorage.removeItem(name)
  }

}
