/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户的store
 * @Version: 1.0
 * @Date: 2018-12-20 13:27:38
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-01-19 15:21:30
 */

import { getAdminResource } from '@/api/resource'
import * as types from '@/store/mutation-types'

import { getter, setMutation, deleteMutation } from '@/utils/store' // 简化getters，mutations 的方法

export default {
  state: {
    token: '',
    resource: '', // 角色资源
    account: '' // 管理员帐号
  },
  getters: {
    // 获取token
    getToken(state) {
      return getter(state, 'token')
    },
    // 获取角色资源
    getResource(state) {
      return getter(state, 'resource')
    },
    // 获取管理员帐号
    getAccount(state) {
      return getter(state, 'account')
    }
  },
  mutations: {
    // 存储token
    [types.SET_TOKEN](state, token) {
      setMutation(state, 'token', token)
    },
    // 删除token
    [types.DELETE_TOKEN](state) {
      deleteMutation(state, 'token')
    },
    // 存储管理员帐号
    [types.SET_ACCOUNT](state, account) {
      setMutation(state, 'account', account)
    },
    // 删除管理员帐号
    [types.DELETE_ACCOUNT](state) {
      deleteMutation(state, 'account')
    },
    // 存储角色资源
    [types.SET_RESOURCE](state, resource) {
      setMutation(state, 'resource', resource)
    },
    // 删除角色资源
    [types.DELETE_RESOURCE](state) {
      deleteMutation(state, 'resource')
    }
  },
  actions: {
    // 根据token获取角色资源
    async GetAdminResource({ commit, getters }) {
      const data = await getAdminResource(getters.getToken)
      if (data.code === 0) {
        commit(types.SET_RESOURCE, JSON.parse(data.data.resource))
        return
      }

      throw new Error('请先登录！')
    }
  }
}
