// product
import { _get, _post} from './config'

export const getProductById = (data) => {
    let req = {
      data: data,
      url: '/get_product_by_id'
    };
    return _post(req);
}
