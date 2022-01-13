const router = require('express').Router();

const {
  createBook,
  getBooks,
  getBook,
  getWishList,
  searchBooks,
} = require('../controllers/book');

// Search books
router.get('/search', searchBooks);
//GET Books
router.get('/:id', getBook);
router.get('/', getBooks);

//Create Book
router.post('/create', createBook);

//GET Wishlist
router.post('/wishlist', getWishList);

module.exports = router;
