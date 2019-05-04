<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 文章编辑和新增
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-04-24 20:27:29
 * @LastEditTime: 2019-04-25 21:11:29
 -->
<template>
  <div class="article-wrap">
    <el-form
      label-width="120px">
      <el-form-item
        label="文档类别">
        <el-select>
          <el-option label="前端开发"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="所属专栏">
        <el-select>
          <el-option label="前端开发"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item
        label="标题">
        <el-input></el-input>
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
        <el-switch></el-switch>
      </el-form-item>

      <el-form-item
        label="文章标签">
        <el-select
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签">
          <el-option label="test"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="头像">
            
        <el-upload
          class="avatar-wrap"
          :show-file-list="false"
          :on-success="uploadAvatarSuccess"
          :before-upload="beforeAvatarUpload">

          <img
            class="avatar-img"
            v-if="formData.avatar"
            :src="formData.avatar">

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

  </div>

</template>

<script>
import { mavonEditor } from 'mavon-editor'

import 'mavon-editor/dist/css/index.css'

export default {
  name: 'ArticleForm',
  
  components: {
    mavonEditor,
  },

  data () {
    return {
      formData: {
        avatar: ''
      },
    }
  },

  methods: {
        /**
     * @description: 头像上传成功后的回调函数
     * @param {object} res 响应数据 
     * @return: 
     */
    uploadAvatarSuccess (res) {
      // 把本地上传的图片地址转化为网络地址
      // this.formData.avatar = res.data.url
    },
    
    /**
     * @description: 上传之前的回调函数
     * @param {object} 上传的文件对象（element-ui提供）
     * @return: 
     */
    beforeAvatarUpload (file) {
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
  }
}
</script>

<style lang="scss" scoped>
.article-wrap {
  padding: 0 20px;
}

.avatar-wrap {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  cursor: pointer;

  .avatar-img {
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