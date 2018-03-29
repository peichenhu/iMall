<template>
    <div id="app">
        <!-- 搜索消息栏 -->
        <br><center>搜索消息栏</center><br>
        <el-row class="index_top_bar">
            <!--搜索-->
            <div class="top_search">
                <el-input size="mini"
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="input2">
                </el-input>
            </div>
            <!--消息-->
            <div class="top_msg"><i class="el-icon-bell"></i></div>
        </el-row>

        <!-- 轮播图 -->
        <br><center>轮播图</center><br>
        <el-carousel :interval="5000" arrow="always" class="index_carousel">
            <el-carousel-item v-for="item in 4" :key="item" class="carousel_item">
                {{ item }}
            </el-carousel-item>
        </el-carousel>

        <!-- 一条龙布局 -->
        <br><center>一条龙布局</center><br>
        <el-row class="goods_type">
            <div v-for="(item, index) of 5" :key="index">
                <p class="goods_img"> <img src="/static/default.jpg" alt="Default.jpg"> </p>
                <p class="goods_title"> 标题 </p>
            </div>
        </el-row>

        <!-- 神龙摆尾布局 -->
        <br><center>神龙摆尾布局</center><br>
        <el-row class="goods_type">
            <div v-for="(item, index) of 10" :key="index">
                <p class="goods_img"> <img src="/static/default.jpg" alt="Default.jpg"> </p>
                <p class="goods_title"> 标题 </p>
            </div>
        </el-row>

        <!-- B型布局 -->
        <br><center>B型布局</center><br>
        <el-row class="layout_b">
            <div class="b_left">
                <img src="/static/default.jpg" alt="default.jpg">
            </div>
            <ul class="b_right">
                <li>
                    <img src="/static/default-half.jpg" alt="default.jpg">
                </li>
                <li>
                    <img src="/static/default-half.jpg" alt="default.jpg">
                </li>
            </ul>
        </el-row>

        <!-- 一带三栏布局 -->
        <br><center>一带三栏布局</center><br>
        <el-row class="column3">
            <h5>横幅</h5>
            <ul>
                <li v-for="(item, index) in 3" :key="index">
                    <p>
                        <span>标题</span>
                        <small>介绍</small>
                    </p>
                    <p>
                        <img src="/static/default.jpg" alt="">
                    </p>
                </li>
            </ul>
        </el-row>

        <!-- 一带四叶草布局 -->
        <br><center>一带四叶草布局</center><br>
        <el-row class="clover">
            <h5>分类标题  <i class="el-icon-d-arrow-right"></i> </h5>
            <ul>
                <li v-for="(item, index) in 4" :key="index">
                    <p>标题</p>
                    <p>
                        <span>
                            <small>价格</small>
                            <small><el-tag size="mini">标签</el-tag></small>
                        </span>
                        <span>
                            <img src="/static/default.jpg" alt="">
                        </span>
                    </p>
                </li>
            </ul>
        </el-row>

        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss">
    /*resetcss*/
    $ink:#2C2C2C;// 墨色
    $peach:#FF5F5F;// 桃色
    $cyan:#83FFE6; // 青色
    $snow:#FAFAFA; // 雪色
    html *{
        margin: 0;
        padding: 0;
    }

    body{

        img{
            width: 100%;
            height: auto;
            display: block;
        }
        h1, h2 {
            font-weight: normal;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }
    }

    #app {
        font-family:  Helvetica, Arial, sans-serif, 'Avenir';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $ink;
        background-color: $snow;
        font-size: 14px;
    }

    .layout_b{
        display: flex;
        flex-flow: row nowrap;
        .b_left{
            flex-grow: 1;
            margin-right: 1px;
        }
        .b_right{
            flex-grow: 1;
            display: inline-flex;
            flex-flow: column nowrap;
            li:last-child{
             border-top: 1px solid white;
                margin-top: -1px;
            }

        }
    }

    .el-row{
        background-color: white;
    }

    .index_top_bar{
        background-color: white;
        display: flex;
        flex-direction: row;

        margin-top: 0;
        >div{
            width: 30px;
            line-height: 30px;
            margin: 10px;
            flex-grow: 0;
        }
        .top_search{
            flex-grow: 1;
        }
    }

    .goods_type{
        display: flex;
        flex-flow: row wrap;
        padding: 5px;
        >div{
            width: calc(20% - 10px);
            flex-grow: 1;
            padding: 5px;
            .goods_img{
                display: flex;
                align-items: self-start;
                margin: 0 auto;
                border-radius: 50%;
            }
            .goods_title{
                line-height: 30px;
            }
        }
    }

    .index_carousel .carousel_item:nth-child(odd){
        background-color: $cyan;
    }

    .index_carousel .carousel_item:nth-child(even){
        background-color: $peach;
    }

    .column3{
        background-color: $snow;
        h5{
            // background-color: $ink;
            background-image: url('/static/default.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            color: white;
            width: 100%;
            height: 80px;
            text-align: center;
            line-height: 80px;
            margin-bottom: 2px;
        }
        ul{
            display: flex;
            flex-flow: row nowrap;
            li{
                flex-grow: 1;
                background-color: white;
                padding: 10px;
                margin: 0 1px;
                span,small{
                    display: block;
                }
                img{
                    display: block;
                    width: 80%;
                    margin: 0 auto;
                }

                &:frist-child,
                &:last-child{
                    margin: 0;
                }
            }

        }
    }

    .clover{
        h5{
            background-color: $ink;
            color: white;
            width: 100%;
            height: 30px;
            text-align: center;
            line-height: 30px;
            border-bottom: 1px solid #f5f5f5;
            margin-bottom: 1px;
        }
        ul{
            display: flex;
            flex-flow: row wrap;
            li{
                padding: 15px;
                >p{
                    display: flex;
                    flex-flow: row nowrap;
                    text-align: left;
                    >span{
                        width: 50%;
                        flex-grow: 0;
                        small{
                            display: block;
                        }
                    }
                }
            }
            li:nth-child(1){
                width: calc(50% - 31px);
                border-right: 1px solid #f5f5f5;
                border-bottom:1px solid #f5f5f5 ;
            }
            li:nth-child(2){
                width: calc(50% - 30px);
                border-bottom:1px solid #f5f5f5 ;
            }
            li:nth-child(3){
                width: calc(50% - 31px);
            }
            li:nth-child(4){
                width: calc(50% - 30px);
                border-left: 1px solid #f5f5f5;
            }
        }
    }

</style>
