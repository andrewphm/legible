const Book = require('../models/Book');

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

module.exports = { createBook };
