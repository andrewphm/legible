const Book = require('../models/Book');

// GET Books via queryparams
const getBooks = async (req, res) => {
  const queryCategory = req.query.category;

  try {
    let books;

    if (queryCategory) {
      books = await Book.find({ category: queryCategory });
    } else {
      books = await Book.find().limit(10);
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

module.exports = { createBook, getBooks };
