<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户管理页面
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-02-26 09:38:03
 * @LastEditTime: 2019-03-14 21:42:54
 -->

<template>
  <div>
    <user-form class="form-wrap"></user-form>

    <div class="table-wrap">

      <!-- 公共操作 -->
      <div class="public-op-wrap">

        <!-- 添加数据 -->
        <addTable :addTable="handleAddTable"></addTable>

        <!-- 删除数据 -->
        <deleteTable :deleteTable="handleDeleteTable"></deleteTable>
        
      </div>
      
      <!-- 数据table展示组件 -->
      <data-table
        :tableData="tableData | filterTableData(filterData)"
        :tableTile="tableTile">

        <el-table-column
          width="100"
          label="操作">
          <template slot-scope="op">
            <div>
              
              <el-button
                size="small"
                @click="editTable(op.$index)"
                type="primary"
                icon="el-icon-edit"
                circle>
              </el-button>

              <el-button
                size="small"
                type="danger"
                icon="el-icon-delete"
                circle>
              </el-button>

            </div>
          </template>
        </el-table-column>

      </data-table>
      
      <!-- 分页组件 -->
      <pagination class="pagination-wrap"></pagination>
      
    </div>
  </div>
</template>

<script>
import DataTable from '@/views/common/DataTable'
import AddTable from '@/views/common/AddTable'
import DeleteTable from '@/views/common/DeleteTable'
import UserForm from './UserForm'
import Pagination from '@/components/Pagination'

import { getAdminUser } from '@/api/adminUser.js'

import { filterTableData } from '@/filter/dataFilter'

import * as types from '@/store/mutation-types'

export default {
  name: 'adminUser',
  components: {
    DataTable,
    AddTable,
    DeleteTable,
    UserForm,
    Pagination
  },
  data () {
    return {
      tableData: [],  // 表格数据(对象数组)

      filterData: 'name,user_name,role,email,is_active',  // 需要数据的字段名的字符串组合
      
      tableTile: {  // 表格的标题和宽度，title为空，标示不显示
        name: {
          title: '昵称',
          width: ''
        },
        user_name: {
          title: '帐号名',
          width: ''
        },
        role: {
          title: '角色组',
          width: ''
        },
        email: {
          title: '邮箱',
          width: ''
        },
        is_active: {
          title: '是否启用',
          width: ''
        },

      },
    
    }
  },

  filters: {
    filterTableData
  },
  
  methods: {
    /**
     * @description: 页面初始化时获取数据
     * @param {type} 
     * @return: 
     */
    async initData () {
      try {
        const data = await getAdminUser(0, 20)  // 获取第一页，20条数据

        this.tableData = data.data
      } catch (err) {
        this.$message.error(err)
      }
    },

    /**
     * @description: 切换表单显示状态和切换表单是不是修改操作，多次使用，提取出来
     * @param {type} 
     * @return: 
     */
    toggleOperation () {
      this.$store.commit(types.TOGGLE_DIALOG_FORM_VISIBLE)  // 切换表单显示状态
      this.$store.commit(types.CHANGE_IS_FORM_EDIT_OP)  // 切换表单是不是修改操作
    },

    /**
     * @description: 修改表格
     * @param {number} i 操作的表格索引 
     * @return: 
     */
    editTable (i) {
      this.toggleOperation()

      this.$store.commit(types.SET_ADMIN_USER_FORM, this.tableData[i])  // 存储表单数据

    },

    /**
     * @description: 添加表格
     * @param {type} 
     * @return: 
     */
    handleAddTable () {
      this.toggleOperation()
      
      // 添加表格时，传入初始的表单项
      this.$store.commit(types.SET_ADMIN_USER_FORM, {
        name: '',
        avatar: '',
        user_name: '',
        pass_word: '',
        email: '',
        role_id: '',
        is_active: true,
        instroduce: '',
      })
    },

    /**
     * @description: 删除表格
     * @param {type} 
     * @return: 
     */    
    handleDeleteTable () {

    },

  },

  created() {
    this.initData() // 初始化数据

    this.$store.dispatch('getRoles')  // 分发获取并存储角色组列表
  },
}
</script>

<style lang="scss" scoped>

</style>