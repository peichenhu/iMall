// types
import { _get, _post} from './config'

export const getTypesData = (data) => {
    let req = {
      data: data,
      url: '/get_types_data'
    };
    return _get(req);
}

