/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户的store
 * @Version: 1.0
 * @Date: 2018-12-20 13:27:38
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-04-16 21:40:44
 */
// import warn from '@/utils/warn'

import { getAdminOpMenu } from '@/api/admin'

import * as types from '@/store/mutation-types'

import { getter, setMutation } from '@/utils/localStore' // 封装本地存储的 getters，mutations 的方法

export default {
  state: {
    id: '', // 管理员id，唯一标识
    roleId: '',  // 角色id
    resource: null, // 角色资源
    name: '', // 管理员名
    avatar: '' // 头像
  },
  getters: {

    // 获取本地缓存管理员标识id
    id (state) {
      return getter(state, 'id')
    },

    // 获取本地缓存管理员名
    adminName (state) {
      return getter(state, 'name')
    },

    // 获取本地缓存管理员头像
    adminAvatar (state) {
      return getter(state, 'avatar')
    },

    // 获取本地缓存管理员角色id
    adminRoleId (state) {
      return getter(state, 'roleId')
    },
  },
  mutations: {

    // 存储并本地缓存管理唯一标识id
    [types.SET_ADMIN_ID] (state, id) {
      setMutation(state, id, 'id')
    },

    // 存储并本地缓存管理员帐号
    [types.SET_ADMIN_NAME] (state, name) {
      setMutation(state, name, 'name', )
    },

    // 存储角色资源（不缓存到本地，以备刷新浏览器重新获取角色资源来重新生成动态路由）
    [types.SET_RESOURCE] (state, resource) {
      state.resource = resource
    },

    // 存储并本地缓存管理员头像
    [types.SET_ADMIN_AVATAR] (state, avatar) {
      setMutation(state, avatar, 'avatar')
    },

    // 存储并本地缓存管理员角色id
    [types.SET_ADMIN_ROLE_ID] (state, roleId) {
      setMutation(state, roleId, 'roleId')
    },
  },
  actions: {
    // 根据管理员id获取操作菜单资源
    async GetAdminOpMenu ({ commit, getters }) {

      const data = await getAdminOpMenu(getters.id)

      if (data) commit(types.SET_RESOURCE, data)

    }
  }
}
