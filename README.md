# WebApp 商城

> 基于 vue 2.0,vue-router, vue-awesome-swiper,element-ui, mockjs,sass,axios,webpack,

## 构建指令

``` bash
# 安装依赖
npm install

# 本地服务器热加载： localhost:8080
npm run dev

# 打包构建产品级压缩代码
npm run build
```

## 重点难点

### element-ui swiper

在使用element-ui 走马灯组件中遇到动态生成组建内容高度为0现象,一番尝试和谷歌之后发现该问题是一个普遍现象,最后使用vue-awesome-swiper插件替代element-ui走马灯组件.

### element-ui radio-group

radio-group 组件在动态生成后,默认选中样式失效.经思否社区和vue官方文档查询得知,created 执行时,页面的实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。只是挂载阶段还没开始，$el 属性目前不可见。也就是radio 的 checked 属性已经被生成. radio-group 生成后需要手动的去(使用 Vue.set( target, key, value ))设置对象的属性。如果对象是响应式的，确保属性被创建后也是响应式的，同时触发视图更新。这个方法主要用于避开 Vue 不能检测属性被添加的限制。

```html

<el-radio-group v-model="radioParams.choose" size="mini">
    <el-radio border v-for="(item, index) in storage" :key="index" :label="index">
        {{item}}
    </el-radio>
</el-radio-group>
```
```js
data: function () {
    return {
        radioColor: {},
        radioParams: {},
    }
},
created(){
    this.getProductById(this.$route.params.id);// 这里为radio-group请求数据,完成组件渲染,内容填充.

    this.$set(this.radioColor, 'choose', 0); // 这里就是手动重新设置对象checked属性
    this.$set(this.radioParams, 'choose', 0);
},
```

## element-ui `el-row` `el-col`
`<el-row v-on:click="fn">` 会失败，需要改成 `@click.native="fn"` 或者 改回div即可