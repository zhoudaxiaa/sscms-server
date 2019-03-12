/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户的store
 * @Version: 1.0
 * @Date: 2018-12-20 13:27:38
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-03-12 20:48:17
 */

import { getResourceById } from '@/api/resource'
import * as types from '@/store/mutation-types'

import { getter, setMutation } from '@/utils/store' // 封装本地存储的 getters，mutations 的方法

export default {
  state: {
    token: '',
    id: '', // 管理员id，唯一标识
    resource: null, // 角色资源
    name: '', // 管理员名
    avatar: '' // 头像
  },
  getters: {
    // 获取token
    token (state) {
      return getter(state, 'token')
    },

    // 获取管理员标识id
    id (state) {
      return getter(state, 'id')
    },

    // 获取角色资源( 不从本地获取，以备刷新浏览器重新获取角色资源来重新生成动态路由)
    resource (state) {
      return state.resource
    },

    // 获取管理员名
    adminName (state) {
      return getter(state, 'name')
    },

    // 管理员头像
    adminAvatar (state) {
      return getter(state, 'avatar')
    }
  },
  mutations: {
    // 存储token
    [types.SET_TOKEN] (state, token) {
      setMutation(state, token, 'token',)
    },

    // 存储管理唯一标识id
    [types.SET_ADMIN_ID] (state, id) {
      setMutation(state, id, 'id')
    },

    // 存储管理员帐号
    [types.SET_ADMIN_NAME] (state, name) {
      setMutation(state, name, 'name', )
    },

    // 存储角色资源（不从存储到本地，以备刷新浏览器重新获取角色资源来重新生成动态路由）
    [types.SET_RESOURCE] (state, resource) {
      state.resource = resource
    },

    // 存储管理员头像
    [types.SET_ADMIN_AVATAR] (state, avatar) {
      setMutation(state, avatar, 'avatar')
    }
  },
  actions: {
    // 根据token获取角色资源
    async GetResourceById ({ commit, getters }) {
      const data = await getResourceById(getters.id)
      if (data.code === 0) {
        commit(types.SET_RESOURCE, JSON.parse(data.data.resource))
        return
      }

      throw new Error('请先登录！')
    }
  }
}
