import { put, all, takeLatest, call, delay } from 'redux-saga/effects';
import { get as _get } from 'lodash';
import * as authActions from '../actions/auth';
import * as userIdentityActions from '../actions/userIdentity';
import { AUTH } from '../../constants/actionTypes';
import authServices from '../../services/auth';
import tokenUtils from '../../utils/token';

export function* register(action) {
  try {
    const { payload } = action;
    const response = yield call(authServices.register, payload);
    const { username } = response.data;
    yield put(authActions.registerSuccess(username));
  } catch (error) {
    const messageError = _get(error, 'response.data.messageError', 'Error');
    yield put(authActions.registerFailure(messageError));
  }
}

export function* login(action) {
  try {
    const { payload } = action;
    const response = yield call(authServices.login, payload);
    const { username, accessToken } = response.data;
    tokenUtils.setToken(accessToken);
    yield put(authActions.loginSuccess({ username, token: accessToken }));
    yield put(userIdentityActions.getUserIdentityRequest(username));
  } catch (error) {
    const messageError = _get(error, 'response.data.messageError', 'Error');
    yield put(authActions.loginFailure(messageError));
  }
}

export function* logout() {
  tokenUtils.removeToken();
  yield put(authActions.logoutSuccess());
}

export default function* root() {
  yield all([takeLatest(AUTH.AUTH_REGISTER_REQUEST, register), takeLatest(AUTH.AUTH_LOGIN_REQUEST, login), takeLatest(AUTH.AUTH_LOGOUT_REQUEST, logout)]);
}
