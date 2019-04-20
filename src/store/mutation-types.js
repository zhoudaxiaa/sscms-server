/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 所有的mutations 名字，方便修改，查看
 * @Version: 1.0
 * @Date: 2019-01-10 10:33:10
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-04-16 21:40:42
 */

// admin 的mutations
export const SET_ADMIN_ID = 'set_admin_id' // 存储管理员id
export const SET_ADMIN_NAME = 'set_admin_name' // 存储管理员名
export const SET_RESOURCE = 'set_resource' // 存储角色资源
export const SET_ADMIN_AVATAR = 'set_admin_avatar' // 存储管理员头像
export const SET_ADMIN_ROLE_ID = 'set_admin_role_id' // 存储管理员头像

// menus 的mutations
export const SET_DYNAMIC_MENUS = 'set_dynamic_menus' // 存储动态生成的菜单
export const DELETE_DYNAMIC_MENUS = 'delete_dynamic_menus' // 删除动态生成的菜单

// app 的mutations
export const SET_TOKEN = 'set_token' // 存储token
export const DELETE_TOKEN = 'delete_token'  // 删除token
export const TOGGLE_SIDEBAR_COLLAPSE = 'toggle_sidebar_collapse' // 切换并存储侧边栏展开状态
export const SET_TAG_VIEW = 'set_tag_view'  // 储存页面的标签
export const ADD_TAG_VIEW = 'add_tag_view' // 添加切换页面的标签
export const DELETE_TAG_VIEW = 'delete_tag_view' // 删除页面标签

// form 的mutations
export const TOGGLE_DIALOG_FORM_VISIBLE = 'toggle_dialog_form_visible'  // 存储表单框显示状态

// form 下adminUser 的mutations
export const SET_ADMIN_USER_CURRENT_PAGE = 'set_admin_user_current_page'  // 存储管理员页面的当前页码

// form 下role 的mutations
export const SET_ROLE_LIST = 'set_role_list' // 存储角色组列表
export const SET_ROLE_CURRENT_PAGE = 'set_role_current_page'  // 存储管理员页面的当前页码