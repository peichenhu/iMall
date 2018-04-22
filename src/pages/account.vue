<template>
  <better-scroll>

    <template slot="section">
      <ul class="top">
        <li>
          <img :src="user.avatar" alt="Avatar" v-if="user.uid">
        </li>
        <li>
          <p v-if="user.uid">{{user.avatar}}</p>
          <router-link tag="p" to="/register" v-else>
            登录/注册
          </router-link>
        </li>

        <router-link :to="{ path: '/other', query: { title: '消息通知' }}" tag="li">
          <i class="iconfont icon-msg-fill"></i>
        </router-link>
        <router-link :to="{ path: '/other', query: { title: '设置' }}" tag="li">
          <i class="iconfont icon-shezhi1"></i>
        </router-link>
      </ul>

      <el-row :gutter="0" class="assets">
        <el-col :span="6" v-for="(item, index) in assets" :key="index" class="body">
          <router-link :to="{ path: 'other', query: { title: item.title }}">
            <p>
              <b>{{item.count}}</b>
            </p>
            <p>{{item.title}}</p>
          </router-link>
        </el-col>
      </el-row>

      <el-row :gutter="0" class="order">
        <el-row type="flex" class="title" justify="space-between">
          <el-col :span="8">
            <b>我的订单</b>
          </el-col>
          <el-col :span="16">
            <router-link tag="small" :to="{ path: '/other', query: { title: '全部订单' }}">
                查看全部订单 >
                </router-link>
          </el-col>
        </el-row>
        <el-col :span="6" v-for="(item, index) in order" :key="index" class="body">
          <router-link :to="{ path: '/other', query: { title: item.title }}">
            <p>
              <i :class="item.icon"></i>
            </p>
            <p>{{item.title}}</p>
          </router-link>
        </el-col>

      </el-row>

    </template>

    <navigation slot="footer"></navigation>
  </better-scroll>
</template>
<script>
  import {
    mapGetters
  } from "vuex";
  export default {
    components: {},
    data: function () {
      return {
        user: {
          avatar: null,
          name: null,
          uid: null
        },
        assets: [{
            count: 0,
            title: "优惠券",
            route: "/coupon"
          },
          {
            count: 0,
            title: "代金券",
            route: "/cashCoupon"
          },
          {
            count: this.$store.getters.collections.length,
            title: "收藏",
            route: "/collections"
          },
          {
            count: 0,
            title: "牛豆",
            route: "/bean"
          }
        ],
        order: [{
          icon: 'iconfont icon-xinyongqia',
          title: "待支付",
          route: "/order-nopay"
        }, {
          icon: 'iconfont icon-wuliu',
          title: "待收货",
          route: "/order-send"
        }, {
          icon: 'iconfont icon-yishouchu',
          title: "已完成",
          route: "/order-done"
        }, {
          icon: 'iconfont icon-chexiao',
          title: "回收订单",
          route: "/order-recovery"
        }]
      };
    },
    computed: {
      test: function () {
        return "test";
      }
    },
    methods: {
      fun: function () {
        return "fu";
      }
    }
  };

</script>
<style lang="scss" scoped>
  @import "../assets/css/config.scss";
  .top {
    height: 60px;
    padding: 10px 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    background-color: $ink;
    color: white;
    font-size: 16px;
    i {
      font-size: 20px;
    }
    a {
      display: block;
    }
    li:nth-child(3),
    li:nth-child(4) {
      line-height: 60px;
      width: 50px;
      text-align: center;
    }
    li:nth-child(1) {
      width: 60px;
      margin: 0 10px;
      background-color: $cloud;
      border-radius: 50%;
    }
    li:nth-child(2) {
      flex-grow: 1;
      height: 100%;
      text-align: left;
      display: inline-flex;
      justify-content: center;
      flex-direction: column;
    }
  }

  .assets .body,
  .order .body {
    padding: 15px 0;
    text-align: center;
  }

  .order {
    font-size: 16px;
    margin-top: 5px;
    .title {
      font-size: 20px;
      padding: 10px 15px;
      >div:nth-child(2) {
        text-align: right;
      }
    }
    p {
      padding-bottom: 5px;

      i {
        font-size: 25px;
        color: $peach;
      }
    }
  }

</style>
