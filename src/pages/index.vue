<template>
  <div id="index">

    <!-- 搜索消息栏组件 -->
    <topBar></topBar>
    <!-- 轮播图组件 -->
    <Carousel :CarouselData="CarouselData"></Carousel>
    <!-- B型组件 -->
    <LayoutB :layoutBData="layoutBData"></LayoutB>
    <!-- 行内列表组件 -->
    <InlineBox :InlineBoxData="InlineBoxData" :InlineBoxCount=4></InlineBox>
    <InlineBox :InlineBoxData="InlineBoxData" :InlineBoxCount=5></InlineBox>
    <!-- 双列自增布局 -->
    <LayoutTrain :LayoutTrainData="LayoutTrainData"></LayoutTrain>
  </div>
</template>
<script>
  import Axios from "axios"
  import TopBar from '../components/topBar'
  import Carousel from '../components/carousel'
  import InlineBox from '../components/InlineBox'
  import LayoutB from '../components/layoutB'
  import LayoutTrain from '../components/layoutTrain'

  export default {

    name: 'index',
    data: function () {
      return {
        CarouselData: null,
        InlineBoxData: null,
        layoutBData: null,
        LayoutTrainData:null
      }
    },
    components: {
      TopBar,
      Carousel,
      InlineBox,
      LayoutB,
      LayoutTrain,
    },

    created() {
      this.getIndexCarouselData();
      this.getIndexInlineBoxData();
      this.getIndexLayoutBData();
      this.getIndexLayoutTrainData();
    },

    methods: {
        
      getIndexLayoutTrainData: function () {
        let index = this;
        // localhost-mock or 使用在线版easy-mock
        Axios.get("/getIndexLayoutTrainData", {
            cookie: "getIndexLayoutTrainData"
          }) // localhost-mock or 使用在线版easy-mock
          .then(function (response) {
            index.LayoutTrainData = response.data.list;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      getIndexLayoutBData: function () {
        let index = this;
        // localhost-mock or 使用在线版easy-mock
        Axios.get("/getIndexLayoutBData", {
            cookie: "getIndexLayoutBData"
          }) // localhost-mock or 使用在线版easy-mock
          .then(function (response) {
            index.layoutBData = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      getIndexInlineBoxData: function () {
        let index = this;
        // localhost-mock or 使用在线版easy-mock
        Axios.get("/getIndexInlineBoxData", {
            cookie: "getIndexInlineBoxData"
          }) // localhost-mock or 使用在线版easy-mock
          .then(function (response) {
            index.InlineBoxData = response.data.list;
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      getIndexCarouselData: function () {
        let index = this;
        // localhost-mock or 使用在线版easy-mock
        Axios.get("/getIndexCarouselData", {
            cookie: "getIndexCarouselData"
          }) // localhost-mock or 使用在线版easy-mock
          .then(function (response) {
            index.CarouselData = response.data;
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
    margin-bottom: 50px;
  }

</style>
