const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    book: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number },
    category: { type: Array },
    details: { type: Object },
    reviews: { type: Array },
    description: { type: String },
    images: { type: Object },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', BookSchema);
