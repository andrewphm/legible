const Book = require('../models/Book');

// GET single book
const getBook = async (req, res) => {
  const { id } = req.params;

  try {
    let book = await Book.find({ _id: id });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json('Error finding book');
  }
};

// GET Wishlist
const getWishList = async (req, res) => {
  let books;
  try {
    books = await Book.find({ _id: { $in: [...req.body] } });

    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ success: 'false', message: 'failed to fetch books' });
  }
};

// GET Books via queryparams
const getBooks = async (req, res) => {
  const queryCategory = req.query.category;

  try {
    let books;

    if (req.query.free) {
      console.log(req.query.free);
      books = await Book.find({ price: 0 });
      return res.status(200).json(books);
    }

    if (queryCategory) {
      books = await Book.find({
        category: { $in: [...queryCategory.split(',')] },
      });
    } else {
      books = await Book.find().sort({ createdAt: -1 }).limit(20);
    }

    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error finding books');
  }
};

// Create DB book object
const createBook = async (req, res) => {
  const newBook = new Book({
    ...req.body,
  });

  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Fetch books via search query
const searchBooks = async (req, res) => {
  let { q } = req.query;
  q = q.toLowerCase();
  let re = new RegExp(`${q}`, 'ig');

  let data;
  let books;
  try {
    //Searching title
    books = await Book.find({ title: re });

    //Search author
    books = [...books, ...(await Book.find({ author: re }))];

    //Serch categories
    books = [...books, ...(await Book.find({ category: { $in: [q] } }))];

    res.status(200).json(books);
  } catch (error) {
    res.state(400).json({ success: false, message: 'Failed to find books' });
  }
};

module.exports = { createBook, getBook, getBooks, getWishList, searchBooks };
