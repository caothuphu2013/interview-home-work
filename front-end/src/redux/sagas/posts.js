import { all, put, takeEvery, call, takeLatest, delay } from 'redux-saga/effects';
import { get as _get } from 'lodash';
import * as postsActions from '../actions/posts';
import { POSTS } from '../../constants/actionTypes';

import postsServices from '../../services/posts';
import commentsServices from '../../services/comments';
import usersServices from '../../services/users';

export function* getAllPosts() {
  try {
    const [comments, posts, usersData] = yield all([call(commentsServices.getAllComments), call(postsServices.getAllPosts), call(usersServices.getAllUsers)]);
    const response = yield call(postsServices.formatPosts, posts, comments, usersData);
    yield put(postsActions.getAllPostsSuccess(response));
  } catch (error) {
    yield put(postsActions.getAllPostsFailure(error));
  }
}

export function* searchPosts(action) {
  try {
    const keyword = _get(action, 'payload.keyword');
    yield delay(1000);
    const response = yield call(postsServices.searchPosts, keyword);
    yield put(postsActions.searchPostsSuccess(response));
  } catch (error) {
    yield put(postsActions.searchPostsFailure(error));
  }
}

export default function* root() {
  yield all([takeEvery(POSTS.POSTS_GET_ALL_REQUEST, getAllPosts), takeLatest(POSTS.POSTS_SEARCH_REQUEST, searchPosts)]);
}
