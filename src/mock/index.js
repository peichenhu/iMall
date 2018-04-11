import Mock from "mockjs"
// Mock.Random 是一个工具类，用于生成各种随机数据。
const Random = Mock.Random;


const product_v18_1 = {
  "id": 8881,
  "title": "Nubia V18 全面屏",
  "model": "v18",
  "color": "曜石黑",
  "storage": "4GB+64GB",
  "price": 2299,
  "original_price": 2499,
  "sale": "6寸长续航,千元全面屏",
  "product_images": [{
      "id": '88810',
      "title": "V18 曜石黑",
      "description": "6寸长续航,千元全面屏",
      "image_url": "https://oss.static.nubia.cn/pic/150094951146.jpg",
    },
    {
      "id": '88811',
      "title": "V18 曜石黑",
      "description": "6寸长续航,千元全面屏",
      "image_url": "https://oss.static.nubia.cn/pic/149631325092.jpg",
    },
    {
      "id": '88812',
      "title": "V18 曜石黑",
      "description": "6寸长续航,千元全面屏",
      "image_url": "https://oss.static.nubia.cn/pic/149631325050.jpg",
    }
  ],
  "sale_tag": {
    "is_need": true,
    "position": "left",
    "text": "优惠200",
    "color": "#e60012"
  }
}
const product_v18_2 = {
  "id": 8882,
  "title": "Nubia V18 全面屏",
  "model": "v18",
  "color": "极光蓝",
  "storage": "4GB+64GB",
  "price": 2299,
  "original_price": 2499,
  "sale": "6寸长续航,千元全面屏",
  "product_images": [{
      "id": '88820',
      "title": "V18 极光蓝",
      "description": "6寸长续航,千元全面屏",
      "image_url": "https://oss.static.nubia.cn/pic/152152380130.jpg",
    },
    {
      "id": '88821',
      "title": "V18 极光蓝",
      "description": "6寸长续航,千元全面屏",
      "image_url": "https://oss.static.nubia.cn/pic/152152380182.jpg",
    }
  ],
  "sale_tag": {
    "is_need": true,
    "position": "left",
    "text": "热销",
    "color": "#e60012"
  }
}
const product_v18_3 = {
  "id": 8883,
  "title": "Nubia V18 全面屏",
  "model": "v18",
  "color": "极光蓝",
  "storage": "6GB+64GB",
  "price": 2499,
  "original_price": 2899,
  "sale": "6寸长续航,千元全面屏",
  "product_images": [{
      "id": '88830',
      "title": "V18 极光蓝",
      "description": "6寸长续航,千元全面屏",
      "image_url": "https://oss.static.nubia.cn/pic/152152380130.jpg",
    },
    {
      "id": '88831',
      "title": "V18 极光蓝",
      "description": "6寸长续航,千元全面屏",
      "image_url": "https://oss.static.nubia.cn/pic/152152380182.jpg",
    }
  ],
  "sale_tag": {
    "is_need": true,
    "position": "left",
    "text": "新品",
    "color": "#e60012"
  }
}

const product_z17_1 = {
  "id": 6661,
  "model": "z17",
  "color": "星月白",
  "storage": "4GB+64GB",
  "price": 1299,
  "original_price": 1899,
  "sale": "6寸长续航,千元全面屏",
  "product_images": [{
      "id": '66610',
      "title": "Z17 星月白",
      "description": "无边框旗舰",
      "image_url": "https://oss.static.nubia.cn/pic/152152380130.jpg",
    },
    {
      "id": '66611',
      "title": "Z17 星月白",
      "description": "无边框旗舰",
      "image_url": "https://oss.static.nubia.cn/pic/152152380182.jpg",
    }
  ],
  "sale_tag": {
    "is_need": true,
    "position": "left",
    "text": "优惠600",
    "color": "#e60012"
  }
}

