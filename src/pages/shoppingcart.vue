<template>
  <div id="shoppingcart">

    <TitleBar></TitleBar>

    <!-- 空车 -->
    <ul class="emptyCart">
      <li>
        <i class="iconfont icon-cart"></i>
      </li>
      <li>
        <p>购物车还是空的</p>
      </li>
      <li>
        <el-button type="danger" plain>去购物</el-button>
      </li>
    </ul>


    <h3 class="bg_white color_ink">为您推荐</h3>

    <LayoutTrain :trainData="trainData"></LayoutTrain>
  </div>

</template>
<script>
  import TitleBar from "../components/titleBar"
  import LayoutTrain from "../components/layoutTrain"

  const trainDataExample = {
    name: '产品名称',
    info: '',
    newPrice: '产品折扣价',
    oldPrice: '产品原价',
    tag: '',
    imageUrl: '/images/default.jpg',
    imageAlt: 'default.jpg'
  }

  export default {
    components: {
      TitleBar,
      LayoutTrain
    },
    data: function () {
      return {

        trainData: [trainDataExample, trainDataExample, trainDataExample],
      }
    },
    computed: {
      test: function () {
        return "test";
      }
    },
    methods: {
      fun: function () {
        return "fu"
      }
    }

  }

</script>
<style lang="scss" scoped>
  #shoppingcart {
    display: block;
    margin-bottom: 50px;
  }

  .emptyCart {
    padding: 30px 0;
    background: white;
    margin-bottom: 10px;
    li {
      display: flex;
      flex-flow: row nowrap;
      text-align: center;
      justify-content: center;
      padding: 10px 0;

    }
  }

  h3 {
    margin-bottom: 2px;
  }

</style>
