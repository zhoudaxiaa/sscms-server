/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 所有的mutations 名字，方便修改，查看
 * @Version: 1.0
 * @Date: 2019-01-10 10:33:10
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-03-07 12:40:15
 */

// admin 的mutations
export const SET_TOKEN = 'set_token' // 存储token
export const SET_ADMIN_NAME = 'set_name' // 存储管理员名
export const SET_RESOURCE = 'set_resource' // 存储角色资源
export const SET_ADMIN_AVATAR = 'set_admin_avatar' // 存储管理员头像

// menus 的mutations
export const SET_DYNAMIC_MENUS = 'set_dynamic_menus' // 存储动态生成的菜单
export const DELETE_DYNAMIC_MENUS = 'delete_dynamic_menus' // 删除动态生成的菜单

// app 的mutations
export const TOGGLE_SIDEBAR_COLLAPSE = 'toggle_sidebar_collapse' // 切换并存储侧边栏展开状态
export const ADD_TAG_VIEW = 'add_tag_view' // 添加切换页面标签的状态
export const DELETE_TAG_VIEW = 'delete_tag_view' // 删除页面标签