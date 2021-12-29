const User = require('../models/User');

// GET user
const isUserUnique = async (req, res) => {
  try {
    const user = await User.findOne({ ...req.body });
    if (user === null) {
      res.status(200).json({ isUnique: true });
    } else {
      res.status(200).json({ isUnique: false });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { isUserUnique };
