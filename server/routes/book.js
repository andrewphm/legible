const router = require('express').Router();

const { createBook, getBooks, getBook } = require('../controllers/book');

//GET Books
router.get('/:id', getBook);
router.get('/', getBooks);

//Create Book
router.post('/create', createBook);

module.exports = router;
