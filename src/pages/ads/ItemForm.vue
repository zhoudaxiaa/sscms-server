<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 广告图片表单
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-27 17:14:26
 * @LastEditTime: 2019-06-09 12:49:41
 -->

<template>
  <el-dialog
    title="填写图片信息"
    :visible.sync="formVisible"
    :before-close="closeForm">
      <el-form
        :model="formData"
        ref="form"
        label-width="80px">

        <el-form-item
          label="图片介绍"
          prop="introduce">

          <el-input v-model="formData.introduce"></el-input>

        </el-form-item>

        <el-form-item label="图片">
          
          <el-upload
            class="img-wrap"
            :show-file-list="false"
            :action="apiPath.uploadFile"
            :on-success="uploadImgSuccess"
            :before-upload="beforeImgUpload">

            <img
              class="ads-img"
              v-if="formData.img_url"
              :src="formData.img_url">

            <i
              v-else
              class="el-icon-plus">
            </i>

          </el-upload>
        </el-form-item>

        <el-form-item
          label="链接"
          prop="link">

          <el-input v-model="formData.link"></el-input>

        </el-form-item>

        <el-form-item label="是否显示">
          <el-switch v-model="formData.is_show"></el-switch>
        </el-form-item>

        <el-form-item
          label="排序">
          <el-input-number v-model="formData.sort"></el-input-number>
        </el-form-item>

        <el-form-item>

          <el-button
            @click="handleUpdateSubmit"
            v-if="formOp === 'edit'"
            type="primary">
            更新
          </el-button>

          <el-button
            @click="handleAddSubmit"
            v-else
            type="primary">
            添加
          </el-button>
          
          <el-button @click="closeForm">取消</el-button>

        </el-form-item>
         
      </el-form>
  </el-dialog>
</template>

<script>

import apiPath from '@/api/apiPath'

import { updateAds, addAds } from '@/api/ads'

export default {
  name: 'ItemForm',

  props: {
    formData: {  // 表单数据
      type: Object,
      default: () => {},
    },

    formOp: {  // 当前表单操作，新增还是修改
      type: String,
      default: '',
    },

    categoryId: {  // 当前广告分类id
      type: String,
      default: ''
    },

    formVisible: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      apiPath,  // 上传图片要用到的url地址

    }
  },

  methods: {

    /**
     * @description: 触发父级初始化数据（更新）
     * @param {type} 
     * @return: 
     */
    initData () {
      this.$emit('formOperation', {op: 'initData'})
    },

    /**
     * @description: 头像上传成功后的回调函数
     * @param {object} res 响应数据 
     * @return: 
     */
    uploadImgSuccess (res) {
      // 上传成功，返回图片地址，存到表单
      this.formData.img_url = res
    },
    
    /**
     * @description: 上传之前的回调函数
     * @param {object} 上传的文件对象（element-ui提供）
     * @return: 
     */
    beforeImgUpload (file) {
      const isPass = 'image/jpeg,image/png'.indexOf(file.type) > -1
      const isOverZise = file.size >= 200 * 1024

        if (!isPass) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
          return false
        }
        if (isOverZise) {
          this.$message.error('上传头像图片大小不能超过 300KB!');
          return false
        }
    },
    
    /**
     * @description: 表单数据更新操作
     * @param {Object} 表单数据对象 
     * @param {String} 操作数据id
     * @return: Promise axios返回的promise对象
     */
    updateData (formData, id) {
      return updateAds(formData, id)
    },

    /**
     * @description: 表单数据增加操作
     * @param {Object} 表单数据对象 
     * @return: Promise axios返回的promise对象
     */
    addData (formData) {
      return addAds(formData)
    },

    /**
     * @description: 表单更新数据操作
     * @param {type} 
     * @return: 
     */
    async handleUpdateSubmit () {
      
      this.$refs.form.validate(async (valid) => {

        if (valid) {

          await this.updateData (this.formData, this.opId)

          this.$message({
            type: 'success',
          message: '更新成功！'
          })

          this.initData()  // 更新表格

          this.closeForm()

        } else {
          return false
        }
      })

    },

    /**
     * @description: 表单新增数据操作
     * @param {type} 
     * @return: 
     */
    async handleAddSubmit () {
      this.formData.category_id = this.categoryId

      this.$refs.form.validate(async (valid) => {

        if (valid) {
          const data = await this.addData (this.formData)

          this.$message({
            type: 'success',
            message: '添加成功！'
          })

          // 图片添加成功后触发父级事件，重新渲染图片列表
          this.$emit('formOperation', {op: 'addImg', data: data})

          this.closeForm()

        } else {
          return false
        }
      })
      
    },

    /**
     * @description: 关闭表单框之前把表单的显示状态切换下
     * @param {type} 
     * @return: 
     */  
    closeForm () {
      this.$emit('changeFormVisible')
    },

  }
}
</script>

<style lang="scss" scoped>
.img-wrap {
  width: 102px;
  height: 72px;

  overflow: hidden;
  text-align: center;
  cursor: pointer;

  .ads-img {
    width: 100%;
    height: 100%;
  }

  .el-icon-plus {
    width: 100px;
    height: 70px;
    font-size: 36px;
    border: 1px dashed #d9d9d9;
    line-height: 80px;

    &:hover {
      border-color: #409EFF;
    }
  }
}
</style>