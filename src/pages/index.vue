<template>
  <div id="index">

    <!-- 搜索消息栏组件 -->
    <topBar></topBar>
    <!-- 轮播图组件 -->
    <carousel :carouselData="carouselData"></carousel>
    <!-- 行内列表组件 -->
    <InlineList :itemData="itemData4" :lineItemCount=4></InlineList>
    <InlineList :itemData="itemData5" :lineItemCount=5></InlineList>
    <LayoutB :layoutData="layoutData"></LayoutB>
    <LayoutTrain :trainData="trainData"></LayoutTrain>
  </div>
</template>
<script>
  import TopBar from '../components/topBar'
  import Carousel from '../components/carousel'
  import InlineList from '../components/inlineList'
  import LayoutB from '../components/layoutB'
  import LayoutTrain from '../components/layoutTrain'
  import Clover4 from '../components/clover4'
  import Column3 from '../components/column3'

  
  const DefaultIMg = 'https://git.io/vxPwn';
  const DefaultHalfIMg = 'https://git.io/vxPVy';

  const layoutDataExample = {
    image1: {
      name: 'name',
      info: 'info',
      imageUrl: DefaultIMg,
      imageAlt: 'default.jpg',
    },
    image2:  {
      name: 'name',
      info: 'info',
      imageUrl: DefaultHalfIMg,
      imageAlt: 'default.jpg',
    },
    image3:  {
      name: 'name',
      info: 'info',
      imageUrl: DefaultHalfIMg,
      imageAlt: 'default.jpg',
    },
  }

  const carouselDataExample = {
    name: 'name',
    info: 'info',
    imageUrl: DefaultHalfIMg,
    imageAlt: 'default.jpg',
  }

  const trainDataExample = {
    name: '产品名称',
    info: '产品介绍',
    newPrice: '产品折扣价',
    oldPrice: '产品原价',
    tag: '直降700',
    imageUrl: DefaultIMg,
    imageAlt: 'default.jpg'
  }

  const itemDataExample = {
    name: 'name',
    imageUrl: DefaultIMg,
    imageAlt: 'default.jpg'
  }
  export default {

    name: 'index',
    data: function () {
      return {
        layoutData:layoutDataExample,
        carouselData: [
          carouselDataExample, carouselDataExample, carouselDataExample, carouselDataExample
        ],
        trainData: [
          trainDataExample, trainDataExample, trainDataExample
        ],
        itemData4: [
          itemDataExample, itemDataExample, itemDataExample, itemDataExample,
          itemDataExample, itemDataExample, itemDataExample, itemDataExample,
        ],
        itemData5: [
          itemDataExample, itemDataExample, itemDataExample, itemDataExample, itemDataExample,
        ]
      }
    },
    components: {
      TopBar,
      Carousel,
      InlineList,
      LayoutB,
      LayoutTrain,
      Clover4,
      Column3
    },
  }

</script>
<style lang="scss" scoped>
  #index {
    margin-bottom: 50px;
  }

</style>
