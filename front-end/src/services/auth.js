import { get as _get } from 'lodash';
import usersData from '../data/users.json';

const login = (payload) => {
  const username = _get(payload, 'username', '');
  const password = _get(payload, 'password', '');

  return usersData.find((user) => user.username === username || user.password === password);
};

export default {
  login
}