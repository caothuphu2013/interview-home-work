import { AUTH } from '../../constants/actionTypes';
import { get as _get } from 'lodash';

const initialState = {
  isFetching: false,
  isRegistered: false,
  isAuthenticated: false,
  username: '',
  error: ''
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTH.AUTH_REGISTER_REQUEST: {
      return {
        ...state,
        isRegistered: false,
        isFetching: true,
        error: ''
      }
    }
    case AUTH.AUTH_REGISTER_SUCCESS: {
      return {
        ...state,
        isRegistered: true,
        isFetching: false
      }
    }
    case AUTH.AUTH_REGISTER_FAILURE: {
      return {
        ...state,
        isRegistered: false,
        isFetching: false,
        error: _get(action, 'payload.error', '')
      }
    }
    case AUTH.AUTH_LOGIN_REQUEST: {
      return {
        ...state,
        isAuthenticated: false,
        username: '',
        isFetching: true
      }
    }
    case AUTH.AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        username: _get(action, 'payload.username', ''),
        isAuthenticated: true,
        error: ''
      }
    }
    case AUTH.AUTH_LOGIN_FAILURE: {
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        error: _get(action, 'payload.error', '')
      }
    }
    case AUTH.AUTH_LOGOUT_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        isRegistered: false
      };
    }
    case AUTH.AUTH_LOGOUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        isRegistered: false
      };
    default:
      return state;
  }
}

export default authReducer;