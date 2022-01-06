const stripe = require('stripe')(process.env.STRIPE_SEC);
const Book = require('../models/Book');

const calculateOrderAmount = async (items) => {
  let book = await Book.find({ _id: items[0].id });
  let price = book[0].price * 100;
  return price;
};

// Create a PaymentIntent with the order amount and currency
const createPaymentIntent = async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency

  let price = await calculateOrderAmount(items);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price,
    currency: 'cad',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.status(200).json({
    clientSecret: paymentIntent.client_secret,
  });
};

module.exports = { createPaymentIntent };
