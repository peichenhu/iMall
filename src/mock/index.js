// 当post或get请求到/api 路由时Mock会拦截请求并返回上面的数据
import Mock from "mockjs"
// Mock.Random 是一个工具类，用于生成各种随机数据。
const Random = Mock.Random;

import { 
    product_v18_1 ,
    product_v18_2 ,
    product_v18_3 ,

    product_z17_1 ,

    products_z17 ,
    products_v18 ,

    indexData,

    cartRecommendData
} from './database'

const products_list = [
      product_v18_1,
      product_v18_2,
      product_v18_3,
      product_z17_1,
];

const products_model = [
    products_z17,
    products_v18
]

const typesData ={
    "phone":[
        products_v18,
        products_z17
    ]
}

// index
Mock.mock('/get_index_data', 'get', indexData);
Mock.mock('/get_types_data', 'get', typesData);

// product
Mock.mock('/get_product_by_id', 'post', function(options){
    // console.log(JSON.parse(options.body))
    let product_id = JSON.parse(options.body).product_id;
    let model = '';
    let tmp;
    
    products_list.forEach(function(item){
        if(item.id == product_id){
            model = item.model;
        }
    });
    
    products_model.forEach(function(item){
        if(item.model == model){
            tmp=item
        }
    });
    return tmp;
});

Mock.mock('/get_cart_recommend','get', cartRecommendData)

// cart

Mock.mock('/get_products_by_ids','post', function(options){
    let products_id = JSON.parse(options.body).products_id;
    let result=[];
    // 遍历所有产品列表
    products_list.forEach(function(item){
        // 如果该产品在购物车内
        if( products_id.includes(item.id)){
            // 获取该购物车中产品数量
            let tmp = products_id.filter(i=>i==item.id)
            item['count'] = tmp.length;
            result.push(item)
        }
    });
    return result;
})
