import { put, all, takeLatest, call, delay } from 'redux-saga/effects';
import * as authActions from '../actions/auth';
import * as userIdentityActions from '../actions/userIdentity';

import { AUTH } from '../../constants/actionTypes';
import authServices from '../../services/auth';
import { get as _get } from 'lodash';

export function* login(action) {
  try {
    const { payload } = action;
    const response = yield call(authServices.login, payload);
    yield delay(1000);
    const { username, accessToken } = response.data;
    yield put(authActions.loginSuccess({username, token: accessToken}));
    localStorage.setItem('token', accessToken);
    yield put(userIdentityActions.getUserIdentityRequest(username));
  } catch (error) {
    const messageError = _get(error, 'response.data.messageError', 'Error')
    yield put(authActions.loginFailure(messageError));
  }
}

export function* logout() {
  localStorage.clear();
  yield put(authActions.logoutSuccess());
}

export default function* root() {
  yield all([
    takeLatest(AUTH.AUTH_LOGIN_REQUEST, login),
    takeLatest(AUTH.AUTH_LOGOUT_REQUEST, logout)
  ])
}