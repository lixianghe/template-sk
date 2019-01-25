<style lang="less" scoped>
.top {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  .card {
    width: 180px;
    height: 254px;
    margin: 15px;
  }
}
</style>

<template>
  <div class="home">
    <div class="top">
      <el-card class="card" shadow="always" v-for="(item, index) in 6" :key="index">
        {{index}}
      </el-card>
    </div>
    <div class="bottom">
      
    </div>
  </div>
</template>

<script>
export default {

};
</script>


