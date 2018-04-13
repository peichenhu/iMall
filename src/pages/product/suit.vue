<template>

  <el-row class="product_suit">
    <h3>套装 (暂未启用)</h3>
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          <el-radio v-model="radioSuit" label=" 标准版" size="mini"></el-radio>
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
          <el-radio v-model="radioSuit" label=" 套装版" size="mini"></el-radio>
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
          <el-radio v-model="radioSuit" label=" 单机版" size="mini"></el-radio>
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
</template>
<script>
  export default {
    name: 'suit',
    data() {
      return {
        DefaultIMg: 'https://oss.static.nubia.cn/pic/150777823783.jpg',
        radioSuit: {}, // 套装单选按钮模型（未开启）
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import '../../assets/css/config.scss';
  .product_suit {
    padding: 10px;
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

</style>
