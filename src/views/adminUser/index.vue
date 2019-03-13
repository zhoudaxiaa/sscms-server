<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 用户管理页面
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-02-26 09:38:03
 * @LastEditTime: 2019-03-13 21:39:43
 -->

<template>
  <div>
    <user-form
      :formData="formData"
      :formVisible="formVisible">
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
          <template slot-scope="op">
            <div>
              <i
                class="op-icon el-icon-edit"
                @click="editTable(op.$index)">
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

import { getAdminUser, getRoles } from '@/api/adminUser.js'

import { deepCopy } from '@/utils/utils'

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
      tableData: [],  // 表格数据
      
      tableTile: {  // 表格的标题和宽度，title为空，标示不显示
        id: {
          title: '',
          width: ''
        },
        name: {
          title: '昵称',
          width: ''
        },
        avatar: {
          title: '',
          width: '5'
        },
        userName: {
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
        isActive: {
          title: '是否启用',
          width: ''
        },
        introduce: {
          title: '',
          width: ''
        }

      },

      userFormData: {},  // 表单数据

      dialogFormVisible: false  // 表单是否显示
    
    }
  },
  
  methods: {
    // 页面初始化时获取数据
    async initData () {
      try {
        const data = await getAdminUser(0, 20)  // 获取第一页，20条数据

        this.tableData = data.data
      } catch (err) {
        this.$message.error(err)
      }
    },

    async editTable (i) {
      this.dialogFormVisible = false  // 因为每次都需要这个值为true，但是值不变，就不会数据响应，所以每次改变值再改回来，强制数据响应
      this.dialogFormVisible = true  // 让表单框出现

      const data = await getRoles()

      let tableData = deepCopy(this.tableData[i])  // 深拷贝数据后再修改，防止修改了原来的数据

      tableData.role = data.data // 把获取到的角色组列表覆盖原来的值
      
      console.log(tableData)

      this.userFormData = tableData
    }
  },

  computed: {
    formVisible () {
      return this.dialogFormVisible
    },

    formData () {
      return this.userFormData
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