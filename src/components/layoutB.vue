<template>
  
    <!-- B型布局 -->
    <el-row class="layout_b" v-if="layoutBData">
        
      <div class="b_left">
              <img :src="layoutBData.image1.imageUrl" :alt="layoutBData.image1.imageAlt">
      </div>
      <ul class="b_right">
        <li>
              <img :src="layoutBData.image2.imageUrl" :alt="layoutBData.image2.imageAlt">
        </li>
        <li>
              <img :src="layoutBData.image3.imageUrl" :alt="layoutBData.image3.imageAlt">
        </li>
      </ul>
    </el-row>
</template>
<script>
export default {
  name:'',
  props:['layoutBData']
  
}
</script>
<style lang="scss" scoped>

  .layout_b {
    display: flex;
    flex-flow: row nowrap;
    .b_left {
      flex-grow: 1;
      margin-right: 1px;
    }
    .b_right {
      flex-grow: 1;
      display: inline-flex;
      flex-flow: column nowrap;
      li:last-child {
        border-top: 1px solid white;
        margin-top: -1px;
      }

    }
  }
</style>