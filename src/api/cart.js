// index
import { _get, _post} from './config'

export const getRecommend = function (params) {
    return _get({
        'data':params,
        'url':'/get_cart_recommend'
    });
}

export const getProductsByIds = function(params){
    return _post({
        data: params,
        url:"/get_products_by_ids"
    })
}