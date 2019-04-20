/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 简化getters，mutations 操作
 * @Version: 1.0
 * @Date: 2019-01-09 15:12:07
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-04-20 17:49:48
 */
import * as shvl from 'shvl'
import { warn } from '@/utils/debug'

const Storage = sessionStorage  // 使用sessionStorage 本地缓存

/**
 * @description: 防止刷新后清空了store，读取本地数据返回数据
 * @param {string} name 要获取的state 属性名,可以是点属性，例(a.b.c)
 * @return: undefined 或者数据
 */
export function getter(name) {
  let data, // 从本地获取的值
      result // 反序列化后得到的结果

  // 直接从本地中取值
  data = shvl.get(Storage, name)

  // 判断本地有没有值
  if (data !== undefined) {
    // 有值就反序列化后存储
    result = JSON.parse(data)

    return result
  } else {
    return undefined
  }
  
}

/**
 * @description: 封装带存储的store 的mutations，存数据时，也存到本地
 * @param {object} state store 的 state 对象
 * @param {any} date 传进来的数据，可以是任何类型值
 * @param {string} name 要存储的state 属性名 ,可以是点属性，例(a.b.c)
 * @return: 
 */
export function setMutation(state, name, data) {

  let jsonData  // 序列化后的数据

  if (data === undefined) {
    warn('setMutation 传入的data 为 undefined')

    return 
  }

  // 存到state对象上
  shvl.set(state, name, data)

  // 不管是不是对象，本地只能存储（state[name]） 序列化化后的值
  jsonData = JSON.stringify(data)

  shvl.set(Storage, name, jsonData)

}
