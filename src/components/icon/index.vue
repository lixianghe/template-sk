/** 封装阿里巴巴icon */
<style>

</style>

<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    svgClass () {
      if (this.iconClass) {
        return 'icon ' + this.iconClass;
      } else {
        return 'icon';
      }
    }
  }
};
</script>

