import { AUTH } from '../../constants/actionTypes';
import { get as _get } from 'lodash';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  userId: '',
  error: ''
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTH.AUTH_LOGIN_REQUEST: {
      return {
        ...state,
        isAuthenticated: false,
        userId: '',
        isFetching: true
      }
    }
    case AUTH.AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        userId: _get(action, 'payload.userId', ''),
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
        isAuthenticated: false
      };
    }
    case AUTH.AUTH_LOGOUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false
      };
    default:
      return state;
  }
}

export default authReducer;