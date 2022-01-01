const router = require('express').Router();

const { createBook, getBooks } = require('../controllers/book');

//GET Books
router.get('/', getBooks);

//Create Book
router.post('/create', createBook);

module.exports = router;
