<template>

    <el-row class="inline_list">
      <div v-for="(item, index) of 5*lineCount" :key="index">
        <p class="goods_img">
              <img src="../assets/images/default.jpg" alt="default.jpg">
        </p>
        <p class="goods_title"> 标题 </p>
      </div>
    </el-row>

</template>
<script>
export default {
  props: ['lineCount']
}
</script>
<style lang="scss" scoped>

  .inline_list {
    display: flex;
    flex-flow: row wrap;
    padding: 5px;
    >div {
      width: calc(20% - 10px);
      flex-grow: 1;
      padding: 5px;
      .goods_img {
        display: flex;
        align-items: self-start;
        margin: 0 auto;
        border-radius: 50%;
      }
      .goods_title {
        line-height: 30px;
      }
    }
  }

</style>
