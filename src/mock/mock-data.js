export const IndexCarouselData = function (params) {
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

export const IndexInlineBoxData = function (params) {
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

export const IndexLayoutBData = function (params) {
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

export const IndexLayoutTrainData = function (params) {
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
