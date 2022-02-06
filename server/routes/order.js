const router = require('express').Router();

const {
  getOrders,
  createOrder,
  getMonthlyIncome,
} = require('../controllers/order');

// GET Orders
router.get('/', getOrders);

// GET Monthly Income
router.get('/stats', getMonthlyIncome);

// Create Order
router.post('/', createOrder);

module.exports = router;
