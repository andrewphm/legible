const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    book: { type: String, required: true },
    author: { type: Object, required: true },
    price: { type: Number },
    category: { type: Array },
    details: { type: Object },
    reviews: { type: Object },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', BookSchema);
