import { combineReducers } from 'redux';

import authReducer from './auth';
import commentsReducer from './comments';
import detailReducer from './detail';
import postsReducer from './posts';
import userIdentityReducer from './userIdentity';


export default combineReducers({
  authReducer,
  commentsReducer,
  detailReducer,
  postsReducer,
  userIdentityReducer
});