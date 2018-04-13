<template>
  <div id="cart">

    <TitleBar></TitleBar>
    <!-- 非空车 -->
    <ul class="cart_full" v-if="cartProductsData && cartProductsData.length>0">

        <div class="cart_tip">
        <p>当前购物车包含 {{ store_cart.length }} 件商品 </p>
        <p v-on:click="handlerEdit()">
            <span v-if="isEdit">完成</span>
            <span v-else>编辑</span>
        </p>
        </div>
      <el-checkbox-group v-model="selectProduct" @change="handleSelectProductChange">
        <li class="cart_list" v-for="(item, index) in cartProductsData" :key="index">
          <div>
            <el-checkbox :label="index+1"></el-checkbox>
          </div>
          <div>
            <img src="https://oss.static.nubia.cn/pic/150777823783.jpg" alt="">
          </div>
          <div>{{item.title}}
            <small>{{item.storage}}</small>
            <small v-if="isEdit">
              <i class="el-icon-minus icon_border" size="mini" @click="countMinus(item.id)"></i>
              <span class="product_count">{{item.count}}</span>
              <i class="el-icon-plus icon_border" size="mini" @click="countPlus(item.id)"></i>
            </small>
            <small v-else>数量: {{item.count}}</small>
          </div>
          <div>
            <small>售价：￥{{item.price}}</small>
          </div>
        </li>
      </el-checkbox-group>
    </ul>
    <!-- 空车 -->
    <ul class="cart_empty" v-else>
      <li> <i class="iconfont icon-cart"></i> </li>
      <li>购物车还是空的</li>
      <li>
        <router-link to="/">
            <el-button type="danger" plain>去购物</el-button>
        </router-link>
      </li>
    </ul>

    <LayoutTrain :LayoutTrainData="recommendData"></LayoutTrain>

    <v-navigation></v-navigation>
  </div>

</template>
<script>
  import TitleBar from "../components/titleBar"
  import LayoutTrain from "../components/layoutTrain"
  import {
    getRecommend,
    getProductsById
  } from '../api/cart'

  import {
    mapState,
    mapActions
  } from "vuex"

  export default {
    components: {
      TitleBar,
      LayoutTrain
    },
    data: function () {
      return {
        recommendData: null,
        cartProductsData: null,
        selectProduct: [],
        isEdit: false
      }
    },
    created() {
      this.init(this.store_cart);
    },
    computed: {
      ...mapState({
        'store_cart': 'cart'
      })
    },
    methods: {
      ...mapActions({
        addCart: 'addCart',
        deletCart: 'deletCart',
      }),
      init: function () {
        let _this = this;
        // 获取推荐数据
        getRecommend()
          .then(({data}) =>_this.recommendData = data)
          .catch(error => console.log(error));
        // 获取购物车数据
        getProductsById({ 'products_id': this.store_cart })
          .then(({data}) => _this.cartProductsData = data )
          .catch(error => console.log(error))
      },
      handlerEdit: function () {
        this.isEdit = !this.isEdit;
      },
      countMinus: function (product_id) {
        this.deletCart(product_id);// 更新store
        this.init();
      },
      countPlus: function (product_id) {
        this.addCart(product_id);// 更新store
        this.init();
      },
      handleSelectProductChange(value) {
        console.log(value)
      }
    }
  }
</script>
<style lang="scss">
  @import '../assets/css/config.scss';
  #cart {
    display: block;
    margin-bottom: 50px;

  }

  .cart_tip {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 10px;
    background-color: white;
    border: 1px solid $snow;
  }

  .cart_full {
    .cart_list {
      display: flex;
      flex-flow: row nowrap;
      margin-bottom: 10px;
      background-color: white;
      .icon_border {
        padding: 3px;
        border: 1px solid $cloud;
        &:active {
          background-color: $cloud;
        }
      }
      .product_count {
        padding: 1px 10px;
        border-top: 1px solid $cloud;
        border-bottom: 1px solid $cloud;
      }
      >div {
        display: inline-flex;
        flex-flow: column wrap;
        justify-content: center;
        padding: 10px 5px;
        font-size: 14px;
        >.el-radio {
          width: 100%;
          text-align: center;
        }
        &:nth-child(1) {
          width: 10%;
          flex-grow: 0;
        }
        &:nth-child(2) {
          width: 20%;
          flex-grow: 0;
        }
        &:nth-child(3) {
          width: 45%;
          flex-grow: 0;
        }
        &:nth-child(4) {
          width: 15%;
          flex-grow: 0;
        }
      }
    }
  }

  .cart_empty {
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
    text-indent: 10px;
  }

</style>
<style lang="scss">
  #cart {
    .el-checkbox__label {
      display: none;
    }

  }

</style>
