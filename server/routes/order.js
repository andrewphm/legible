const router = require('express').Router();

const { getOrders, createOrder } = require('../controllers/order');

// GET Orders
router.get('/', getOrders);

// Create Order
router.post('/', createOrder);

module.exports = router;
