import { USER_IDENTITY } from '../../constants/actionTypes';
import { get as _get } from 'lodash';

const initialState = {
  isFetching: false,
  name: '',
  dob: '',
  error: ''
};

const userIdentityReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_IDENTITY.USER_IDENTITY_GET_INFO_REQUEST: {
      return {
        ...state,
        isFetching: true,
        name: '',
        dob: ''
      };
    }
    case USER_IDENTITY.USER_IDENTITY_GET_INFO_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        name: _get(action, 'payload.data.name', ''),
        dob: _get(action, 'payload.data.dob', ''),
        error: ''
      };
    }
    case USER_IDENTITY.USER_IDENTITY_GET_INFO_FAILURE: {
      return {
        ...state,
        isFetching: false,
        name: '',
        dob: '',
        error: _get(action, 'payload.error', 'Cannot get user identity')
      };
    }
    default:
      return state;
  }
};

export default userIdentityReducer;
