// services/userService.js

let users = [];
let currentId = 1;

exports.createUser = (data) => {
  const user = { id: currentId++, ...data };
  users.push(user);
  return user;
};

exports.getUsers = () => users;

exports.getUserById = (id) => users.find((user) => user.id === id);

exports.updateUser = (id, data) => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...data };
    return users[userIndex];
  }
  return null;
};

exports.deleteUser = (id) => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    return users.splice(userIndex, 1)[0];
  }
  return null;
};
