<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 文章编辑和新增
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-24 20:27:29
 * @LastEditTime: 2019-05-07 23:03:16
 -->
<template>
  <div class="article-wrap">
    <el-form
      ref="form"
      :model="formData"
      label-width="120px">

      <el-form-item
        label="文档类别">
        <el-select
          multiple
          v-model="formData.category_id"
          placeholder="请选择文章分类">

          <el-option
            v-for="data in category"
            :key="data.id"
            :label="data.name"
            :value="data.id">
          </el-option>

        </el-select>
      </el-form-item>

      <el-form-item
        label="所属专栏">
        <el-select
          multiple
          v-model="formData.column_id"
          placeholder="请选择专栏">

          <el-option
            v-for="data in column"
            :key="data.id"
            :label="data.name"
            :value="data.id">
          </el-option>

        </el-select>
      </el-form-item>

      <el-form-item
        label="标题">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>

      <el-form-item
        label="简短标题">
        <el-input></el-input>
      </el-form-item>

      <el-form-item
        label="来源">
        <el-radio label="原创"></el-radio>
        <el-radio label="转载"></el-radio>
      </el-form-item>

      <el-form-item
        label="显示">
        <el-switch v-model="formData.is_show"></el-switch>
      </el-form-item>

      <el-form-item
        label="文章标签">
        <el-select
          multiple
          filterable
          allow-create
          default-first-option
          v-model="formData.tag_id"
          placeholder="请选择文章标签">

          <el-option
            v-for="data in tag"
            :key="data.id"
            :label="data.name"
            :value="data.id">
          </el-option>

        </el-select>
      </el-form-item>

      <el-form-item label="封面">
            
        <el-upload
          class="cover-wrap"
          :show-file-list="false"
          :action="apiPath.uploadFile"
          :on-success="uploadImgSuccess"
          :before-upload="beforeImgUpload">

          <img
            class="cover-img"
            v-if="formData.cover_img"
            :src="formData.cover_img">

          <i
            v-else
            class="el-icon-plus">
          </i>

        </el-upload>
      </el-form-item>

      <el-form-item label="内容摘要">
        <el-input></el-input>
      </el-form-item>

    </el-form>

    <mavon-editor class="mkd-wrap"></mavon-editor>

    <el-button
      @click="handleUpdateSubmit"
      v-if="$route.params.id"
      type="primary">
      更新
    </el-button>

    <el-button
      @click="handleAddSubmit"
      v-else
      type="primary">
      添加
    </el-button>

  </div>

</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import { getOneArticle, addArticle, updateArticle } from '@/api/article'
import { getAllCategory } from '@/api/category'
import { getAllColumn } from '@/api/column'
import { getAllTag } from '@/api/tag'

import apiPath from '@/api/apiPath'


export default {
  name: 'ArticleForm',
  
  components: {
    mavonEditor,
  },

  data () {
    return {
      apiPath,  // 上传图片要用到的地址

      id: this.$route.params.id,

      initFormData: {},

      formData: {},

      category: [],

      column: [],

      tag: [],
    }
  },

  created () {
    this.initData()
  },

  methods: {
    /**
     * @description: 初始化数据
     * @param {type} 
     * @return: 
     */    
    async initData () {
      let articleData
      let categoryData
      let columnData
      let tagData

      categoryData = getAllCategory()
      columnData = getAllColumn()
      tagData = getAllTag()

      categoryData = await categoryData
      columnData = await columnData
      tagData = await tagData

      this.category = categoryData
      this.column = columnData
      this.tag = tagData

      if (this.id) {
        articleData = await getOneArticle(this.id)

        articleData && (this.formData = articleData)
      } else {
        this.formData = this.initFormData
      }


    },

    /**
     * @description: 头像上传成功后的回调函数
     * @param {object} res 响应数据 
     * @return: 
     */
    uploadImgSuccess (res) {
      // 上传成功，返回图片地址，存到表单
      this.formData.cover_img = res
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
      return updateArticle(formData, id)
    },

    /**
     * @description: 表单数据增加操作
     * @param {Object} 表单数据对象 
     * @return: Promise axios返回的promise对象
     */
    addData (formData) {
      return addArticle(formData)
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

          this.initData()  // 更新表格

          this.$message({
          type: 'success',
          message: '更新成功！'
          })

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

      this.$refs.form.validate(async (valid) => {

        if (valid) {
          await this.addData (this.formData)

          this.initData()  // 更新表格

          this.$message({
            type: 'success',
            message: '添加成功！'
          })

          this.closeForm()

        } else {
          return false
        }
      })
      
    },

  }
}
</script>

<style lang="scss" scoped>

.cover-wrap {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  cursor: pointer;

  .cover-img {
    width: 100%;
    height: 100%;
  }

  .el-icon-plus {
    width: 80px;
    height: 80px;
    font-size: 36px;
    border: 1px dashed #d9d9d9;
    border-radius: 50%;
    line-height: 80px;

    &:hover {
      border-color: #409EFF;
    }
  }
}

.mkd-wrap {
  margin-top: 40px;
}
</style>