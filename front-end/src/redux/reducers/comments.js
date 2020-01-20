import { COMMENTS } from '../../constants/actionTypes';
import { get as _get } from 'lodash';

const initialState = {
  comments: []
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS.COMMENTS_GET_ALL_SUCCESS: {
      return {
        ...state,
        comments: _get(action, 'payload.data')
      };
    }
    case COMMENTS.COMMENTS_GET_ALL_FAILURE: {
      return {
        ...state,
        error: _get(action, 'payload.error')
      };
    }
    default:
      return state;
  }
};

export default commentsReducer;
