const User = require('../models/User');

// Get 1 User
const getUser = async (req, res) => {
  let { id } = req.params;

  try {
    let user = await User.findById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ success: false, message: 'Could not find user' });
  }
};

// Check if User is unique
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

// GET Users
const getUsers = async (req, res) => {
  const query = req.query.new;

  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (error) {}
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

// GET User Stats
const getUserStats = async (req, res) => {
  const date = new Date();

  // Getting Date from one year ago
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'could not aggregate stats' });
  }
};

module.exports = { isUserUnique, updateUser, getUsers, getUser, getUserStats };
