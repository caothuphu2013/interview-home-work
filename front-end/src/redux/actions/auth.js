import { AUTH } from '../../constants/actionTypes';

export const loginRequest = (payload) => ({
  type: AUTH.AUTH_LOGIN_REQUEST,
  payload
});

export const loginSuccess = ({ token, userId }) => ({
  type: AUTH.AUTH_LOGIN_SUCCESS,
  payload: {
    userId,
    token
  }
});

export const loginFailure = (error) => ({
  type: AUTH.AUTH_LOGIN_FAILURE,
  payload: {
    error
  }
});

export const logoutRequest = () => ({
  type: AUTH.AUTH_LOGOUT_REQUEST
});

export const logoutSuccess = () => ({
  type: AUTH.AUTH_LOGOUT_SUCCESS
});
