/**
 * localStorage.colorSetting = '#a4509b';
 * localStorage['colorSetting'] = '#a4509b';
 * localStorage.setItem('colorSetting', '#a4509b');
 * var cat = localStorage.getItem("myCat");
 * localStorage.removeItem("myCat");
 */

// 获取本地存储-收藏
const getLocalStorageCollections = () => {
    let tmp = JSON.parse(localStorage.getItem("collections")) 
    if (!tmp)  return [];
    return tmp.products_id
}
// 获取本地存储-购物车
const getLocalStorageCart = () => {
    let tmp = JSON.parse(localStorage.getItem("cart")) 
    if (!tmp)  return [];
    return tmp.products_id
}
// 重置本地存储-收藏
const changeLocalStorageCollections = arr => {
  localStorage.setItem("collections", JSON.stringify({"products_id":arr}));
}
// 重置本地存储-购物车
const changeLocalStorageCart = (arr) => {
    localStorage.setItem("cart", JSON.stringify({"products_id":arr}));
}

export {
  getLocalStorageCollections,
  getLocalStorageCart,
  changeLocalStorageCollections,
  changeLocalStorageCart
}
