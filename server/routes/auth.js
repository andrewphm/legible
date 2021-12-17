const router = require('express').Router();

const { signUp } = require('../controllers/auth');

// Sign up and Log in routes
router.post('/sign-up', signUp);

module.exports = router;
