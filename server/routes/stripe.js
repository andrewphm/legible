const router = require('express').Router();
const { createPaymentIntent } = require('../controllers/stripe');

// Create a PaymentIntent with the order amount and currency
router.post('/create-payment-intent', createPaymentIntent);

module.exports = router;
