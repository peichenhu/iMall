import Mock from "mockjs"

// Mock.Random 是一个工具类，用于生成各种随机数据。
const Random = Mock.Random;
const IndexCarouselData = function (parameter) {
  console.log('parameter:' + parameter);
  let tmp = {
      'list': []
    },
    i = 0;
  while (i < 5) {
    let object = {
      "id": Random.string(7, 10),
      "title": Random.ctitle(),
      "info": Random.csentence(),
      "imageUrl": Random.image('200x100', Random.color(), 'Mock Image'),
      "imageAlt": Random.ctitle(),
      "time": Random.now('yyyy-MM-dd HH:mm:ss SS')
    }
    tmp.list.push(object);

    i++;
  }
  return tmp;
}
const IndexInlineBoxData = function (parameter) {
  console.log('parameter:' + parameter);
  let tmp = {
      'list': []
    },
    i = 0;
  while (i < 5) {
    let object = {
      "id": Random.string(7, 10),
      "title": Random.ctitle(2, 4),
      "info": Random.csentence(),
      "imageUrl": Random.image('100x100', Random.color(), 'Mock Image'),
      "imageAlt": Random.ctitle(),
      "time": Random.now('yyyy-MM-dd HH:mm:ss SS')
    }
    tmp.list.push(object);

    i++;
  }
  return tmp;
}
const IndexLayoutBData = function (parameter) {
  console.log('parameter:' + parameter);
  let tmp = {
    'image1': {
      "id": Random.string(7, 10),
      "title": Random.ctitle(2, 4),
      "info": Random.csentence(),
      "imageUrl": Random.image('200x200', Random.color(), 'Mock Image'),
      "imageAlt": Random.ctitle(),
      "time": Random.now('yyyy-MM-dd HH:mm:ss SS')
    },
    'image2': {
      "id": Random.string(7, 10),
      "title": Random.ctitle(2, 4),
      "info": Random.csentence(),
      "imageUrl": Random.image('200x100', Random.color(), 'Mock Image'),
      "imageAlt": Random.ctitle(),
      "time": Random.now('yyyy-MM-dd HH:mm:ss SS')
    },
    'image3': {
      "id": Random.string(7, 10),
      "title": Random.ctitle(2, 4),
      "info": Random.csentence(),
      "imageUrl": Random.image('200x100', Random.color(), 'Mock Image'),
      "imageAlt": Random.ctitle(),
      "time": Random.now('yyyy-MM-dd HH:mm:ss SS')
    }
  }
  return tmp;
}
const IndexLayoutTrainData = function (parameter) {
  console.log('parameter:' + parameter);
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
      "imageUrl": Random.image('100x100', Random.color(), 'Mock Image'),
      "imageAlt": Random.ctitle(),
      "time": Random.now('yyyy-MM-dd HH:mm:ss SS')
    }
    tmp.list.push(object);

    i++;
  }
  return tmp;
}

const TypesPhoneData = function (parameter) {
    console.log('parameter:' + parameter);
    let tmp = {
        'list': []
      },
      i = 0;
    while (i < 12) {
        let object = {
          "id": Random.string(7, 10),
          "title": Random.ctitle(2, 4),
          "info": Random.csentence(),
          "imageUrl": Random.image('100x100', Random.color(), 'Mock Image'),
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
Mock.mock('/getIndexCarouselData', /get/i, IndexCarouselData);
Mock.mock('/getIndexInlineBoxData', /get/i, IndexInlineBoxData);
Mock.mock('/getIndexLayoutBData', /get/i, IndexLayoutBData);
Mock.mock('/getIndexLayoutTrainData', /get/i, IndexLayoutTrainData);
// types
Mock.mock('/getTypesPhoneData', /get/i, TypesPhoneData);
Mock.mock('/getTypesHeadsetData', /get/i, TypesPhoneData);
Mock.mock('/getTypesPartsData', /get/i, TypesPhoneData);