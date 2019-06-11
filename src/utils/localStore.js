/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 简化getters，mutations 操作
 * @Version: 1.0
 * @Date: 2019-01-09 15:12:07
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-05-11 15:09:53
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
  let result // 从本地获取的值
  let key = name.split('.')[0]
  let tempObj = {}

  // 直接从本地中取值
  result = Storage[key]

  // 判断本地有没有值
  if (result) {
    tempObj[key] = JSON.parse(result)

    return shvl.get(tempObj, name)
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
  let key = name.split('.')[0]

  if (data === undefined) {
    warn('setMutation 传入的data 为 undefined')

    return 
  }

  // 存到state对象上
  shvl.set(state, name, data)

  Storage[key] = JSON.stringify(state[key])

  

}
