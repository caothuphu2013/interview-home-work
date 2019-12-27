import appFetch from '../utils/appFetch';

export const getUserIdentity = (username) => {
  const token = localStorage.getItem('token');
  return appFetch.get(`user?username=${username}`, {
    headers: {
      x_access_token: token
    } 
  });
}

export default {
  getUserIdentity
}