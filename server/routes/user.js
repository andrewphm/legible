const router = require('express').Router();
const { isUserUnique, updateUser, getUsers } = require('../controllers/user');
const { verifyToken } = require('../controllers/verifyToken');

// Check if User is unique
router.post('/unique', isUserUnique);

// Update User
router.post('/', verifyToken, updateUser);

// Get Users
router.get('/', getUsers);

module.exports = router;
