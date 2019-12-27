import { get as _get } from 'lodash';
import appFetch from '../utils/appFetch';

const login = (payload) => {
  const username = _get(payload, 'username', '');
  const password = _get(payload, 'password', '');

  return appFetch.post('login', {
    username,
    password
  });
};

export default {
  login
}