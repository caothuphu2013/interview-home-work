import { put, call, all, takeLatest } from 'redux-saga/effects';
import * as userIdentityActions from '../actions/userIdentity';
import userIdentityServices from '../../services/userIdentity';
import { USER_IDENTITY } from '../../constants/actionTypes';
import { get as _get } from 'lodash';

export function* getUserIdentity(action) {
  try {
    const { payload } = action;
    const { username } = payload;
    const response = yield call(userIdentityServices.getUserIdentity, username);
    yield put(userIdentityActions.getUserIdentitySuccess(response.data));
  } catch (error) {
    const messageError = _get(error, 'response.data.messageError', 'Error');
    yield put(userIdentityActions.getUserIdentityFailure(messageError));
  }
}

export default function* root() {
  yield all([takeLatest(USER_IDENTITY.USER_IDENTITY_GET_INFO_REQUEST, getUserIdentity)]);
}
