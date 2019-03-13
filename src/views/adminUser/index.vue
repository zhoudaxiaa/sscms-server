<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户管理页面
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-02-26 09:38:03
 * @LastEditTime: 2019-03-13 15:57:39
 -->

<template>
  <div>
    <user-form
      :formData="formData">
    </user-form>

    <div class="table-wrap">

      <!-- 添加数据组件 -->
      <add-data></add-data>
      
      <!-- 数据table展示组件 -->
      <data-table
        :tableData="tableData"
        :tableTile="tableTile">

        <el-table-column
          width="100"
          label="操作">
          <template>
            <div>
              <i
                class="op-icon el-icon-edit"
                @click="editData">
              </i>
              <i class="op-icon el-icon-delete"></i>
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
import UserForm from './UserForm'
import AddData from '@/views/common/AddData'
import Pagination from '@/components/Pagination'

import { getAdminUser } from '@/api/adminUser.js'

export default {
  name: 'adminUser',
  components: {
    DataTable,
    UserForm,
    AddData,
    Pagination
  },
  data () {
    return {
      tableData: [],
      // 表格的标题和宽度
      tableTile: {
        id: {
          title: '',
          width: '10'
        },
        name: {
          title: '昵称',
          width: ''
        },
        adminUser: {
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
        enable: {
          title: '是否启用',
          width: ''
        }

      },

      formData: {
        id: '7fx9RQ6gH',
        name: '管理员',
        avatar: 'https://www.html-js.cn/upload/images/defaultlogo.png',
        userName: 'admin',
        passWord: '',
        email: '1250198256@qq.com',
        role: [
          {
            id: 'sghj340olE',
            name: 'admin'
          }
        ],
        isActive: true,
        instroduce: '超级管理员'

      }
    
    }
  },
  
  methods: {
    async initData () {
      try {
        const data = await getAdminUser(0, 20)
        console.log(data)
        this.tableData = data.data
      } catch (err) {
        this.$message.error(err)
      }
    },
    editData (e) {
      console.log(e)
    }
  },

  created() {
    this.initData() // 初始化数据
  }
}
</script>

<style lang="scss" scoped>
.pagination-wrap {
  text-align: center;
}
</style>