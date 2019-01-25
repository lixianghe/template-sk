<style lang="less" scoped>

</style>

<template>
  <div class="page">
    <sliderbar></sliderbar>
    <div class="box">
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
export default {
  components: { Navbar, Sliderbar },
  data () {
    return {

    };
  }
};
</script>

