/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 系统相关的 store
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-02-26 16:59:39
 * @LastEditTime: 2019-03-04 13:59:47
 */

import { getter, setMutation } from '@/utils/store' // 封装本地存储的 getters，mutations 的方法
import * as types from '@/store/mutation-types'

export default {
  state: {

    // 侧边栏
    sidebar: {
      collapse: false // Boolean 侧边栏展开状态
    },

    // 切换页面标签
    tagView: [
      {
        name: '首页', // String 切换页面的标签名
        path: '/dashboard', // String 标签指向的页面
        active: true // Boolean 当前标签是否激活状态(处于当钱标签)
      }
    ]
  },

  getters: {
    // 读取侧边栏展开状态
    sidebarCollapse (state) {

      let isCollapse
      
      isCollapse = getter(state, 'sidebar', 'collapse')

      return isCollapse === undefined ? false : isCollapse
    },

    // 读取切换页面标签状态
    tagView (state) {

      return getter(state, 'tagView')
    }
  },

  mutations: {
    // 切换并存储侧边栏展开状态
    [types.TOGGLE_SIDEBAR_COLLAPSE] (state) {
      let isCollapse = !this.getters.sidebarCollapse
      setMutation(state, isCollapse, 'sidebar', 'collapse')
    },

    // 添加 切换页面标签
    [types.ADD_TAG_VIEW] (state, tag) {
      let tagView = this.getters.tagView
      tagView.push(tag)
      
      setMutation(state, tagView, 'tagView')
    },

    // 切换页面标签时，改变标签激活状态
    [types.CHANGE_TAG_VIEW] (state, path) {
      let newTagView,
          tagView = this.getters.tagView

      // 遍历数组，切换相应的激活状态，并返回改变后的新数组
      newTagView = tagView.map((tag) => {
        if (tag.path === path.oldPath || tag.path === path.newPath) {
          tag.active = !tag.active
        }

        return tag
      })

      setMutation(state, newTagView, 'tagView')
    },

    // 删除页面标签
    [types.DELETE_TAG_VIEW] (state, path) {
      let newTagView, // 处理后得到的新标签列表
          tagView = this.getters.tagView

      newTagView = tagView.filter((tag) => tag.path !== path)

      if (newTagView.length === 0) {
        newTagView = [{
          name: '首页',
          path: '/dashboard',
          // 激活状态取决于删除时，当前标签是不是首页，如果是，就是true，因为此时页面的路由不会有变化，不会触发watch的 $route
          active: path === '/dashboard'
        }]
      }
      
      setMutation(state, newTagView, 'tagView')
    }
  }
}