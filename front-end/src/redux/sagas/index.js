import { all, fork } from 'redux-saga/effects';

import auth from './auth';
import detail from './detail';
import comments from './comments';
import posts from './posts';
import userIdentity from './userIdentity';

export default function* root() {
  yield all([fork(auth), fork(detail), fork(comments), fork(posts), fork(userIdentity)]);
}
