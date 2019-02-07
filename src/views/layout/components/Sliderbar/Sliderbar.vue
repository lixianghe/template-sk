<style lang="less" scoped>

</style>

<template>
  <div :class="sliderbarClass">
    <!-- 左侧栏头像 -->
    <div class="leftLogo">
      <img src="@/assets/leftLogo/leftLogo.jpg" alt="">
    </div>
    <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#304156"
    :collapse="collapse"
    text-color="#fff"
    :collapse-transition="false"
    active-text-color="#409eff"
    >
    <!-- 左侧菜单item -->
    <menuItem :item="item" :base-path="item.path" v-for="(item, index) in routes" :key="index"></menuItem>
  </el-menu>
  </div>
</template>

<script>
import menuItem from './menuItem';
import { mapGetters } from 'vuex';
export default {
  components: { menuItem },
  data () {
    return {

    };
  },
  computed: {
    ...mapGetters([
      'sliderbar'
    ]),
    routes () {
      return this.$router.options.routes;
    },
    collapse () {
      return !this.sliderbar.opened;
    },
    // 左边菜单的缩放
    sliderbarClass () {
      return {
        sliderbar: true,
        hideSilderBar: !this.sliderbar.opened
      };
    }
  },
  methods: {
    handleOpen () {

    },
    handleClose () {

    }
  }
};
</script>