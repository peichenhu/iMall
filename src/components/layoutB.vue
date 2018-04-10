<template>

  <!-- B型布局 -->
  <el-row class="layout_b" v-if="layoutBData">

    <div class="b_left">
      <router-link :to="{ name: 'product', params: { id: layoutBData.left_max.products_id }}">
        <img :src="layoutBData.left_max.image_url" :alt="layoutBData.left_max.title">
      </router-link>
    </div>
    <ul class="b_right">
      <li>
      <router-link :to="{ name: 'product', params: { id: layoutBData.right_top_mini.products_id }}">
        <img :src="layoutBData.right_top_mini.image_url" :alt="layoutBData.right_top_mini.title">
      </router-link>
      </li>
      <li>
      <router-link :to="{ name: 'product', params: { id: layoutBData.right_bottom_mini.products_id }}">
        <img :src="layoutBData.right_bottom_mini.image_url" :alt="layoutBData.right_bottom_mini.title">
      </router-link>
      </li>
    </ul>
  </el-row>
</template>
<script>
  export default {
    name: '',
    props: ['layoutBData']

  }

</script>
<style lang="scss" scoped>
  .layout_b {
    display: flex;
    flex-flow: row nowrap;
    margin: 10px 0;
    .b_left {
      width: 50%;
      margin-right: 1px;
    }
    .b_right {
      display: inline-flex;
      flex-flow: row wrap;
      width: 50%;
      align-content: space-between;
      li:last-child {
        border-top: 1px solid white;
        margin-top: -1px;
      }

    }
  }

</style>
