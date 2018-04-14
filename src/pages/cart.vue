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
            <el-checkbox :label="index" :disabled="isDissble"></el-checkbox>
          </div>
          <div>
            <img src="https://oss.static.nubia.cn/pic/150777823783.jpg" alt="">
          </div>
          <div>{{item.title}} 
            <small>{{item.color}}{{item.storage}}</small>
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
      <li>
        <i class="iconfont icon-cart"></i>
      </li>
      <li>购物车还是空的</li>
      <li>
        <router-link to="/">
          <el-button type="danger" plain>去购物</el-button>
        </router-link>
      </li>
    </ul>

    <LayoutTrain :LayoutTrainData="recommendData"></LayoutTrain>

    <!-- <Checkout></Checkout> -->
    <ul class="checkout" v-show="isShowHowMuch">
      <li>
        <el-checkbox :disabled="isDissble" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      </li>
      <li>
        <p>合计：￥{{howMuch}}</p>
        <p>
          <small>优惠：￥0.00</small>
        </p>
      </li>
      <li>
        <el-button size="mini" round type="danger">结算</el-button>
      </li>
    </ul>

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
        isShowHowMuch: false,    // 是否显示价格栏
        howMuch: '0.00',        // 多少钱
        checkAll: false,        // 勾选全部产品
        isIndeterminate: true,  // checkbox 的不确定状态
        recommendData: null,    // 推荐数据
        cartProductsData: null, // 购物车数据
        selectProduct: [],      // 勾选产品数据
        isEdit: false,          // 产品编辑状态
        isDissble:false
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
          .then(({
            data
          }) => _this.recommendData = data)
          .catch(error => console.log(error));
        // 获取购物车数据
        getProductsById({
            'products_id': this.store_cart
          })
          .then(({
            data
          }) => _this.cartProductsData = data)
          .catch(error => console.log(error))
      },
      handlerEdit: function () {
        this.isEdit = !this.isEdit;
      },
      countMinus: function (product_id) {
        this.deletCart(product_id); // 更新store
        this.init();
      },
      countPlus: function (product_id) {
        this.addCart(product_id); // 更新store
        this.init();
      },
      // 当用户勾选单个产品
      handleSelectProductChange(value) {
        let _this = this;
        this.checkAll = value.length === this.cartProductsData.length;
        this.isIndeterminate = value.length > 0 && value.length < this.cartProductsData.length;
        // 计算价格
        if (value.length > 0) {
          let counter = 0;
          value.forEach(function (i) {
            counter += (_this.cartProductsData[i].price * _this.cartProductsData[i].count)
          })
          this.howMuch = counter;
        } else {
          this.howMuch = '0.00';
        }
        if(!this.isEdit){
          this.isShowHowMuch = true
        }
      },
      // 当用户勾选全选
      handleCheckAllChange(val) {
        let _this = this;
        // 假设全选变量
        let fullSelectProduct = [];
        // 根据购物车里的数据填充全选变量
        this.cartProductsData.forEach((item, index) => fullSelectProduct.push(index));
        // 用户是否勾选了全选
        this.selectProduct = val ? fullSelectProduct : [];
        // 不确定状态
        this.isIndeterminate = false;
        //  计算价格
        if (val) {
          let counter = 0;
          fullSelectProduct.forEach(function (i) {
            counter += (_this.cartProductsData[i].price * _this.cartProductsData[i].count)
          })
          this.howMuch = counter;
        } else {
          this.howMuch = '0.00';
        }
      },
    },
    watch: {
      isEdit: function (val, oldVal) {
        // 进入编辑
        if (val === true && oldVal === false) {

          this.isShowHowMuch = false
          this.handleSelectProductChange([])
          this.handleCheckAllChange(false)
          this.isDissble=true
        } else { // 退出编辑

          this.isDissble=false
          this.isShowHowMuch = true
          this.handleSelectProductChange([])
          this.handleCheckAllChange(false)
        }
      },
      cartProductsData: function (val, oldVal) {
        // 进入编辑
        if (!val && val.length===0) {
          this.isShowHowMuch = false
        }
      },

    }
  }

</script>
<style lang="scss">
  @import '../assets/css/config.scss';
  #cart {
    display: block;
    margin-bottom: 50px;

  }

  .checkout {
    position: fixed;
    bottom: 50px;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    background-color: white;
    border-top: 1px solid $cloud;
    justify-content: space-between;
    >li {
      padding: 5px 20px;
      display: inline-flex;
      flex-flow: column nowrap;
      justify-content: center;
      &:nth-child(2) {
        text-align: right;
        flex-grow: 1;

      }
    }
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
      justify-content: space-around;
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
        padding: 5px;
        font-size: 14px;
        display: inline-flex;
        flex-flow: column nowrap;
        justify-content: center;
        >.el-radio {
          width: 100%;
          text-align: center;
        }
        &:nth-child(1) {
          padding-left: 20px;
        }
        &:nth-child(2) {
          width: 20%;
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
