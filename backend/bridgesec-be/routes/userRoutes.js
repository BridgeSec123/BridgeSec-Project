// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const oktaAuth = require('../config/oktaAuth');
const validateAccessToken = require('../config/authValidator');
const router = express.Router();

// Apply the `oktaAuth` middleware to protect all routes
// router.use(oktaAuth);
router.use(validateAccessToken);

// router.post('/', userController.createUser);
// router.get('/', userController.getUsers);
router.post('/', validateAccessToken, userController.createUser);
router.get('/', validateAccessToken, userController.getUsers);

router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
