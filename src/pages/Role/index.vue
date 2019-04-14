<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 管理员角色页面
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-07 11:07:59
 * @LastEditTime: 2019-04-14 22:37:53
 -->

<template>
  <div>

    <!-- 角色表单 -->
    <role-form
      class="form-wrap"
      @changeFormVisible="toggleFormVisible"
      :formData="formData"
      :formOp="formOp"
      :formVisible="formVisible">
    </role-form>

    <div class="table-wrap">

      <!-- 公共操作 -->
      <div class="public-op-wrap">

        <!-- 添加数据按钮 -->
        <add-data-btn
          @formOperation="formOperation">
        </add-data-btn>

        <!-- 删除数据按钮 -->
        <delete-data-btn
          @formOperation="formOperation">
        </delete-data-btn>

      </div>
      
      <!-- 数据table展示组件 -->
      <role-table
        @formOperation="formOperation"
        @selectionOperation="selectionOperation"
        :tableData="tableData">
      </role-table>
      
      <!-- 分页组件，当数据大于10才显示 -->
      <el-pagination
        v-if="total > 10"
        class="pagination-wrap"
        layout="total, prev, pager, next"
        :total="total"
        :current-page.sync="currentPage"
        @current-change="pageChange">
      </el-pagination>
      
    </div>
  </div>
</template>

<script>
import AddDataBtn from '@/pages/common/AddDataBtn'
import DeleteDataBtn from '@/pages/common/DeleteDataBtn'

import mainMixins from '@/pages/common/mainMixins.js'

import RoleForm from './RoleForm'
import RoleTable from './RoleTable'

import { getRole, deleteRole } from '@/api/role'

import * as types from '@/store/mutation-types'

export default {
  name: 'Role',
  components: {
    AddDataBtn,
    DeleteDataBtn,
    RoleForm,
    RoleTable,
  },

  mixins: [mainMixins],

  data () {
    return {

      initFormData: {  // 添加管理员信息初始表格
        name: '',
        instroduce: '',
      }, 
    
    }
  },
  
  created() {
    this.initData() // 初始化数据
  },

  methods: {
    /**
     * @description: 页面初始化时获取数据
     * @param {type} 
     * @return: 
     */
    async initData () {

      const data = await getRole(0, 10)  // 获取第一页，20条数据

      if (data) {
        this.tableData = data.list  // 数据数组
        this.total = data.total  // 数量
      }

    },

    /**
     * @description: 表单修改操作
     * @param {Number} 当前操作的表格列的索引（第几个表格数据）
     * @return: 
     */    
    editData (i) {
      this.toggleFormVisible()
      this.formData = {...this.tableData[i],check_pass:'',password: ''}
    },

    /**
     * @description: 删除数据操作
     * @param {String} idList 操作的数据的id，单个或多个id组成的字符串
     * @return: 
     */
    deleteDataOp (idList) {
      return deleteRole(idList)
    },

    /**
     * @description: 获取数据操作
     * @param {Number} start 从第几条开始获取
     * @param {Number} count 一次获取多少条数据
     * @return: 
     */
    getDataOp (start, count) {
      return getRole(start, count)
    },

        /**
     * @description:   // 存储当前的页码
     * @param {Number} page 当前页码
     * @return: 
     */
    setPageNum (page) {
      this.$store.commit(types.SET_ROLE_CURRENT_PAGE, page)
    }

  },
}
</script>

<style lang="scss" scoped>

</style>