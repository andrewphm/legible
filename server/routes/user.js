const router = require('express').Router();
const { isUserUnique } = require('../controllers/user');

// Check if User is unique
router.post('/unique', isUserUnique);

module.exports = router;
