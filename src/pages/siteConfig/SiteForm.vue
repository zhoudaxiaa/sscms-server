<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 站点配置表单
 * @Version: 1.0
 * @Date: 2019-06-08 11:09:35
 * @LastEditors: zhoudaxiaa
 * @LastEditTime: 2019-06-08 20:40:49
 -->
<template>
  <div class="article-wrap">
    <el-form
      ref="form"
      :model="formData"
      label-width="120px">

      <el-form-item
        label="标题">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>

      <el-form-item label="LOGO">
            
        <el-upload
          class="cover-wrap"
          :show-file-list="false"
          :action="apiPath.uploadFile"
          :on-success="uploadImgSuccess"
          :before-upload="beforeImgUpload">

          <img
            class="cover-img"
            v-if="formData.logo"
            :src="formData.logo">

          <i
            v-else
            class="el-icon-plus">
          </i>

        </el-upload>
      </el-form-item>

      <el-form-item label="站点地址">
        <el-input v-model="formData.site_url"></el-input>
      </el-form-item>

      <el-form-item label="seo标题">
        <el-input v-model="formData.seo_title"></el-input>
      </el-form-item>

      <el-form-item label="seo关键词">
        <el-input v-model="formData.seo_keyword"></el-input>
      </el-form-item>

      <el-form-item label="seo描述">
        <el-input v-model="formData.seo_discription"></el-input>
      </el-form-item>

      <el-form-item label="版权信息">
        <el-input v-model="formData.site_copyright"></el-input>
      </el-form-item>

      <el-form-item label="icp备案号">
        <el-input v-model="formData.site_icp"></el-input>
      </el-form-item>

      <el-form-item label="统计代码">
        <el-input
          type="textarea"
          v-model="formData.site_code">
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          @click="handleUpdateSubmit"
          type="primary">
          更新
        </el-button>
      </el-form-item>

    </el-form>

  </div>

</template>

<script>
import { getSiteConfig, updateSiteConfig } from '@/api/siteConfig'

import apiPath from '@/api/apiPath'

export default {
  name: 'ArticleForm',

  data () {
    return {
      apiPath,  // 上传图片要用到的地址

      formData: {},
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
       const configData = await getSiteConfig()

      this.formData = configData

    },

    /**
     * @description: 头像上传成功后的回调函数
     * @param {object} res 响应数据 
     * @return: 
     */
    uploadImgSuccess (res) {
      // 上传成功，返回图片地址，存到表单
      this.formData.logo = res
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
          this.$message.error('上传图片只能是 JPG 格式!');
          return false
        }
        if (isOverZise) {
          this.$message.error('上传图片大小不能超过 300KB!');
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
      return updateSiteConfig(formData, id)
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
  width: 202px;
  height: 82px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;

  .cover-img {
    width: 100%;
    height: 100%;
  }

  .el-icon-plus {
    width: 200px;
    height: 80px;
    font-size: 36px;
    border: 1px dashed #d9d9d9;
    line-height: 80px;

    &:hover {
      border-color: #409EFF;
    }
  }
}

</style>