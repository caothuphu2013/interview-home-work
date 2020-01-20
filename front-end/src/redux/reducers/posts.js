import { POSTS } from '../../constants/actionTypes';
import { get as _get } from 'lodash';

const initialState = {
  posts: [],
  post: {}
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS.POSTS_GET_ALL_SUCCESS:
    case POSTS.POSTS_SEARCH_SUCCESS: {
      return {
        ...state,
        posts: _get(action, 'payload.data')
      };
    }
    case POSTS.POSTS_GET_ALL_FAILURE:
    case POSTS.POSTS_SEARCH_FAILURE: {
      return {
        ...state,
        error: _get(action, 'payload.error')
      };
    }
    default:
      return state;
  }
};

export default postsReducer;
