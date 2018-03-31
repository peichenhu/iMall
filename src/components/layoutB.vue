<template>
  
    <!-- B型布局 -->
    <el-row class="layout_b">
      <div class="b_left">
              <img src="/images/default.jpg" alt="default.jpg">
      </div>
      <ul class="b_right">
        <li>
              <img src="/images/default-half.jpg" alt="default.jpg">
        </li>
        <li>
              <img src="/images/default-half.jpg" alt="default.jpg">
        </li>
      </ul>
    </el-row>
</template>
<script>
export default {
  
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