import { put, all, takeLatest, call, delay } from 'redux-saga/effects';
import * as authActions from '../actions/auth';
import * as userIdentityActions from '../actions/userIdentity';

import { AUTH } from '../../constants/actionTypes';
import authServices from '../../services/auth';
import { generateToken } from '../../utils/token';

export function* login(action) {
  try {
    const { payload } = action;
    const user = yield call(authServices.login, payload);
    yield delay(1000);
    if (user) {
      const { id } = user;
      yield put(authActions.loginSuccess({userId: id, token: generateToken()}));
      yield put(userIdentityActions.getUserIdentityRequest(id));
    } else {
      yield put(authActions.loginFailure('Invalid username or password'));
    }

  } catch (error) {
    yield put(authActions.loginFailure(error));
  }
}

export function* logout() {
  yield put(authActions.logoutSuccess());
}

export default function* root() {
  yield all([
    takeLatest(AUTH.AUTH_LOGIN_REQUEST, login),
    takeLatest(AUTH.AUTH_LOGOUT_REQUEST, logout)
  ])
}