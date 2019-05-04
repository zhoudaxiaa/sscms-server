<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 标签切换
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-01 09:18:12
 * @LastEditTime: 2019-04-24 23:35:02
 -->

<template>
  <div class="tag-view-wrap">
    <scroll-pane>
      <router-link 
        class="tag-view-item"
        v-for="tag in tagList"
        :class="{active: tag.path === $route.path}"
        :key="tag.name"
        :to="tag.path">
          {{tag.name}}
        <span
          class="el-icon-close"
          @click.prevent="deleteTag(tag.path)">
        </span>
      </router-link>
    </scroll-pane>
  </div>
</template>

<script>
import ScrollPane from '@/components/ScrollPane'
import * as types from '@/store/mutation-types'

export default {
  name: 'TagView',
  components: {
    ScrollPane
  },

  computed: {
    tagList () {
      return this.$store.state.app.tagView
    }
  },

  methods: {
    
    // 添加新的tag
    addTags (route) {
      this.$store.commit(types.ADD_TAG_VIEW, {
        name: route.meta.title,
        path: route.path,
      })
    },

    // 删除tag和关闭页面
    deleteTag (path) {

      let tagView, // 删除tag页面后的tagview
          lastTagView // 跳转的tag 标签的最后一个页面

      // 删除标签
      this.$store.commit(types.DELETE_TAG_VIEW, path)

      tagView = this.tagList

      lastTagView = tagView[tagView.length-1]

      // 跳转到最后一个标签页面
      this.$router.push({path: lastTagView.path})
    }
  },

  watch: {
    $route (to, from) {

      let hasTag = false;  // 跳转的tag 是否存在

      hasTag = this.tagList.some( (tag) => {
        return tag.path === to.path
      })

      if (!hasTag) {
        // 不存在就改变旧标签的激活状态，并添加新标签
        this.addTags(to)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-view-wrap {
  height: 38px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
}

.tag-view-item {
  display: inline-block;
  position: relative;
  height: 26px;
  line-height: 26px;
  border: 1px solid #d8dce5;
  color: #495060;
  background: #fff;
  padding: 0 8px;
  font-size: 12px;
  margin-left: 5px;
  margin-top: 4px;

  .el-icon-close {
    padding-left: 5px;
  }

  &:first-of-type {
    margin-left: 15px;
  }
  
}
.active {
  background-color: #409eff;
  color: #fff;
  border-color: #409eff;

  &:before {
    content: "";
    background: #fff;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: relative;
    margin-right: 2px;
  }
}
</style>