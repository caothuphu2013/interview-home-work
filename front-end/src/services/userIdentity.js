import usersData from '../data/users.json';

export const getUserIdentity = (userId) => {
  return usersData.find(user => user.id === userId);
}

export default {
  getUserIdentity
}