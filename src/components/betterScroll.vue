<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main class="wrapper" ref="wrapper">
      <div class="content">
        <slot name="section"></slot>
      </div>
    </main>
    <footer class="fixed_bottom">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
  import BScroll from "better-scroll";
  export default {
    name: "better-scroll",
    mounted() {
      this.$nextTick(function () {
        let _this = this;
        this.scroll = new BScroll(this.$refs.wrapper, {
          scrollY: true,
          click: true,
          mouseWheel: true,
          probeType: 3
        });
      })
    }
  }
</script>
<style lang="scss" scoped>
.container{
    height: 100%;
    header{
        width: 100%;
        z-index: 999;
    }
    main.wrapper{
        height: calc(100% - 100px);
        overflow: auto;
        .content{
            min-height: calc(100% + 1px);
        }
    }
    footer{
        position: fixed;
        left: 0;
        width: 100%;
        z-index: 999;
        bottom: 0;
    }

}

</style>
