const router = require('express').Router();

const {
  createBook,
  getBooks,
  getBook,
  getWishList,
  searchBooks,
  deleteBook,
  updateBook,
} = require('../controllers/book');

const { verifyTokenAndAdmin } = require('../controllers/verifyToken');

// Search books
router.get('/search', searchBooks);
//GET Books
router.get('/:id', getBook);
router.get('/', getBooks);

//Create Book
router.post('/create', createBook);

//GET Wishlist
router.post('/wishlist', getWishList);

//Delete Book
router.delete('/:id', verifyTokenAndAdmin, deleteBook);

//Update Book
router.put('/:id', verifyTokenAndAdmin, updateBook);

module.exports = router;
