import appFetch from '../utils/appFetch';
import tokenUtils from '../utils/token';

export const getUserIdentity = (username) => {
  const token = tokenUtils.getToken();
  return appFetch.get(`user?username=${username}`, {
    headers: {
      x_access_token: token
    } 
  });
}

export default {
  getUserIdentity
}