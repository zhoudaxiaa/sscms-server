<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 资源管理
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-25 21:23:11
 * @LastEditTime: 2019-06-08 14:44:53
 -->

<template>
  <div>

    <!-- 资源表单 -->
    <resource-form
      class="form-wrap"
      @changeFormVisible="toggleFormVisible"
      @formOperation="formOperation"
      :formData="formData"
      :opId="opId"
      :formOp="formOp"
      :formVisible="formVisible">
    </resource-form>

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

      <resource-tree
        @formOperation="formOperation"
        @selectionOperation="selectionOperation"
        :tableData="resourceTreeData">
      </resource-tree>
      
    </div>
  </div>
</template>

<script>
import AddDataBtn from '@/pages/common/AddDataBtn'
import DeleteDataBtn from '@/pages/common/DeleteDataBtn'

import ResourceTree from './ResourceTree'
import ResourceForm from './ResourceForm'

import { getAllResource, deleteResource } from '@/api/resource'

import { buildResourceTree } from '@/utils/utils'

import * as types from '@/store/mutation-types'

export default {
  name: 'adminResource',
  
  components: {
    AddDataBtn,
    DeleteDataBtn,
    ResourceTree,
    ResourceForm,
  },

  data () {
    return {

      initFormData: {  // 初始表单
        name: '',
        type: '',
        icon: 'component',
        route_path: '',
        component_path: '',
        is_active: true,
        introduce: '',
        sort: 0
      },

      resourceData: {},

      deleteId: '',  //要删除的id

      opId: '',  // 当前操作数据id

      deleteIdList:'',  // 要删除的id 字符串组合
      
      formData: {},  // 表单数据

      formOp: '',  // 表单操作名

      formVisible: false,  // 表单显示状态

      resourceTreeData: [],  // 资源树

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

      const resourceData = await getAllResource()  // 获取所有资源

      // 请求成功
      if (resourceData) {
        let temp =  {}
        resourceData.forEach( (v) => {
          temp[v.id] = v
        })

        this.resourceData = temp

        this.resourceTreeData  = buildResourceTree(resourceData)
      }

    },

    /**
     * @description: 监听表单操作，子组件触发
     * @param {String} op 触发的表单操作名称
     * @param {Number} i 当前操作的表格列的索引
     * @param {String} id 当前操作的id
     * @return: 
     */
    formOperation ({op, i, id}) {
      
      this.formOp = op  // 表单操作名称（新增还是更新）

      switch (op) {
        case 'initData': this.initData(); break
        case 'addDataOp': this.addDataOp(id); break  // 表单新增操作
        case 'editDataOp': this.editDataOp(id); break // 表单修改操作
        case 'deleteDataOp': this.deleteDataOp(this.deleteId); break  // 表单删除操作
        case 'deleteMultDataOp': this.deleteDataOp(this.deleteIdList); break  // 表单多选删除操作
      }
    },

    /**
     * @description: 监听表格多选，子组件触发
     * @param {String} 子组件选中的id 或者id组合字符串(逗号隔开)
     * @return: 
     */
    selectionOperation (ids) {

      let idList = ids.split(',')

      if (idList.length > 2) {  // 多项删除
        this.deleteIdList = ids
      } else {
        this.deleteId = ids
        this.deleteIdList = ids
      }

    },

    /**
     * @description: // 切换表单显示状态
     * @return: 
     */
    toggleFormVisible () {
      this.formVisible = !this.formVisible
    },

    /**
     * @description: 表单新增操作
     * @param {String} pid 父级id
     * @return: 
     */    
    addDataOp (pid) {
      this.toggleFormVisible()
      this.formOp = 'add'
      
      this.initFormData.pid = pid
      this.formData = this.initFormData
    },

    /**
     * @description: 表单修改操作
     * @param {String} 操作的id 
     * @return: 
     */    
    async editDataOp (id) {

      this.formOp = 'edit'
      this.opId = id

      this.formData = this.resourceData[id]
      
      this.toggleFormVisible()
    },

    /**
     * @description: 删除表格
     * @param {String} idList 操作的数据的id，单个或多个id组成的字符串
     * @return: 
     */
    deleteDataOp (idList) {

      // id 不能为空
      if (idList) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          return this.deleteData(idList)

        }).then((result) => {
          this.initData()  // 删除成功，刷新数据

          this.$message({
            type: 'success',
            message: '删除成功！'
          })
        }).catch ((err) => {
          this.$message({
            type: 'error',
            message: '删除失败！'
          })
        })
      } else {
        this.$message({
          type: 'warning',
          message: '请至少选择一项删除！'
        })
      }

    },

    /**
     * @description: 删除数据操作
     * @param {String} idList 操作的数据的id，单个或多个id组成的字符串
     * @return: 
     */
    deleteData (idList) {
      return deleteResource(idList)
    },

    /**
     * @description: 当前页面改变时调用，获取数据
     * @param {Number} page 当前页码 
     * @return: 
     */
    async pageChange (page) {
      let count = 10

      this.setPageNum(page)

      const data = await this.getDataOp(page*count, count)  // 从第几条开始获取，10条数据

      if (data) this.tableData = data.list  // 数据数组
        
    },

    /**
     * @description:   // 存储当前的页码
     * @param {Number} page 当前页码
     * @return: 
     */
    setPageNum (page) {
      this.$store.commit(types.SET_ARTICLE_CURRENT_PAGE, page)
    },

  }
}
</script>

<style lang="scss" scoped>

</style>