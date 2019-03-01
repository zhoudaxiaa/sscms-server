<!--
 * @Author: zhoudaxiaa
 * @Github: https://
 * @Website: https://
 * @Description: 标签切换
 * @Version: 1.0
 * @LastEditors: zhoudaxiaa
 * @Date: 2019-03-01 09:18:12
 * @LastEditTime: 2019-03-01 16:56:36
 -->

<template>
  <div>
    <scroll-pane>
      <router-link 
        class="tag-view-item"
        v-for="tag in tagList"
        :key="tag.name"
        :to="tag.path">
          {{tag.name}}
        <span
          class="el-icon-close">
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
  data () {
    return {
      tagList: []
    }
  },
  compoents: {
    ScrollPane
  },
  props: {
    changeView: {
      type: Function,
      default: () => {}
    }
  },

  methods: {
    createdTags () {
      this.tagList = this.$store.getters.tagView.filter( (tag) => {
        return tag.name
      })
    }
  },

  watch: {
    $route (to, from) {
      this.tagList.forEach( (tag) => {
        if (tag.path === to.path) {
          // this.$store.commit(types.TOGGLE_TAG_VIEW_ACTIVE)
        } else {
          this.$store.commit(types.ADD_TAG_VIEW, {
            name: to.meta.title,
            path: to.path,
            active: true
          })
        }
      })
    }
  },

  created () {
    this.createdTags()
  }
}
</script>

<style scoped>

</style>