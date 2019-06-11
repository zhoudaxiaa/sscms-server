/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户的store
 * @Version: 1.0
 * @Date: 2018-12-20 13:27:38
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-11 20:35:16
 */

import { getRoleOpResource } from '@/api/role'

import * as types from '@/store/mutation-types'

import { getter, setMutation } from '@/utils/localStore' // 封装本地存储的 getters，mutations 的方法

export default {
  state: {
    id: getter('id') || '', // 管理员id，唯一标识
    roleId: getter('roleId') || '', // 管理员所属角色id，唯一标识
    resource: null, // 角色资源
    name: getter('name') || '', // 管理员名
    avatar: getter('avatar') || '' // 头像
  },
  getters: {

  },
  mutations: {
    // 存储并本地缓存管理员角色唯一标识id
    [types.SET_ADMIN_ROLE_ID] (state, id) {
      setMutation(state, 'roleId', id )
    },

    // 存储并本地缓存管理唯一标识id
    [types.SET_ADMIN_ID] (state, id) {
      setMutation(state, 'id', id )
    },

    // 存储并本地缓存管理员帐号
    [types.SET_ADMIN_NAME] (state, name) {
      setMutation(state, 'name', name)
    },

    // 存储角色资源（不缓存到本地，以备刷新浏览器重新获取角色资源来重新生成动态路由）
    [types.SET_RESOURCE] (state, resource) {
      state.resource = resource
    },

    [types.DELETE_RESOURCE] (state) {
      state.resource = null
    },

    // 存储并本地缓存管理员头像
    [types.SET_ADMIN_AVATAR] (state, avatar) {
      setMutation(state, 'avatar', avatar )
    }
  },
  actions: {
    // 根据角色id获取操作菜单资源
    async GetRoleOpResource ({ commit, state }) {

      const data = await getRoleOpResource(state.roleId)

      if (data) commit(types.SET_RESOURCE, data)

    }
  }
}
