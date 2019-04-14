/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: svg入口文件
 * @Version: 1.0
 * @Date: 2018-12-18 16:01:16
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2018-12-21 10:41:54
 */

import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg组件

// 全局注册svg组件
Vue.component('svg-icon', SvgIcon)

// 加载所有svg 文件
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)

requireAll(req)
