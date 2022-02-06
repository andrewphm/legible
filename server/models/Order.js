const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    bookId: { type: String, required: true },
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
