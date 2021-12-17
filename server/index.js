const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require('./routes/auth');

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('DB connected!'))
  .catch((err) => console.error(err));

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/auth', authRoute);

app.listen(process.env.PORT || 5000, () => console.log('Server Started'));
