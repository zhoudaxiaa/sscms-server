<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户管理页面
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-02-26 09:38:03
 * @LastEditTime: 2019-04-15 22:10:17
 -->

<template>
  <div>

    <!-- 用户表单 -->
    <user-form
      class="form-wrap"
      @changeFormVisible="toggleFormVisible"
      :formData="formData"
      :formOp="formOp"
      :formVisible="formVisible">
    </user-form>

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

      <user-table
        @formOperation="formOperation"
        @selectionOperation="selectionOperation"
        :tableData="tableData">
      </user-table>
      
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

import UserForm from './UserForm'
import UserTable from './UserTable'

import { getAdminUser, deleteAdminUser } from '@/api/admin'

import * as types from '@/store/mutation-types'

export default {
  name: 'adminUser',
  components: {
    AddDataBtn,
    DeleteDataBtn,
    UserForm,
    UserTable
  },
  mixins: [mainMixins],
  data () {
    return {
      initFormData: {  // 初始表单
        name: '',
        avatar: '',
        username: '',
        password: '',
        check_pass: '',  // 非必要字段，只为了表单效验
        email: '',
        role_id: '',
        is_active: true,
        introduce: '',
      },
    
    }
  },
  
  methods: {
    /**
     * @description: 页面初始化时获取数据
     * @param {type} 
     * @return: 
     */
    async initData () {
      this.currentPage = this.$store.getters.adminUserCurrentPage  // 从store 从获取当前页码

      const data = await getAdminUser(0,10)  // 从第一条数据开始，10条数据

      // 请求成功
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
      return deleteAdminUser(idList)
    },

    /**
     * @description: 获取数据操作
     * @param {Number} start 从第几条开始获取
     * @param {Number} count 一次获取多少条数据
     * @return: 
     */
    getDataOp (start, count) {
      return getAdminUser(start, count)
    },

    /**
     * @description:   // 存储当前的页码
     * @param {Number} page 当前页码
     * @return: 
     */
    setPageNum (page) {
      this.$store.commit(types.SET_ADMIN_USER_CURRENT_PAGE, page)
    },

  },
}
</script>

<style lang="scss" scoped>

</style>