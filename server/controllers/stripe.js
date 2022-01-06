const stripe = require('stripe')(process.env.STRIPE_SEC);

// Create a PaymentIntent with the order amount and currency
const createPaymentIntent = (req, res) => {};

module.exports = { createPaymentIntent };
