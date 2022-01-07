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

// Update user

const updateUser = async (req, res) => {
  try {
    let updatedUser = await User.findByIdAndUpdate(
      req.body._id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json('Could not update user');
  }
};

module.exports = { isUserUnique, updateUser };
