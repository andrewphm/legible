const router = require('express').Router();
const { isUserUnique, updateUser } = require('../controllers/user');
const { verifyToken } = require('../controllers/verifyToken');

// Check if User is unique
router.post('/unique', isUserUnique);

// Update User
router.post('/', verifyToken, updateUser);

module.exports = router;
