const router = require('express').Router();
const {
  isUserUnique,
  updateUser,
  getUsers,
  getUser,
  getUserStats,
} = require('../controllers/user');
const { verifyTokenAndAdmin } = require('../controllers/verifyToken');

// Check if User is unique
router.post('/unique', isUserUnique);

// Update User
router.put('/', verifyTokenAndAdmin, updateUser);

// Get Users
router.get('/', getUsers);

// Get User Stats
router.get('/stats', getUserStats);
// Get single user
router.get('/:id', getUser);

module.exports = router;
