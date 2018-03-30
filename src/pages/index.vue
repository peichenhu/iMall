<template>
  <div id="index">

    <!-- 搜索消息栏组件 -->
    <topBar></topBar>
    <!-- 轮播图组件 -->
    <carousel></carousel>
    <!-- 行内列表组件 -->
    <inlineList lineCount=1></inlineList>
    <LayoutB></LayoutB>
    <inlineList lineCount=2></inlineList>
    <LayoutTrain></LayoutTrain>
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

  export default {

    name: 'index',
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

#index{
  margin-bottom: 50px;
}
</style>
