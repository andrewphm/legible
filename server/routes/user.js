const router = require('express').Router();
const {
  isUserUnique,
  updateUser,
  getUsers,
  getUser,
} = require('../controllers/user');
const { verifyToken } = require('../controllers/verifyToken');

// Check if User is unique
router.post('/unique', isUserUnique);

// Update User
router.post('/', verifyToken, updateUser);

// Get single user
router.get('/:id', getUser);

// Get Users
router.get('/', getUsers);

module.exports = router;
