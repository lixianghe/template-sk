<style lang="less" scoped>
</style>

<template>
  <div>
  <!-- 如果没有下级菜单 -->
  <template  v-if="item.hidden && item.children">
    <viewLink :path="resolvePath(child.path)" v-for="(child, index) in item.children" :key="index">
      <el-menu-item :index="resolvePath(child.path)">
        <i :class="child.meta.icon"></i>
        <span slot="title">{{translation(child.meta.title)}}</span>
      </el-menu-item>
    </viewLink>
  </template>
  <!-- 如果有下级菜单 -->
  <el-submenu v-else-if="!item.hidden && item.children" :index="resolvePath(item.path)">
    <template v-if="item.meta" slot="title">
      <i :class="item.meta.icon"></i>
      <span>{{translation(item.meta.title)}}</span>
    </template>
    <!-- 这里使用递归写嵌套的菜单（如果 item 下面还有 children 就走递归，如果没有就直接走 el-menu-item） -->
    <template v-for="(child, index) in item.children">
      <menuItem :item="child" v-if="child.children && child.children.length>0"></menuItem>
      <!-- link 为路由跳转或者a跳转的组件 -->
      <viewLink v-else :path="resolvePath(child.path)">
        <el-menu-item :index="resolvePath(child.path)">{{translation(child.meta.title)}}</el-menu-item>
      </viewLink>
    </template>
  </el-submenu>
  <!-- 如果不在左侧菜单展示 -->
  <template v-else>

  </template>
  </div>
</template>

<script>
import path from 'path';
import { translation, isExternal } from '@/js/core/utils';
import viewLink from './link';
export default {
  name: 'menuItem',
  components: { viewLink },
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      required: true
    }
  },
  computed: {

  },
  methods: {
    resolvePath (routePath) {
      if (this.isExternalLink(routePath)) {
        return routePath;
      }
      // 返回当前路径
      return path.resolve(this.basePath, routePath);
    },
    isExternalLink (routePath) {
      return isExternal(routePath);
    },
    translation
  }
};
</script>