const products_z17 = {
  "id": '666',
  "model":'z17',
  "title": "Z17 无边框",
  "products_type": "phone",
  "products_image": "https://oss.static.nubia.cn/pic/150777823783.jpg",
  "products_specifications": [product_z17_1],
  "products_poster": [
    'https://oss.static.nubia.cn/upload/592fb37cad79f46.jpg',
    'https://oss.static.nubia.cn/upload/5a2e4d796ca6379.jpeg',
    'https://oss.static.nubia.cn/upload/592fb37ea04a845.jpg',
    'https://oss.static.nubia.cn/upload/592fb37f7804752.jpg',
    'https://oss.static.nubia.cn/upload/592fb3803cb9d38.jpg',
    'https://oss.static.nubia.cn/upload/592fb380d458a92.jpg',
    'https://oss.static.nubia.cn/upload/592fb3819ca5c44.jpg',
    'https://oss.static.nubia.cn/upload/592fb38276aa432.jpg',
    'https://oss.static.nubia.cn/upload/592fe090cfa8b47.jpg',
    'https://oss.static.nubia.cn/upload/5a2e445562c9035.jpg',
    'https://oss.static.nubia.cn/upload/59310fb7095b699.jpg',
    'https://oss.static.nubia.cn/upload/59561e146efe593.jpg',
    'https://oss.static.nubia.cn/upload/592fe0ca129f546.jpg',
    'https://oss.static.nubia.cn/upload/592fe0d214d7d49.jpg',
    'https://oss.static.nubia.cn/upload/592fb3897ee7424.jpg',
    'https://oss.static.nubia.cn/upload/592fb38a4fe7c26.jpg',
    'https://oss.static.nubia.cn/upload/592fb38ae2d141.jpg',
  ],
}
const products_v18 = {
  "id": '888',
  "model":'v18',
  "title": "V18 长续航",
  "products_type": "phone",
  "products_image": "https://oss.static.nubia.cn/pic/15215238003.jpg",
  "products_specifications": [
    product_v18_1,
    product_v18_2,
    product_v18_3
  ],
  "products_poster": [
    'https://oss.static.nubia.cn/upload/592fb37cad79f46.jpg',
    'https://oss.static.nubia.cn/upload/5a2e4d796ca6379.jpeg',
    'https://oss.static.nubia.cn/upload/592fb37ea04a845.jpg',
    'https://oss.static.nubia.cn/upload/592fb37f7804752.jpg',
    'https://oss.static.nubia.cn/upload/592fb3803cb9d38.jpg',
    'https://oss.static.nubia.cn/upload/592fb380d458a92.jpg',
    'https://oss.static.nubia.cn/upload/592fb3819ca5c44.jpg',
    'https://oss.static.nubia.cn/upload/592fb38276aa432.jpg',
    'https://oss.static.nubia.cn/upload/592fe090cfa8b47.jpg',
    'https://oss.static.nubia.cn/upload/5a2e445562c9035.jpg',
    'https://oss.static.nubia.cn/upload/59310fb7095b699.jpg',
    'https://oss.static.nubia.cn/upload/59561e146efe593.jpg',
    'https://oss.static.nubia.cn/upload/592fe0ca129f546.jpg',
    'https://oss.static.nubia.cn/upload/592fe0d214d7d49.jpg',
    'https://oss.static.nubia.cn/upload/592fb3897ee7424.jpg',
    'https://oss.static.nubia.cn/upload/592fb38a4fe7c26.jpg',
    'https://oss.static.nubia.cn/upload/592fb38ae2d141.jpg',
  ],
}

const products_list = [
      product_v18_1,
      product_v18_2,
      product_v18_3,
      product_z17_1,
];
const products_modle = [
    products_z17,
    products_v18
]

const indexData = {
  "carousel": [{
      "id": '1001',
      "title": "V18预约页面（3.29-4.3）",
      "description": "",
      "image_url": "https://oss.static.nubia.cn/blockimage/152272322740.jpg",
      "products_id": '938'
    },
    {
      "id": '1002',
      "title": "Z17 直降（3.30）",
      "description": "",
      "image_url": "https://oss.static.nubia.cn/blockimage/152239351592.jpg",
      "products_id": '882'
    }
  ],
  "layoutB": {
    'left_max': {
      "id": 1013,
      "title": "V18 预约",
      "description": "",
      "image_url": "https://oss.static.nubia.cn/blockimage/15216858609.jpg",
      "products_id": '882'
    },
    'right_top_mini': {
      "id": 1014,
      "title": "Z17 (3.22)",
      "description": "",
      "image_url": "https://oss.static.nubia.cn/blockimage/152168594748.jpg",
      "products_id": '882'
    },
    'right_bottom_mini': {
      "id": 1035,
      "title": "Z17miniS",
      "description": "",
      "image_url": "https://oss.static.nubia.cn/blockimage/152272474858.jpg",
      "products_id": '882'
    }
  },
  "layoutTrain": {
    "title": "热销机型",
    "recommend": {
      "id": 1013,
      "title": "Nubia Z17S",
      "description": "全面屏 无边框",
      "image_url": "https://oss.static.nubia.cn/blockimage/150779856642.jpg",
      "products_id": '882'
    },
    "products_list": products_list
  }
}

