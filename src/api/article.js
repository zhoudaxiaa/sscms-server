/*
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 文章相关api
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-21 21:52:46
 * @LastEditTime: 2019-05-08 14:59:19
 */

import http from '@/utils/http.js'
import apiPath from './apiPath.js'

/**
 * @description: 新增文章
 * @param {Object} form 文章表单
 * @return: 
 */
export function addArticle (form) {
  return http.post(`${apiPath.v1.article}`, form)
}

/**
 * @description: 删除文章
 * @param {String} ids 数据id，可以是多个id，逗号隔开
 * @return: 
 */
export function deleteArticle (ids) {
  return http.delete(`${apiPath.v1.article}/${ids}`)
}

/**
 * @description: 更新文章
 * @param {String} id 文章id
 * @param {Object} form 文章表单 
 * @return: 
 */
export function updateArticle (form, id) {
  return http.patch(`${apiPath.v1.article}/${id}`, form)
}

/**
 * @description: 获取单个文章
 * @param {String} id 文章id
 * @return: 
 */
export function getOneArticle (id) {
  return http.get(`${apiPath.v1.article}/${id}`)
}

/**
 * @description: 获取文章列表
 * @param {number} start 从第几条数据开始
 * @param {number} count 一页多少条数据
 * @return: 
 */
export function getArticle (start = 0, count = 10) {
  return http.get(`${apiPath.v1.article}?start=${start}&count=${count}`)
}