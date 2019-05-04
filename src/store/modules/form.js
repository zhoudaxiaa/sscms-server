/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 表单相关store
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-14 17:04:28
 * @LastEditTime: 2019-04-21 21:51:28
 */

import { getter, setMutation } from '@/utils/localStore' // 封装本地存储的 getters，mutations 的方法
import * as types from '@/store/mutation-types'

export default {
  state: {

    adminUser: {  // 管理员
      currentPage: getter('adminUser.currentPage') || 1, // 当前页码
    },

    role: {  // 角色
      currentPage: getter('role.currentPage') || 1, // 当前页码
    },

    article: {  // 文章
      currentPage: getter('article.currentPage') || 1, // 当前页码
    }
  },
  
  getters: {
  },

  mutations: {

    // 存储管理员页面的当前页码
    [types.SET_ADMIN_USER_CURRENT_PAGE] (state, page) {
      setMutation(state,  'adminUser.currentPage', page)
    },

    // 存储角色页面的当前页码
    [types.SET_ROLE_CURRENT_PAGE] (state, page) {
      setMutation(state, 'role.currentPage', page)
    },

    // 存储角色页面的当前页码
    [types.SET_ARTICLE_CURRENT_PAGE] (state, page) {
      setMutation(state, 'article.currentPage', page)
    },

  },


}