const typesData ={
    "phone":[
        products_v18,
        products_z17
    ]
}

const IndexCarouselData = function (params) {
  let tmp = {
      'list': []
    },
    i = 0;
  while (i < 5) {
    let object = {
      "id": Random.string(7, 10),
      "title": Random.ctitle(),
      "info": Random.csentence(),
      "image_url": Random.image('200x100', Random.color(), 'Mock Image'),
      "imageAlt": Random.ctitle(),
      "time": Random.now('yyyy-MM-dd HH:mm:ss SS')
    }
    tmp.list.push(object);

    i++;
  }
  return tmp;
}
const IndexInlineBoxData = function (params) {
  let tmp = {
      'list': []
    },
    i = 0;
  while (i < 5) {
    let object = {
      "id": Random.string(7, 10),
      "title": Random.ctitle(2, 4),
      "info": Random.csentence(),
      "image_url": Random.image('100x100', Random.color(), 'Mock Image'),
      "imageAlt": Random.ctitle(),
      "time": Random.now('yyyy-MM-dd HH:mm:ss SS')
    }
    tmp.list.push(object);

    i++;
  }
  return tmp;
}
const IndexLayoutBData = function (params) {
  let tmp = {
    'image1': {
      "id": Random.string(7, 10),
      "title": Random.ctitle(2, 4),
      "info": Random.csentence(),
      "image_url": Random.image('200x200', Random.color(), 'Mock Image'),
      "imageAlt": Random.ctitle(),
      "time": Random.now('yyyy-MM-dd HH:mm:ss SS')
    },
    'image2': {
      "id": Random.string(7, 10),
      "title": Random.ctitle(2, 4),
      "info": Random.csentence(),
      "image_url": Random.image('200x100', Random.color(), 'Mock Image'),
      "imageAlt": Random.ctitle(),
      "time": Random.now('yyyy-MM-dd HH:mm:ss SS')
    },
    'image3': {
      "id": Random.string(7, 10),
      "title": Random.ctitle(2, 4),
      "info": Random.csentence(),
      "image_url": Random.image('200x100', Random.color(), 'Mock Image'),
      "imageAlt": Random.ctitle(),
      "time": Random.now('yyyy-MM-dd HH:mm:ss SS')
    }
  }
  return tmp;
}
const IndexLayoutTrainData = function (params) {
  let tmp = {
      'list': []
    },
    i = 0;
  while (i < 5) {
    let object = {
      "id": Random.string(7, 10),
      "title": Random.ctitle(2, 4),
      "info": Random.csentence(),
      "newPrice": Random.natural(1500, 1800),
      "oldPrice": Random.natural(1400, 1500),
      "tag": Random.pick(['新品', '爆款', '直降500']),
      "image_url": Random.image('100x100', Random.color(), 'Mock Image'),
      "imageAlt": Random.ctitle(),
      "time": Random.now('yyyy-MM-dd HH:mm:ss SS')
    }
    tmp.list.push(object);

    i++;
  }
  return tmp;
}

const TypesPhoneData = function (params) {
  let tmp = {
      'list': []
    },
    i = 0;
  while (i < 12) {
    let object = {
      "id": Random.string(7, 10),
      "title": Random.ctitle(2, 4),
      "info": Random.csentence(),
      "image_url": Random.image('100x100', Random.color(), 'Mock Image'),
      "imageAlt": Random.ctitle(),
      "time": Random.now('yyyy-MM-dd HH:mm:ss SS')
    }
    tmp.list.push(object);

    i++;
  }
  return tmp;
}

//当post或get请求到/api 路由时Mock会拦截请求并返回上面的数据
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
    
    products_modle.forEach(function(item){
        if(item.model == model){
            tmp=item
        }
    });
    return tmp;


});


