const Z18mini_993 = {
  id: 993,
  title: "Z18mini  耀钻黑 6GB+64GB",
  model: "Z18mini",
  color: "耀钻黑",
  storage: "6GB+64GB",
  price: 1799,
  original_price: "",
  sale: "【开售时间】4月19日10点",
  product_images: [
    "images/152274208068.png",
    "images/152274209976.png",
    "images/152274209928.png",
    "images/152274210032.png"
  ],
  sale_tag: {
    is_need: true,
    position: "left",
    text: "新品",
    color: "#e60012"
  }
};
const V18_983 = {
  id: 983,
  title: "V18 全面屏 曜石黑 4GB+64GB",
  model: "V18 全面屏",
  color: "曜石黑",
  storage: "4GB+64GB",
  price: 1299,
  original_price: "",
  sale: "6吋全面屏/充一次，用2天",
  product_images: [
    "images/15215238003.jpg",
    "images/152152380072.jpg",
    "images/152152380182.jpg",
    "images/152152380130.jpg"
  ],
  sale_tag: {
    is_need: false,
    position: "left",
    text: "新品",
    color: "#e60012"
  }
};
const V18_984 = {
  id: 984,
  title: "V18 全面屏  太空金 4GB+64GB",
  model: "V18 全面屏",
  color: "太空金",
  storage: "4GB+64GB",
  price: 1299,
  original_price: "",
  sale: "【99元预定】预定赠￥99元律音耳机",
  product_images: [
    "images/15215238003.jpg",
    "images/152152380072.jpg",
    "images/152152380182.jpg",
    "images/152152380130.jpg"
  ],
  sale_tag: {
    is_need: false,
    position: "left",
    text: "新品",
    color: "#e60012"
  }
};
const Z17S_934 = {
  id: 934,
  title: "Z17S 全面屏 极光蓝 8GB+128GB",
  model: "Z17S 全面屏",
  color: "极光蓝",
  storage: "8GB+128GB",
  price: 3999,
  original_price: "",
  sale: "90.36%的屏占比/5.2英寸手机握感/3D四曲面玻璃机身/骁龙835处理器",
  product_images: [
    "images/150777836961.jpg",
    "images/150777836952.jpg",
    "images/150762277956.jpg",
    "images/151201955720.jpg"
  ],
  sale_tag: {
    is_need: false,
    position: "left",
    text: "新品",
    color: "#e60012"
  }
};
const Z17S_935 = {
  id: 935,
  title: "Z17S 全面屏  黑金 6GB+64GB",
  model: "Z17S 全面屏",
  color: "黑金",
  storage: "6GB+64GB",
  price: 2699,
  original_price: 2999,
  sale: "90.36%的屏占比/5.2英寸手机握感/3D四曲面玻璃机身/骁龙835处理器",
  product_images: [
    "images/150777823783.jpg",
  ],
  sale_tag: {
    is_need: true,
    position: "left",
    text: "直降300",
    color: "#e60012"
  }
};
const Z17_885 = {
  id: 885,
  title: "Z17 旗舰版  烈焰红 6GB+64GB",
  model: "Z17 旗舰版",
  color: "烈焰红",
  storage: "6GB+64GB",
  price: 2299,
  original_price: 2499,
  sale: "【直降200】骁龙835旗舰处理器/2300万+1200万 变焦双摄",
  product_images: [
    "images/150094951146.jpg",
    "images/149631325092.jpg",
    "images/149631325050.jpg",
    "images/149631325110.jpg"
  ],
  sale_tag: {
    is_need: true,
    position: "left",
    text: "直降200",
    color: "#e60012"
  }
};

const Z17 = {
  title: "Z17 旗舰版",
  products_specifications: [Z17_885],
  products_poster:
    "/885.html"
};
const Z18mini = {
  title: "Z18mini",
  products_specifications: [Z18mini_993],
  products_poster:
    "/993.html"
};
const V18 = {
  title: "V18 全面屏",
  products_specifications: [V18_983, V18_984],
  products_poster:
    "/983.html"
};
const Z17S = {
  title: "Z17S 全面屏",
  products_specifications: [Z17S_934, Z17S_935],
  products_poster:
    "/934.html"
};

export const typesData = {
  phone: [Z17, Z17S, Z18mini, V18]
};
export const products_list = [
  Z18mini_993,
  V18_983,
  V18_984,
  Z17S_934,
  Z17S_935,
  Z17_885
];

export const indexData = {
  carousel: [
    {
      title: "努比亚 Z18mini 新品上市",
      image_url: "images/15234308493.jpg",
      page_link: null,
      products_id: 993
    },
    {
      title: "不红魔 不成活",
      image_url: "images/152403284580.jpg",
      page_link: "/activity_hongmo",
      products_id: null
    },
    {
      title: "努比亚 Z17s 直降300",
      image_url: "images/15236079262.jpg",
      page_link: null,
      products_id: 934
    }
  ],
  layoutB: {
    left_max: {
      title: "努比亚 Z18mini 全面屏小牛",
      image_url: "images/152343329014.jpg",
      products_id: 993
    },
    right_top_mini: {
      title: "努比亚 V18",
      image_url: "images/152343335928.jpg",
      products_id: 983
    },
    right_bottom_mini: {
      title: "努比亚 Z17 最高直降1000",
      image_url: "images/152343341798.jpg",
      products_id: 885
    }
  },
  layoutTrain: {
    title: "热销机型",
    recommend_product_id: 934,
    recommend_product_title: "Z17S 全面屏",
    recommend_product_image:
      "images/152361000669.jpg",
    products_list: products_list
  }
};

export const cartRecommendData = {
  title: "为您推荐",
  recommend_product_id: 934,
  recommend_product_title: "Z17S 全面屏",
  recommend_product_image:
    "images/152361000669.jpg",
  products_list: products_list
};
