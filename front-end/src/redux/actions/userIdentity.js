import { USER_IDENTITY } from '../../constants/actionTypes';

export const getUserIdentityRequest = (userId) => ({
  type: USER_IDENTITY.USER_IDENTITY_GET_INFO_REQUEST,
  payload: {
    userId
  }
});

export const getUserIdentitySuccess = (data) => ({
  type: USER_IDENTITY.USER_IDENTITY_GET_INFO_SUCCESS,
  payload: {
    data
  }
});

export const getUserIdentityFailure = (error) => ({
  type: USER_IDENTITY.USER_IDENTITY_GET_INFO_FAILURE,
  payload: {
    error
  }
});