<template>

    <el-row class="inline_list" v-if="InlineBoxData">
      <div v-for="(item, index) of InlineBoxData" :key="index" :style="itemStyleWidth">
        <p class="goods_img">
              <img :src="item.imageUrl" :alt="item.imageAlt">
        </p>
        <p class="goods_title"> {{item.title}} </p>
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
      }
    }
  }

</style>
