// controllers/userController.js
const userService = require('../services/userService');
const logger = require('../utils/logger');

exports.createUser = (req, res) => {
  try {
    const user = userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    logger.error('Error creating user:', error);
    res.status(400).json({ error: 'Failed to create user' });
  }
};

exports.getUsers = (req, res) => {
  try {
    const users = userService.getUsers();
    logger.info(1)
    res.json(users);
  } catch (error) {
    logger.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

exports.getUserById = (req, res) => {
  try {
    const user = userService.getUserById(Number(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    logger.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

exports.updateUser = (req, res) => {
  try {
    const user = userService.updateUser(Number(req.params.id), req.body);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    logger.error('Error updating user:', error);
    res.status(400).json({ error: 'Failed to update user' });
  }
};

exports.deleteUser = (req, res) => {
  try {
    const user = userService.deleteUser(Number(req.params.id));
    if (user) {
      res.json({ message: 'User deleted', user });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    logger.error('Error deleting user:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};
