<style lang="less" scoped>

</style>

<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
      <template v-for="(item, index) in breadcList" >
        <el-breadcrumb-item v-if="index === 0" :to="{ path: '/' }" :key="item">{{translation(item)}}</el-breadcrumb-item>
        <el-breadcrumb-item v-else :key="item">{{translation(item)}}</el-breadcrumb-item>
      </template>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { translation } from '@/js/core/utils';
export default {
  created () {
    this.$nextTick(() => {
      console.log(this.breadcList);
    });
  },
  props: {
    breadcList: {
      type: Array,
      required: true
    }
  },
  methods: {
    translation
  }
};
</script>


