const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User Sign up
const signup = async (req, res) => {
  try {
    const { email, password, username, country, displayName, isAdmin } =
      req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      hashedPassword,
      country,
      displayName,
      isAdmin,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

// User Log in
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    try {
      const user = await User.findOne({ email });
      const success = await bcrypt.compare(password, user.hashedPassword);

      if (success) {
        const accessToken = jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SEC,
          {
            expiresIn: '10d',
          }
        );

        const { hashedPassword, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken });
      } else {
        res.status(401).json('password');
      }
    } catch (error) {
      res.status(401).json('email');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { signup, login };
