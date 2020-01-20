import { DETAIL } from '../../constants/actionTypes';
import { get as _get } from 'lodash';

const initialState = {
  post: {}
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL.DETAIL_GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        post: _get(action, 'payload.data', {})
      };
    case DETAIL.DETAIL_GET_POST_BY_ID_FAILURE:
      return {
        ...state,
        error: _get(action, 'payload.data.error', 'Cannot get detail post')
      };
    default:
      return state;
  }
};

export default detailReducer;
