<template>
    <router-link :to="path"><slot/></router-link>
</template>

<script>
export default {
  name: 'viewLink',
  props: {
    path: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="less" scoped>

</style>


