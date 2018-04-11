<template>
  <div id="index">
    <!-- 搜索消息栏组件 -->
    <topBar></topBar>
    <!-- 轮播图组件 -->
    <Carousel :CarouselData="CarouselData"></Carousel>
    <!-- B型组件 -->
    <LayoutB :layoutBData="layoutBData"></LayoutB>
    <!-- 双列自增布局 -->
    <LayoutTrain :LayoutTrainData="LayoutTrainData"></LayoutTrain>
    <!-- 全局组件 -->
    <v-navigation></v-navigation>
  </div>
</template>
<script>
  import {
    getIndexData
  } from "../api/index"

  import TopBar from '../components/topBar'
  import Carousel from '../components/carousel'
  import LayoutB from '../components/layoutB'
  import LayoutTrain from '../components/layoutTrain'

  export default {
    name: 'index',
    data: function () {
      return {
        CarouselData: null, // 焦点图数据
        layoutBData: null, // B型容器数据
        LayoutTrainData: null // 火车容器数据
      }
    },
    components: {
      TopBar,
      Carousel,
      LayoutB,
      LayoutTrain,
    },

    created() {
      this.init();
    },

    methods: {
      init: function () {
        let _this = this;
        getIndexData() // 传参数会导致Mock 报错，所以暂时为空
          .then(function (response) {
            _this.CarouselData = response.data.carousel;
            _this.layoutBData = response.data.layoutB;
            _this.LayoutTrainData = response.data.layoutTrain
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }

</script>
<style lang="scss" scoped>
  #index {
    padding: 50px 0;
  }

</style>
