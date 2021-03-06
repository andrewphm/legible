const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const bookRoute = require('./routes/book');
const stripeRoute = require('./routes/stripe');
const orderRoute = require('./routes/order');

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
app.use('/api/user', userRoute);
app.use('/api/book', bookRoute);
app.use('/api/stripe', stripeRoute);
app.use('/api/order', orderRoute);

app.listen(process.env.PORT || 5000, () => console.log('Server Started'));
