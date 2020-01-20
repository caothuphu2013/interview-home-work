import usersData from '../data/users.json';

export const getAllUsers = () => usersData;

export const getUserById = (id) => usersData.find((user) => user.id === id);

export default {
  getAllUsers,
  getUserById
}