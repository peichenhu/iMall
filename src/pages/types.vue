<template>
  <div id="types">
    <TopBar class="fixed_top"></TopBar>
    <hr>
    <h3 class="bg_white">手机</h3>
    <InlineBox :InlineBoxData="TypesPhoneData" :InlineBoxCount=4></InlineBox>
    <v-navigation></v-navigation>
  </div>
</template>

<script>
  import {
    getTypesData
  } from "../api/types"

  // 引入组件
  import TopBar from '../components/topBar'
  import InlineBox from '../components/InlineBox'

  export default {
    data:function(){
      return{
          TypesPhoneData: null
      }
    },
    // 初始化组件
    components: {
      TopBar,
      InlineBox
    },
    created() {
      this.init();
    },
    methods: {
      init: function () {
        let _this = this;
        getTypesData() // 传参数会导致Mock 报错，所以暂时为空
          .then( ({data}) =>_this.TypesPhoneData = data.phone)
          .catch(error=> console.log(error));
      }
    }
    
    

  }

</script>

<style lang="scss" scoped>

    
#types{
  margin-top: 50px;
  margin-bottom: 50px;
  h3{
    text-indent: 10px;
  }
}

</style>
