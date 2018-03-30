<template>
    <!-- 轮播图 -->
    <el-carousel :interval="5000" arrow="always" class="_carousel">
      <el-carousel-item v-for="item in 4" :key="item" class="carousel_item">
        {{ item }}
      </el-carousel-item>
    </el-carousel>
</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/config.scss';

  ._carousel .carousel_item:nth-child(odd) {
    background-color: $cyan;
  }

  ._carousel .carousel_item:nth-child(even) {
    background-color: $peach;
  }
</style>
