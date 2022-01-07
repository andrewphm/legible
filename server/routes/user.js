const router = require('express').Router();
const { isUserUnique, updateUser } = require('../controllers/user');

// Check if User is unique
router.post('/unique', isUserUnique);

// Update User
router.post('/', updateUser);

module.exports = router;
