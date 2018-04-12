/**
 * localStorage.colorSetting = '#a4509b';
 * localStorage['colorSetting'] = '#a4509b';
 * localStorage.setItem('colorSetting', '#a4509b');
 * var cat = localStorage.getItem("myCat");
 * localStorage.removeItem("myCat");
 */

const getLocalStorageCollections = () => {
  let tmp = localStorage.getItem("collections");
  if (!tmp || tmp==='') { 
    tmp = [];
  } else{
    tmp = tmp.split(',')
  }
  return tmp;

}
const getLocalStorageCart = () => {

    let tmp = localStorage.getItem("cart");

    if (!tmp || tmp==='') { 
        return [];
    } else{
        return tmp.split(',')
    }
}

const changeLocalStorageCollections = arr => {
  let tmp = arr.join();
  localStorage.setItem("collections",tmp);
}


const changeLocalStorageCart = (arr) => {
    localStorage.setItem("cart", arr.join(','));
}

export {
  getLocalStorageCollections,
  getLocalStorageCart,
  changeLocalStorageCollections,
  changeLocalStorageCart
}
