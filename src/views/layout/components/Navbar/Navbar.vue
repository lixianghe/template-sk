<style lang="less" scoped>
</style>

<template>
  <div class="navbar">
    <hamburger :is-active="isActive" :toggle-click="toggle" class="hamburgerBox"/>
    <breadcrumb :breadcList="breadcList" class="breadcrumbBox"></breadcrumb>
    <div class="navBlock">
      <img src="@/assets/leftLogo/leftLogo.jpg" alt="">
      <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
        <span @click="screenfull">
          <icon :iconClass="iconClass" :iconName="iconNameO"></icon>
        </span>
      </el-tooltip>
      <select-lang class="selectLang"></select-lang>
      <el-tooltip class="item" effect="dark" content="登出" placement="bottom">
        <span @click="loginOut">
          <icon :iconClass="iconClass" :iconName="iconNameT"></icon>
        </span>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger';
import Breadcrumb from '@/components/Breadcrumb';
import screenfull from 'screenfull';
import selectLang from '@/components/selectLang';
import { loginOut } from '@/service/login/loginService';
export default {
  components: {
    Hamburger, Breadcrumb, selectLang
  },
  data () {
    return {
      isActive: false,
      breadcList: [],
      iconNameO: '#icon-quanping',
      iconClass: 'pointer',
      iconNameT: '#icon-tuichu1'
    };
  },
  watch: {
    $route () {
      this._getBread();
    }
  },
  created () {
    this._getBread();
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive;
      this.$store.dispatch('ToggleSideBar');
    },
    // 获取面包屑数组
    _getBread () {
      this.breadcList = [];
      const matchList = this.$route.matched;
      matchList.forEach(item => {
        if (item.meta.title) {
          this.breadcList.push(item.meta.title);
        }
      });
    },
    // 退出登录
    async loginOut () {
      console.log(11111);
      const res = await loginOut();
      if (res.result) {
        this._glTools.removeStore('token', true);
        this.$router.push({ path: '/login' });
      }
    },
    // 全屏事件
    screenfull () {
      if (!screenfull.enabled) { // 如果不允许进入全屏，发出不允许提示
		    this.$message({
		      message: '不支持全屏',
		      type: 'warning'
		    });
		    return false;
		    }
		  screenfull.toggle();
    }
  }
};
</script>
