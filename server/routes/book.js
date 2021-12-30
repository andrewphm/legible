const router = require('express').Router();

const { createBook } = require('../controllers/book');

//Create Book
router.post('/create', createBook);

module.exports = router;
