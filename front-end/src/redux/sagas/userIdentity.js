import { put, call, all, takeLatest } from 'redux-saga/effects';
import * as userIdentityActions from '../actions/userIdentity';
import userIdentityServices from '../../services/userIdentity';
import { USER_IDENTITY } from '../../constants/actionTypes';

export function* getUserIdentity(action) {
  try {
    const { payload } = action;
    const { userId } = payload;
    const response = yield call(userIdentityServices.getUserIdentity, userId);
    yield put(userIdentityActions.getUserIdentitySuccess(response));
  } catch (error) {
    yield put(userIdentityActions.getUserIdentityFailure(error));
  }
}

export default function* root() {
  yield all([
    takeLatest(USER_IDENTITY.USER_IDENTITY_GET_INFO_REQUEST, getUserIdentity)
  ])
}