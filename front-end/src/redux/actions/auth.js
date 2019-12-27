import { AUTH } from '../../constants/actionTypes';

export const registerRequest = (payload) => ({
  type: AUTH.AUTH_REGISTER_REQUEST,
  payload
});

export const registerSuccess = (data) => ({
  type: AUTH.AUTH_REGISTER_SUCCESS,
  payload: {
    data
  }
});

export const registerFailure = (error) => ({
  type: AUTH.AUTH_REGISTER_FAILURE,
  payload: {
    error
  }
});

export const loginRequest = (payload) => ({
  type: AUTH.AUTH_LOGIN_REQUEST,
  payload
});

export const loginSuccess = ({ token, username }) => ({
  type: AUTH.AUTH_LOGIN_SUCCESS,
  payload: {
    username,
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
