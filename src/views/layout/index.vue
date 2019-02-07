<style lang="less" scoped>

</style>

<template>
  <div class="page">
    <sliderbar></sliderbar>
    <div id="box" :class="boxClass">
      <navbar></navbar>
      <div class="app-main">
        <transition name="app-main" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar';
import Sliderbar from './components/Sliderbar/Sliderbar';
import { mapGetters } from 'vuex';
export default {
  components: { Navbar, Sliderbar },
  computed: {
    ...mapGetters(['sliderbar']),
    boxClass () {
      return {
        box: true,
        zoomOut: !this.sliderbar.opened
      };
    }
  },
  data () {
    return {

    };
  }
};
</script>

