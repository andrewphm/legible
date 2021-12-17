const router = require('express').Router();

const { signup, login } = require('../controllers/auth');

// Sign up and Log in routes
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
