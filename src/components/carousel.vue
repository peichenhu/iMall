<template>
  <!-- 轮播图 -->
  <swiper :options="swiperOption" class="carousel_swiper">
    <swiper-slide v-for="item in carouselData" :key="item.index">
       <router-link to="/product/123">
        <img :src="item.imageUrl" :alt="item.imageAlt">
       </router-link>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'
  export default {
    name: 'carrousel',
    props: ['carouselData'],
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
  }

</script>

<style lang="scss" scoped>
  @import '../assets/css/config.scss';
  .carousel_swiper {
    width: 100%;
  }

</style>
