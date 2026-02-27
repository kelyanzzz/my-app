const User = require('../models/user');

const createUser = async (name, email) => {
  return await User.createUser(name, email);
};

const getUsers = async () => {
  return await User.getUsers();
};

const updateUser = async (id, name, email) => {
  return await User.updateUser(id, name, email);
};

const deleteUser = async (id) => {
  return await User.deleteUser(id);
};

module.exports = { createUser, getUsers, updateUser, deleteUser };