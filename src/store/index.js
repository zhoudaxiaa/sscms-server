/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: vuex 入口文件
 * @Version: 1.0
 * @Date: 2018-12-20 11:42:48
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-01-09 16:36:55
 */

import Vue from 'vue'
import Vuex from 'vuex'

import admin from './modules/admin'
import permission from './modules/permission'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    admin,
    permission
  }
})

export default store
