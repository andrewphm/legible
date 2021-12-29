const User = require('../models/User');

// GET user
const isUserUnique = async (req, res) => {
  try {
    const user = await User.findOne({ ...req.body });
    res.status(200).json('false');
  } catch (error) {
    res.status(401).json('true');
  }
};

module.exports = { isUserUnique };
