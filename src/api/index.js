// index
import { _get, _post } from "./config";

export const getIndexData = (data) => {
    let req = {
      data: data,
      url: '/get_index_data'
    };
    return _get(req);
}
