import { put, all, call, takeLatest, select } from 'redux-saga/effects';
import { get as _get } from 'lodash';
import { DETAIL } from '../../constants/actionTypes';
import detailServices from '../../services/detail';
import * as detailActions from '../actions/detail';

export const getPosts = (state) => state.postsReducer.posts

export function* getDetailPost(action) {
  try {
    const id = _get(action, 'payload.id', '');
    const posts = yield select(getPosts);
    const response = yield call(detailServices.getDetailPostById, posts, id);
    yield put(detailActions.getDetailPostByIdSuccess(response)); 
  } catch (error) {
    yield put(detailActions.getDetailPostByIdFailure(error));
  }
}

export default function* root() {
  yield all([
    takeLatest(DETAIL.DETAIL_GET_POST_BY_ID_REQUEST, getDetailPost)
  ])
}