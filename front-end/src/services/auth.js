import { get as _get } from 'lodash';
import appFetch from '../utils/appFetch';

const register = (payload) => {
  const username = _get(payload, 'username', '');
  const password = _get(payload, 'password', '');
  const name = _get(payload, 'name', '');

  return appFetch.post('register', {
    username,
    password,
    name
  })
}

const login = (payload) => {
  const username = _get(payload, 'username', '');
  const password = _get(payload, 'password', '');

  return appFetch.post('login', {
    username,
    password
  });
};

export default {
  register,
  login
}