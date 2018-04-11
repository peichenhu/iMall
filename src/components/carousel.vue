<template>
  <!-- 轮播图 -->
  <swiper :options="swiperOption" class="carousel_swiper" v-if="CarouselData">

    <swiper-slide v-for="item in CarouselData" :key="item.index">

      <router-link :to="{ name: 'product', params: { id: item.products_id }}" v-if="item.products_id">
        <img :src="item.image_url" :alt="item.title">
      </router-link>

      <img :src="item.image_url" :alt="item.title" v-else>

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
    props: ['CarouselData'],
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
