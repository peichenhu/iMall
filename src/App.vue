<template>
  <div id="app">

    <transition>
      <keep-alive  :include="['home','types','account']"> <!-- 保留组件状态或避免重新渲染。 -->
        <router-view><!-- 路由匹配到的组件将渲染在这里 --></router-view> 
      </keep-alive>
    </transition>

  </div>
</template>

<script>
  export default {
    name: 'app', // 允许组件模板递归地调用自身。便于调试,只有作为组件选项时起作用。
    /** 数据 **/
    data() {
      // 类型：Object | Function
      // 限制：组件的定义只接受 function。
      // Vue 将会递归将 data 的属性转换为 getter/setter，从而让 data 的属性能够响应数据变化。
      // 对象必须是纯粹的对象 (含有零个或多个的 key/value 对)：浏览器 API 创建的原生对象，原型上的属性会被忽略。
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    props: {
      // props 可以是数组或对象，用于接收来自父组件的数据。
      // props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义校验和设置默认值。
      // 检测类型
      height: Number,
      // 检测类型 + 其他验证
      //   age: {
      //     type: Number,
      //     default: 0,
      //     required: true,
      //     validator: function (value) {
      //       return value >= 0
      //     }
      //   }
    },
    computed: {
      // 计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。
      // 注意如果你为一个计算属性使用了箭头函数，则 this 不会指向这个组件的实例，不过你仍然可以将其实例作为函数的第一个参数来访问。
    },
    methods: {
      // methods 将被混入到 Vue 实例中。
      // 可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。
      // 注意，不应该使用箭头函数来定义 method 函数 (例如 plus: () => this.a++)。
      plus: function () {
        this.height++
      }
    },
    watch: {
      // 一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。
      // Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。
      height: function (val, oldVal) {
        console.log('new: %s, old: %s', val, oldVal)
      },
    },


    /**
     * 生命周期钩子函数自动绑定this 上下文，所以不可用箭头函数（箭头函数绑定了父上下文）
     * */
    beforeCreate() {},
    // 数据观测 (data observer) 和 event/watcher 事件配置之前被调用
    created() {
      // this.$store.state.commit('increment')
    },
    // 完成数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。
    beforeMount() {},
    // 挂载开始之前被调用：相关的 render 函数首次被调用。
    mounted() {
      this.$nextTick(function () {

      })
    },
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
    // 注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted
    beforeUpdate() {},
    // 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
    updated: function () {
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been re-rendered
      })
    },
    // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。
    // 注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated
    activated() {},
    // keep-alive 组件激活时调用。
    deactivated() {},
    // keep-alive 组件停用时调用。
    beforeDestroy() {},
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
    destroyed() {},
    // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
    errorCaptured() {},
    // 当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。

  }

</script>

<style lang="scss">
  @import './assets/css/config.scss';
  @import './assets/css/reset.scss';
  .el-row {
    background-color: white;
  }

</style>
