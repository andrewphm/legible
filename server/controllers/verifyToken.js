const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const jsonWebToken = req.headers.token;

  if (jsonWebToken) {
    const token = jsonWebToken.split(' ')[1];

    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err)
        return res
          .status(401)
          .json('You do not have permission or your JWT is expired.');
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json('You are not authenticated');
  }
};

module.exports = { verifyToken };
