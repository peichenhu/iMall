import Vuex from 'vuex' // 多个视图依赖于同一状态。来自不同视图的行为需要变更同一状态。
import Vue from 'vue'

Vue.use(Vuex)

const moduleCart = {
  state: {
    shoppingcart: [], // 购物车数据
  },
  // 增删数据
  mutations: {
    addShoppingcart(state, products_id) {
      let tmp = state.shoppingcart;
      state.shoppingcart.length = 0;
      state.shoppingcart = Array.from(new Set(tmp).add(products_id))
    },
    deletShoppingcart(state, products_id) {
      let tmp = state.shoppingcart;
      state.shoppingcart.length = 0;
      state.shoppingcart = Array.from(new Set(tmp).delete(products_id))
    }
  },
  getters: {
    getShoppingcart: state => {
      return state.shoppingcart;
    },
    isIncludeShoppingcart: (state) => (products_id) => {
      return state.shoppingcart.includes(products_id);
    }
  },
  actions: {
    addShoppingcart({
      commit,
      state
    }, products_id) { // ES^ 函数参数解构赋值
      commit('addShoppingcart')
    },
    deletShoppingcart({
      commit,
      state
    }, products_id) { // ES^ 函数参数解构赋值
      commit('deletShoppingcart')
    }
  }
}

const moduleCollections = {
  state: {
    collections: [] // 收藏数据
  },
  // 增删数据
  mutations: {
    addCollections(state, products_id) {
      let tmp = state.collections;
      state.collections.length = 0;
      state.collections = Array.from(new Set(tmp).delete(products_id))
    },
    deletCollections(state, products_id) {
      let tmp = state.collections;
      state.collections.length = 0;
      state.collections = Array.from(new Set(tmp).delete(products_id))
    },
  },
  getters: {
    getCollections: state => {
      return state.collections;
    },
    isIncludeCollections: (state) => (products_id) => {
      return state.collections.includes(products_id);
    }
  },
  actions: {
    addCollections({
      commit,
      state
    }, products_id) { // ES^ 函数参数解构赋值
      commit('addCollections')
    },
    deletCollections({
      commit,
      state
    }, products_id) { // ES^ 函数参数解构赋值
      commit('deletCollections')
    },
  }
}

export default new Vuex.Store({
  modules: {
    Cart: moduleCart,
    Collections: moduleCollections
  }
})

/**
 * -----------------------------------------------------------------------------------------------------
 * 
 *          vuex (Vue.use(vues))
 * vuex 状态管理模式。集中式存储管理应用的所有组件的状态，以相应的规则保证状态以一种可预测的方式发生变化。
 * state，驱动应用的数据源；
 * view，以声明方式将 state 映射到视图；
 * actions，响应在 view 上的用户输入导致的状态变化。
 * 
 * -----------------------------------------------------------------------------------------------------
 * 
 *          Store
 * Vuex 应用的核心就是 store（仓库）
 * Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
 * 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。
 * 根实例中注册 store ，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到。
 * 
 * const store = new Vuex.Store({})
 * this.$store
 * 
 * 在对象上添加新属性 > Vue.set(obj, 'newProp', 123)
 * 
 * -----------------------------------------------------------------------------------------------------
 * 
 *          State 计算
 * 单一状态树 State 是唯一数据源 (SSOT)，每个应用将仅仅包含一个 store 实例
 * 
 * state: {
 *  count: 0
 * }
 * 
 * 调用方式：
 * 
 * this.$store.state.count
 * 
 * 在单独构建的版本中辅助函数为 Vuex.mapState 仅仅是将 store 中的 state 映射到局部计算属性：
 * 
 * import { mapState } from 'vuex'  
 * ...mapState{(localCount: 'count')}
 * ...mapState(['count'])
 * 
 * -----------------------------------------------------------------------------------------------------
 * 
 *          Getter 计算派生
 * 
 * store 的计算属性，从 store 中的 state 中派生出一些状态，当它的依赖值发生了改变才会被重新计算
 * 注意，getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的。
 * 注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
 * 
 * getters: {
 *   getTodoById: (state) => (id) => {
 *       return state.todos.find(todo => todo.id === id)
 *   }
 * }
 * 
 * 调用方式：
 *
 * this.$store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
 * 
 * 在单独构建的版本中辅助函数为 Vuex.mapGetters 仅仅是将 store 中的 getter 映射到局部计算属性：
 * 
 * import { mapGetters } from 'vuex'  
 * ...mapGetters({localGet:'get'}) 
 * ...mapGetters(['get'])
 * 
 * ---------------------------------------------------------------------------------------------------
 * 
 *          Mutation 计算修改
 * 
 * 一条重要的原则就是要记住 mutation 必须是同步函数
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation.
 * 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
 * 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数，payload 有效载荷第二个参数（自定义可选）：
 * 
 * mutations: { 
 *  Todo (state, payload) { 
 *      state.count+=payload.num 
 *  } 
 * }
 * 
 * 多人协作的大型项目中使用常量替代 Mutation 事件类型，我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
 * 
 * const SOME_MUTATION = 'SOME_MUTATION'
 * mutations: { 
 *  [SOME_MUTATION] (state) { // mutate state } 
 * }
 * 
 * 调用方式：
 * 
 * this.$store.commit('Todo',{num:10}) 
 * this.$store.commit({type:'Todo',num:10}) 
 * 
 * 在单独构建的版本中辅助函数为 Vuex.mapMutations 仅仅是将 store 中的 Mutation 映射到局部计算属性：> 
 * 
 * import { mapMutations  } from 'vuex'  
 * 
 * 或者
 * ...mapMutations({
 *      localTodo:'Todo'
 * }) 
 * 或者
 * ...mapMutations(['Todo'])
 * 
 * -----------------------------------------------------------------------------------------------------
 * 
 *          Action  方法调用mutation计算
 * Action 提交的是 mutation，而不是直接变更状态。
 * Action 可以包含任意异步操作。为异步而生
 * Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
 * 因此你可以调用 context.commit 提交一个 mutation，
 * 或者通过 context.state 和 context.getters 来获取 state 和 getters。
 * 当我们在之后介绍到 Modules 时，你就知道 context 对象为什么不是 store 实例本身了。
 * 
 * actions: { 
 *  Todo ({ commit, state },data) { 
 *      commit('Todo') 
 *  } 
 * } 
 * 或者
 * actions: { 
 *  Todo (context,data) { 
 *      context.commit('Todo') 
 *  } 
 * } 
 * 
 * this.$store.dispatch('Todo',{num:10}) 
 * this.$store.dispatch({type:'Todo',num:10}
 * 
 * 使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：
 * methods: {
 *   ...mapActions([
 *     'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
 *     'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
 *   ]),
 *   ...mapActions({
 *     add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
 *   })
 * }
 * 
*/