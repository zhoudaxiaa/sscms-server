/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: vuex 入口文件
 * @Version: 1.0
 * @Date: 2018-12-20 11:42:48
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-02-27 13:41:58
 */

import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import admin from './modules/admin'
import menu from './modules/menu'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    admin,
    menu
  }
})

export default store
