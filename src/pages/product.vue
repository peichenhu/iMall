<template>
  <div id="product">

    <el-row class="backBar">
      <el-col :span="18">
        <i class="iconfont icon-left"></i>
        <span>
          <b>产品名称</b>
        </span>
      </el-col>
      <el-col :span="3">
        <el-button circle size="mini" :style="{padding:'5px'}">
          <i class="iconfont icon-cart"></i>
        </el-button>
      </el-col>
      <el-col :span="3">
        <el-button circle size="mini" :style="{padding:'5px'}">
          <i class="iconfont icon-msg"></i>
        </el-button>
      </el-col>
    </el-row>

    <!-- 轮播图组件 -->
    <carousel :carouselData="carouselData"></carousel>
    <!-- 产品简要 -->
    <el-row class="product_brief">
      <p>标题简要标题简要标题简要标题简</p>
      <p>
        <small>信息简要信息简要信息简要信息简要信息简要信息简要</small>
      </p>
      <p class="color_peach">￥1399
        <del>￥1599</del>
      </p>
    </el-row>
    <!-- 促销信息 -->
    <el-row class="product_sale">
      <h3>促销</h3>
      <p>
        <span>赠豆豆</span>购买完成可获赠与支付额相同的数目的豆豆</p>
      <p>
        <span>包邮</span>会员满99包邮，普通客户满899包邮。</p>
    </el-row>
    <!-- 产品参数 颜色 -->
    <el-row class="product_parameter">
      <h3>颜色</h3>
      <el-radio-group v-model="radio1" size="mini">
        <el-radio border label="1" dotcolor="#555">墨色</el-radio>
        <el-radio border label="2">桃色</el-radio>
        <el-radio border label="3">雪色</el-radio>
        <el-radio border label="4">云色</el-radio>
      </el-radio-group>
    </el-row>
    <!-- 产品参数 规格 -->
    <el-row class="product_parameter">
      <h3>规格</h3>
      <el-radio-group v-model="radio2" size="mini">
        <el-radio border label="1" dotcolor="#555">4G+64G</el-radio>
        <el-radio border label="2">4G+128G</el-radio>
        <el-radio border label="3">6G+64G</el-radio>
        <el-radio border label="4">4G+128G</el-radio>
      </el-radio-group>

    </el-row>
    <!-- 产品参数 套装 -->
    <el-row class="product_suit">
      <h3>套装</h3>
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <el-radio v-model="radio3" label=" 标准版" size="mini"></el-radio>
            ：2899，
            <del>3288</del>,省 200 元
            <i class="header-icon el-icon-info"></i>
          </template>
          <div class="suit_list">
            <p>
              <img :src="DefaultIMg" :alt="DefaultIMg">
            </p>
            <p>产品标题产品标题产品标题产品标题（6G+64G 墨黑）</p>
            <p>￥1399</p>
          </div>
          <div class="suit_list">
            <p>
              <img :src="DefaultIMg" :alt="DefaultIMg">
            </p>
            <p>产品标题产品标题产品标题产品标题（6G+64G 墨黑）</p>
            <p>￥1399</p>
          </div>
          <div class="suit_list">
            <p>
              <img :src="DefaultIMg" :alt="DefaultIMg">
            </p>
            <p>产品标题产品标题产品标题产品标题（6G+64G 墨黑）</p>
            <p>￥1399</p>
          </div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-radio v-model="radio3" label=" 套装版" size="mini"></el-radio>
            ：2899，
            <del>3288</del>,省 200 元
            <i class="header-icon el-icon-info"></i>
          </template>
          <div class="suit_list">
            <p>
              <img :src="DefaultIMg" :alt="DefaultIMg">
            </p>
            <p>产品标题产品标题产品标题产品标题（6G+64G 墨黑）</p>
            <p>￥1399</p>
          </div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <el-radio v-model="radio3" label=" 单机版" size="mini"></el-radio>
            ：2899，
            <del>3288</del>,省 200 元
          </template>
          <div class="suit_list">
            <p>
              <img :src="DefaultIMg" :alt="DefaultIMg">
            </p>
            <p>产品标题产品标题产品标题产品标题（6G+64G 墨黑）</p>
            <p>￥1399</p>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-row>
    <el-row>
      <h3>概述</h3>
      <div>
        <img :src="DefaultIMg" alt="">
        <img :src="DefaultIMg" alt="">
        <img :src="DefaultIMg" alt="">
        <img :src="DefaultIMg" alt="">
      </div>
      
    </el-row>

  </div>

</template>
<script>
  import Carousel from '../components/carousel'

  const DefaultIMg = 'https://git.io/vxPwn';
  const DefaultHalfIMg = 'https://git.io/vxPVy';

  const carouselDataExample = {
    name: 'name',
    info: 'info',
    imageUrl: DefaultHalfIMg,
    imageAlt: 'default.jpg',
  }
  export default {

    name: 'index',
    data: function () {
      return {
        DefaultIMg,
        carouselData: [
          carouselDataExample, carouselDataExample, carouselDataExample, carouselDataExample
        ],
        radio1: '1',
        radio2: '1',
        radio3: '1'
      }
    },

    components: {
      Carousel,
    }
  }

</script>
<style lang="scss" scoped>
  @import '../assets/css/config.scss';

  #product {
    margin-bottom: 60px;
    .el-row {
      padding: 10px;
    }
    h3 {
      border-bottom: 1px solid #FAFAFA;
    }
    .suit_list {
      display: flex;
      flex-flow: row nowrap;
      margin-bottom: 10px;
      p {
        &:first-child {
          width: 25%;
          margin: 0 10px;
          flex-grow: 0;
        }
        &:last-child {
          width: 25%;
          margin-left: 10px;
          flex-grow: 0;

        }
      }
    }
    .el-collapse-item.is-active {
      background-color: $peach;
    }

    .backBar {
      padding: 0 10px;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid $cloud;
      b {
        font-size: 18px;
      }
      .el-col-3{
        text-align: right ;
      }
    }

    .product_brief {
      margin-top: 2px;
      line-height: 18px;
    }

    .product_sale {
      margin-top: 2px;
      p {
        line-height: 24px;
        span {
          padding: 1px 2px;
          margin-right: 10px;
          border: 1px solid $peach;
        }
      }
    }

    .product_parameter {
      .el-radio.is-bordered {
        border-radius: 14px;
        margin: 10px 10px 0 0;
      }
    }
  }

</style>
