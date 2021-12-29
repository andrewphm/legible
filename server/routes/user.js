const router = require('express').Router();
const { isUserUnique } = require('../controllers/user');

// Check if User is unique
router.get('/unique', isUserUnique);
