<style lang="less" scoped>
</style>

<template>
  <el-dropdown @command="handleCommand" trigger="click">
    <span>
      <icon :iconClass="pointer" :iconName="iconName"></icon>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="lang === 'zh'" command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="lang === 'en'" command="en">英文</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  data () {
    return {
      pointer: 'pointer',
      iconName: '#icon-yuyan1'
    };
  },
  computed: {
    lang () {
      return this.$store.getters.lang;
    }
  },
  methods: {
    handleCommand (e) {
      this.$store.dispatch('ToggleLang');
      this.$i18n.locale = this.lang;
      if (this.lang === 'zh') {
        this.$message.success({ message: '切换语言成功' });
      } else {
        this.$message.success({ message: 'Switch language successfully' });
      }
    }
  }
};
</script>

