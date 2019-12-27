import { all, call, takeEvery, put } from 'redux-saga/effects';
import { get as _get } from 'lodash';

import * as commentsActions from '../actions/comments';
import commentsServices from '../../services/comments';
import { COMMENTS } from '../../constants/actionTypes';


export function* getAllComments() {
  try {
    const response = yield call(commentsServices.getAllComments);
    yield put(commentsActions.getAllCommentsSuccess(response));
  } catch (error) {
    yield put(commentsActions.getAllCommentsFailure(error));
  }
}

export function* getCommentByIdPost(action) {
  try {
    const id = _get(action, 'payload.id', '');
    const response = yield call(commentsServices.getCommentByIdPost, id);
    yield put(commentsActions.getCommentByIdPostSuccess(response));
  } catch (error) {
    yield put(commentsActions.getCommentByIdPostFailure(error));
  }
}

export default function* root() {
  yield all([
    takeEvery(COMMENTS.COMMENTS_GET_ALL_REQUEST, getAllComments),
    takeEvery(COMMENTS.COMMENTS_GET_BY_ID_POST_REQUEST, getCommentByIdPost),
  ]);
}