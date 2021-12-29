const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
    displayName: { type: String, required: true },
    country: { type: String, required: true },
    library: { type: Array },
    wishList: { type: Array },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
