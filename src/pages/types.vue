<template>
  <div id="types">

    <TopBar class="fixed_top"></TopBar>
    <hr>
    <h3 class="bg_white">分类 1</h3>
    <InlineList :itemData= itemData  :lineItemCount = 1  ></InlineList>
    
    <h3 class="bg_white">分类 2</h3>
    <InlineList :itemData= itemData  :lineItemCount = 2  ></InlineList>

    <h3 class="bg_white">分类 3</h3>
    <InlineList :itemData= itemData  :lineItemCount = 3  ></InlineList>
    
    <h3 class="bg_white">分类 4</h3>
    <InlineList :itemData= itemData  :lineItemCount = 4  ></InlineList>

    <h3 class="bg_white">分类 5</h3>
    <InlineList :itemData= itemData  :lineItemCount = 5  ></InlineList>
  </div>

</template>

<script>
  // 引入组件
  import TopBar from '../components/topBar'
  import InlineList from '../components/inlineList'

  const DefaultIMg = 'https://git.io/vxPwn';
  const DefaultHalfIMg = 'https://git.io/vxPVy';

  const itemDataExample={
    name:'name',
    imageUrl: DefaultIMg,
    imageAlt:'default.jpg'
  }

  export default {
      
    data:function(){
      return{
        itemData:[
          itemDataExample,itemDataExample,itemDataExample,itemDataExample,
          itemDataExample,itemDataExample,
        ]
      }
    },
    // 初始化组件
    components: {
      TopBar,
      InlineList
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
