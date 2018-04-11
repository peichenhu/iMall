<template>

    <el-row class="inline_list" v-if="InlineBoxData">
      <div v-for="(item, index) of InlineBoxData" :key="index" :style="itemStyleWidth">

      <router-link :to="{ name: 'product', params: { id: item.products_specifications[0].id }}">
        <p class="goods_img">
            <img :src="item.products_image" :alt="item.title">
        </p>
        <p class="goods_title"> {{item.title}} </p>
      </router-link>
      </div>
    </el-row>

</template>
<script>
export default {
  props: ['InlineBoxData','InlineBoxCount'],
  computed:{
    itemStyleWidth:function(){
      return {width: (100/this.$props.InlineBoxCount) + '%'}
    }
  }
}
</script>
<style lang="scss" scoped>

  .inline_list {
    display: flex;
    flex-flow: row wrap;
    padding: 5px;
    >div {
      width: 20%;
        text-align: center;
      .goods_img {
        display: flex;
        align-items: self-start;
        margin: 0 auto;
        border-radius: 50%;
        padding: 5px;
      }
      .goods_title {
        line-height: 30px;
        padding: 0 5px;
        font-size: 11px;
      }
    }
  }

</style>
